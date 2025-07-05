import { DataLoader } from '../data/index';
import { RandomSelector } from '../utils/index';
import { TruthOrDareError } from '../errors/index';
import { 
  Language, 
  Mode, 
  PromptType, 
  PromptOptions, 
  PromptResult, 
  CoreConfig 
} from '../types/index';

/**
 * Service class for handling prompt operations
 */
export class PromptService {
  private config: CoreConfig;
  private dataLoader: DataLoader;

  constructor(config: CoreConfig) {
    this.config = config;
    this.dataLoader = new DataLoader(config.dataPath);
  }

  /**
   * Get a random truth prompt
   */
  public getTruth(options: PromptOptions = {}): PromptResult {
    return this.getPrompt('truth', options);
  }

  /**
   * Get a random dare prompt
   */
  public getDare(options: PromptOptions = {}): PromptResult {
    return this.getPrompt('dare', options);
  }

  /**
   * Get a random truth or dare prompt
   */
  public getRandom(options: PromptOptions = {}): PromptResult {
    const type: PromptType = RandomSelector.getRandomBoolean() ? 'truth' : 'dare';
    return this.getPrompt(type, options);
  }

  /**
   * Get a prompt of a specific type
   */
  private getPrompt(type: PromptType, options: PromptOptions): PromptResult {
    const language = options.language || this.config.defaultLanguage;
    const mode = options.mode || this.config.defaultMode;

    try {
      const prompts = this.dataLoader.loadPrompts(language, mode, type);
      const selectedPrompt = RandomSelector.getRandomElement(prompts);

      return {
        id: selectedPrompt.id,
        prompt: selectedPrompt.prompt,
        type,
        language,
        mode
      };
    } catch (error) {
      return this.handleFallback(type, language, mode, error);
    }
  }

  /**
   * Handle fallback when primary prompt loading fails
   */
  private handleFallback(
    type: PromptType, 
    requestedLanguage: Language, 
    requestedMode: Mode, 
    originalError: unknown
  ): PromptResult {
    // Try fallback to default language and mode if different
    if (requestedLanguage !== this.config.defaultLanguage || requestedMode !== this.config.defaultMode) {
      try {
        const prompts = this.dataLoader.loadPrompts(
          this.config.defaultLanguage, 
          this.config.defaultMode, 
          type
        );
        const selectedPrompt = RandomSelector.getRandomElement(prompts);

        return {
          id: selectedPrompt.id,
          prompt: selectedPrompt.prompt,
          type,
          language: this.config.defaultLanguage,
          mode: this.config.defaultMode
        };
      } catch (fallbackError) {
        throw new TruthOrDareError(
          `Failed to get ${type} prompt. Original error: ${originalError instanceof Error ? originalError.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`,
          'FALLBACK_FAILED'
        );
      }
    }
    
    if (originalError instanceof Error) {
      throw originalError;
    }
    
    throw new TruthOrDareError('Unknown error occurred', 'UNKNOWN_ERROR');
  }

  /**
   * Get available languages
   */
  public getAvailableLanguages(): Language[] {
    return this.dataLoader.getAvailableLanguages();
  }

  /**
   * Get available modes for a language
   */
  public getAvailableModes(language: Language): Mode[] {
    return this.dataLoader.getAvailableModes(language);
  }

  /**
   * Clear data cache
   */
  public clearCache(): void {
    this.dataLoader.clearCache();
  }

  /**
   * Get cache statistics
   */
  public getCacheStats(): { size: number; keys: string[] } {
    return this.dataLoader.getCacheStats();
  }

  /**
   * Update configuration
   */
  public updateConfig(newConfig: Partial<CoreConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // If data path changed, create new data loader
    if (newConfig.dataPath) {
      this.dataLoader = new DataLoader(newConfig.dataPath);
    }
  }
}