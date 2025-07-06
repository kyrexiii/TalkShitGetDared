import * as fs from 'fs';
import * as path from 'path';
import { Language, Mode, PromptType, Prompt } from '../types/index';
import { TruthOrDareError } from '../errors/index';

/**
 * Handles loading and caching of prompt data from TypeScript files
 */
export class DataLoader {
  private cache: Map<string, Prompt[]> = new Map();
  private dataPath: string;

  constructor(dataPath: string) {
    this.dataPath = dataPath;
  }

  /**
   * Load prompts from TypeScript file with caching
   */
  public loadPrompts(language: Language, mode: Mode, type: PromptType): Prompt[] {
    const cacheKey = `${language}_${mode}_${type}`;
    
    // Return cached data if available
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const filePath = path.join(this.dataPath, language, mode, `${type}.ts`);
    
    try {
      if (!fs.existsSync(filePath)) {
        throw new TruthOrDareError(
          `Data file not found: ${filePath}`,
          'FILE_NOT_FOUND'
        );
      }

      // Clear the require cache to ensure fresh data
      delete require.cache[require.resolve(filePath)];
      
      // Use require to load the module
      const moduleImport = require(filePath);
      const prompts = moduleImport[`${type}Prompts`];

      if (!prompts) {
        throw new TruthOrDareError(
          `No prompts export found in ${filePath}. Expected ${type}Prompts export.`,
          'NO_EXPORT_FOUND'
        );
      }

      this.validatePromptsData(prompts, filePath);
      
      // Cache the loaded data
      this.cache.set(cacheKey, prompts);
      
      return prompts;
    } catch (error) {
      if (error instanceof TruthOrDareError) {
        throw error;
      }

      throw new TruthOrDareError(
        `Failed to load prompts from ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'LOAD_ERROR'
      );
    }
  }

  /**
   * Validate the structure and content of prompts data
   */
  private validatePromptsData(prompts: any, filePath: string): void {
    if (!Array.isArray(prompts)) {
      throw new TruthOrDareError(
        `Invalid data format in ${filePath}. Expected array of prompts.`,
        'INVALID_DATA_FORMAT'
      );
    }

    if (prompts.length === 0) {
      throw new TruthOrDareError(
        `No prompts found in ${filePath}`,
        'NO_PROMPTS_FOUND'
      );
    }

    // Validate prompt structure
    for (const prompt of prompts) {
      if (!prompt.id || !prompt.prompt) {
        throw new TruthOrDareError(
          `Invalid prompt structure in ${filePath}. Each prompt must have 'id' and 'prompt' fields.`,
          'INVALID_PROMPT_STRUCTURE'
        );
      }
    }
  }

  /**
   * Get available languages by scanning the data directory
   */
  public getAvailableLanguages(): Language[] {
    try {
      if (!fs.existsSync(this.dataPath)) {
        return [];
      }

      const entries = fs.readdirSync(this.dataPath, { withFileTypes: true });
      return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name as Language);
    } catch (error) {
      throw new TruthOrDareError(
        `Failed to get available languages: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'LANGUAGES_ERROR'
      );
    }
  }

  /**
   * Get available modes for a specific language
   */
  public getAvailableModes(language: Language): Mode[] {
    try {
      const languagePath = path.join(this.dataPath, language);
      if (!fs.existsSync(languagePath)) {
        return [];
      }

      const entries = fs.readdirSync(languagePath, { withFileTypes: true });
      return entries
        .filter(entry => entry.isDirectory())
        .map(entry => entry.name as Mode);
    } catch (error) {
      throw new TruthOrDareError(
        `Failed to get available modes for ${language}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'MODES_ERROR'
      );
    }
  }

  /**
   * Clear the cache
   */
  public clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  public getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}