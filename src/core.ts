import * as fs from 'fs';
import * as path from 'path';
import { Language, Mode, PromptType, Prompt, PromptOptions, PromptResult, CoreConfig, TruthOrDareError } from './types';

/**
 * Core class for truth-or-dare logic
 */
export class TruthOrDareCore {
  private config: CoreConfig;

  constructor(config?: Partial<CoreConfig>) {
    this.config = {
      defaultLanguage: 'english',
      defaultMode: 'sfw',
      dataPath: path.join(__dirname, '..', 'data', 'lang'),
      ...config
    };
  }

  /**
   * Load prompts from JSON file
   */
  private loadPrompts(language: Language, mode: Mode, type: PromptType): Prompt[] {
    const filePath = path.join(this.config.dataPath, language, mode, `${type}.json`);
    
    try {
      if (!fs.existsSync(filePath)) {
        throw new TruthOrDareError(
          `Data file not found: ${filePath}`,
          'FILE_NOT_FOUND'
        );
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const prompts = JSON.parse(fileContent) as Prompt[];

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

      return prompts;
    } catch (error) {
      if (error instanceof TruthOrDareError) {
        throw error;
      }
      
      if (error instanceof SyntaxError) {
        throw new TruthOrDareError(
          `Invalid JSON in ${filePath}: ${error.message}`,
          'INVALID_JSON'
        );
      }

      throw new TruthOrDareError(
        `Failed to load prompts from ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'LOAD_ERROR'
      );
    }
  }

  /**
   * Get a random element from an array
   */
  private getRandomElement<T>(array: T[]): T {
    if (array.length === 0) {
      throw new TruthOrDareError('Cannot get random element from empty array', 'EMPTY_ARRAY');
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  /**
   * Get a random truth prompt
   */
  public getTruth(options: PromptOptions = {}): PromptResult {
    const language = options.language || this.config.defaultLanguage;
    const mode = options.mode || this.config.defaultMode;

    try {
      const truths = this.loadPrompts(language, mode, 'truth');
      const selectedTruth = this.getRandomElement(truths);

      return {
        id: selectedTruth.id,
        prompt: selectedTruth.prompt,
        type: 'truth',
        language,
        mode
      };
    } catch (error) {
      // Try fallback to default language and mode if different
      if (language !== this.config.defaultLanguage || mode !== this.config.defaultMode) {
        try {
          const truths = this.loadPrompts(this.config.defaultLanguage, this.config.defaultMode, 'truth');
          const selectedTruth = this.getRandomElement(truths);

          return {
            id: selectedTruth.id,
            prompt: selectedTruth.prompt,
            type: 'truth',
            language: this.config.defaultLanguage,
            mode: this.config.defaultMode
          };
        } catch (fallbackError) {
          throw new TruthOrDareError(
            `Failed to get truth prompt. Original error: ${error instanceof Error ? error.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`,
            'FALLBACK_FAILED'
          );
        }
      }
      
      throw error;
    }
  }

  /**
   * Get a random dare prompt
   */
  public getDare(options: PromptOptions = {}): PromptResult {
    const language = options.language || this.config.defaultLanguage;
    const mode = options.mode || this.config.defaultMode;

    try {
      const dares = this.loadPrompts(language, mode, 'dare');
      const selectedDare = this.getRandomElement(dares);

      return {
        id: selectedDare.id,
        prompt: selectedDare.prompt,
        type: 'dare',
        language,
        mode
      };
    } catch (error) {
      // Try fallback to default language and mode if different
      if (language !== this.config.defaultLanguage || mode !== this.config.defaultMode) {
        try {
          const dares = this.loadPrompts(this.config.defaultLanguage, this.config.defaultMode, 'dare');
          const selectedDare = this.getRandomElement(dares);

          return {
            id: selectedDare.id,
            prompt: selectedDare.prompt,
            type: 'dare',
            language: this.config.defaultLanguage,
            mode: this.config.defaultMode
          };
        } catch (fallbackError) {
          throw new TruthOrDareError(
            `Failed to get dare prompt. Original error: ${error instanceof Error ? error.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`,
            'FALLBACK_FAILED'
          );
        }
      }
      
      throw error;
    }
  }

  /**
   * Get a random truth or dare prompt
   */
  public getRandom(options: PromptOptions = {}): PromptResult {
    const isRandomTruth = Math.random() < 0.5;
    return isRandomTruth ? this.getTruth(options) : this.getDare(options);
  }

  /**
   * Get available languages
   */
  public getAvailableLanguages(): Language[] {
    try {
      const dataPath = this.config.dataPath;
      if (!fs.existsSync(dataPath)) {
        return [];
      }

      const entries = fs.readdirSync(dataPath, { withFileTypes: true });
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
   * Get available modes for a language
   */
  public getAvailableModes(language: Language): Mode[] {
    try {
      const languagePath = path.join(this.config.dataPath, language);
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
}
