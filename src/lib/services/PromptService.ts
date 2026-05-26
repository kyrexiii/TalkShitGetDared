/* eslint-disable no-useless-catch */
import { DataLoader } from '../data/index';
import { RandomSelector } from '../utils/index';
import { TruthOrDareError } from '../errors/index';
import { PromptHistoryService } from './PromptHistoryService';
import {
  Language,
  Mode,
  PromptType,
  PromptOptions,
  PromptResult,
  CoreConfig,
  BatchOptions,
  BatchResult,
} from '../types/index';

/**
 * Service class for handling prompt operations
 */
export class PromptService {
  private config: CoreConfig;
  private dataLoader: DataLoader;
  private historyService: PromptHistoryService;

  constructor(config: CoreConfig) {
    this.config = config;
    this.dataLoader = new DataLoader();
    this.historyService = new PromptHistoryService(
      config.maxHistorySize || 50,
      config.enableHistory || false
    );
  }

  /**
   * Get the history service
   */
  public getHistoryService(): PromptHistoryService {
    return this.historyService;
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
   * Get a batch of prompts
   */
  public getBatch(options: BatchOptions): BatchResult {
    const count = options.count;
    const language = options.language || this.config.defaultLanguage;
    const mode = options.mode || this.config.defaultMode;
    const type = options.type;
    const ensureUnique = options.ensureUnique !== false;

    const results: PromptResult[] = [];
    const usedIdsInBatch = new Set<string>();

    for (let i = 0; i < count; i++) {
      const currentType: PromptType =
        type || (RandomSelector.getRandomBoolean() ? 'truth' : 'dare');

      try {
        let prompts = this.dataLoader.loadPrompts(language, mode, currentType);

        if (options.difficulty) {
          prompts = prompts.filter((p) => p.difficulty === options.difficulty);
        }
        if (options.category) {
          prompts = prompts.filter((p) => p.category === options.category);
        }

        if (ensureUnique) {
          const uniquePrompts = prompts.filter(
            (p) => !usedIdsInBatch.has(p.id) && !this.historyService.hasPromptBeenUsed(p.id)
          );
          if (uniquePrompts.length > 0) {
            prompts = uniquePrompts;
          } else {
            const batchUniquePrompts = prompts.filter((p) => !usedIdsInBatch.has(p.id));
            if (batchUniquePrompts.length > 0) {
              prompts = batchUniquePrompts;
            }
          }
        }

        if (prompts.length === 0) {
          throw new TruthOrDareError(
            `No prompts found matching the specified criteria for ${language} ${mode} ${currentType}`,
            'NO_MATCHING_PROMPTS'
          );
        }

        const selectedPrompt = RandomSelector.getRandomElement(prompts);
        usedIdsInBatch.add(selectedPrompt.id);
        this.historyService.addToHistory(selectedPrompt.id);

        results.push({
          prompt: selectedPrompt,
          type: currentType,
          language,
          mode,
        });
      } catch (error) {
        throw error;
      }
    }

    return {
      prompts: results,
      count: results.length,
    };
  }

  /**
   * Get a prompt of a specific type
   */
  private getPrompt(type: PromptType, options: PromptOptions): PromptResult {
    const language = options.language || this.config.defaultLanguage;
    const mode = options.mode || this.config.defaultMode;

    try {
      let prompts = this.dataLoader.loadPrompts(language, mode, type);

      // Filter by difficulty if specified
      if (options.difficulty) {
        prompts = prompts.filter((prompt) => prompt.difficulty === options.difficulty);
      }

      // Filter by category if specified
      if (options.category) {
        prompts = prompts.filter((prompt) => prompt.category === options.category);
      }

      // Filter by history if enabled
      if (this.historyService.isEnabled()) {
        const unusedPrompts = prompts.filter(
          (prompt) => !this.historyService.hasPromptBeenUsed(prompt.id)
        );
        if (unusedPrompts.length > 0) {
          prompts = unusedPrompts;
        }
      }

      // Ensure we have prompts after filtering
      if (prompts.length === 0) {
        throw new TruthOrDareError(
          `No prompts found matching the specified criteria for ${language} ${mode} ${type}`,
          'NO_MATCHING_PROMPTS'
        );
      }

      const selectedPrompt = RandomSelector.getRandomElement(prompts);
      this.historyService.addToHistory(selectedPrompt.id);

      return {
        prompt: selectedPrompt,
        type,
        language,
        mode,
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
    if (
      requestedLanguage !== this.config.defaultLanguage ||
      requestedMode !== this.config.defaultMode
    ) {
      try {
        const prompts = this.dataLoader.loadPrompts(
          this.config.defaultLanguage,
          this.config.defaultMode,
          type
        );
        const selectedPrompt = RandomSelector.getRandomElement(prompts);
        this.historyService.addToHistory(selectedPrompt.id);

        return {
          prompt: selectedPrompt,
          type,
          language: this.config.defaultLanguage,
          mode: this.config.defaultMode,
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

    if (newConfig.dataPath) {
      this.dataLoader = new DataLoader();
    }

    if (newConfig.enableHistory !== undefined) {
      this.historyService.setEnabled(newConfig.enableHistory);
    }
    if (newConfig.maxHistorySize !== undefined) {
      this.historyService.setMaxSize(newConfig.maxHistorySize);
    }
  }
}
