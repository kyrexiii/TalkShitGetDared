import { Language, Mode, PromptType, Prompt } from '../types/index';
import { TruthOrDareError } from '../errors/index';

// Direct imports of all data modules
import * as enSfwTruth from '../../data/lang/english/sfw/truth';
import * as enSfwDare from '../../data/lang/english/sfw/dare';
import * as enNsfwTruth from '../../data/lang/english/nsfw/truth';
import * as enNsfwDare from '../../data/lang/english/nsfw/dare';
import * as esSfwTruth from '../../data/lang/spanish/sfw/truth';
import * as esSfwDare from '../../data/lang/spanish/sfw/dare';

/**
 * Handles loading and caching of prompt data from direct imports
 */
export class DataLoader {
  private cache: Map<string, Prompt[]> = new Map();
  private dataMap: Map<string, Prompt[]>;

  constructor() {
    // Create static mapping of all data modules
    this.dataMap = new Map([
      ['english_sfw_truth', enSfwTruth.truthPrompts],
      ['english_sfw_dare', enSfwDare.darePrompts],
      ['english_nsfw_truth', enNsfwTruth.truthPrompts],
      ['english_nsfw_dare', enNsfwDare.darePrompts],
      ['spanish_sfw_truth', esSfwTruth.truthPrompts],
      ['spanish_sfw_dare', esSfwDare.darePrompts],
    ]);
  }

  /**
   * Load prompts from direct imports with caching
   */
  public loadPrompts(language: Language, mode: Mode, type: PromptType): Prompt[] {
    const cacheKey = `${language}_${mode}_${type}`;
    
    // Return cached data if available
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    const dataKey = `${language}_${mode}_${type}`;
    const prompts = this.dataMap.get(dataKey);

    if (!prompts) {
      throw new TruthOrDareError(
        `No data available for language: ${language}, mode: ${mode}, type: ${type}`,
        'DATA_NOT_FOUND'
      );
    }

    this.validatePromptsData(prompts, dataKey);
    
    // Cache the loaded data
    this.cache.set(cacheKey, prompts);
    
    return prompts;
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
   * Get available languages from static data mapping
   */
  public getAvailableLanguages(): Language[] {
    const languages = new Set<Language>();
    
    for (const key of this.dataMap.keys()) {
      const language = key.split('_')[0] as Language;
      languages.add(language);
    }
    
    return Array.from(languages);
  }

  /**
   * Get available modes for a specific language from static data mapping
   */
  public getAvailableModes(language: Language): Mode[] {
    const modes = new Set<Mode>();
    
    for (const key of this.dataMap.keys()) {
      const [keyLanguage, keyMode] = key.split('_');
      if (keyLanguage === language) {
        modes.add(keyMode as Mode);
      }
    }
    
    return Array.from(modes);
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