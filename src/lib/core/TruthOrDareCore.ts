import * as path from 'path';
import { PromptService } from '../services/index';
import { 
  Language, 
  Mode, 
  PromptOptions, 
  PromptResult, 
  CoreConfig 
} from '../types/index';

/**
 * Main core class for truth-or-dare logic with professional architecture
 */
export class TruthOrDareCore {
  private promptService: PromptService;
  private config: CoreConfig;

  constructor(config?: Partial<CoreConfig>) {
    this.config = {
      defaultLanguage: 'english',
      defaultMode: 'sfw',
      dataPath: path.join(__dirname, '..', '..', '..', 'data', 'lang'),
      ...config
    };
    
    this.promptService = new PromptService(this.config);
  }

  /**
   * Get a random truth prompt
   */
  public getTruth(options: PromptOptions = {}): PromptResult {
    return this.promptService.getTruth(options);
  }

  /**
   * Get a random dare prompt
   */
  public getDare(options: PromptOptions = {}): PromptResult {
    return this.promptService.getDare(options);
  }

  /**
   * Get a random truth or dare prompt
   */
  public getRandom(options: PromptOptions = {}): PromptResult {
    return this.promptService.getRandom(options);
  }

  /**
   * Get available languages
   */
  public getAvailableLanguages(): Language[] {
    return this.promptService.getAvailableLanguages();
  }

  /**
   * Get available modes for a language
   */
  public getAvailableModes(language: Language): Mode[] {
    return this.promptService.getAvailableModes(language);
  }

  /**
   * Clear data cache
   */
  public clearCache(): void {
    this.promptService.clearCache();
  }

  /**
   * Get cache statistics
   */
  public getCacheStats(): { size: number; keys: string[] } {
    return this.promptService.getCacheStats();
  }

  /**
   * Update configuration
   */
  public updateConfig(newConfig: Partial<CoreConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.promptService.updateConfig(this.config);
  }

  /**
   * Get current configuration
   */
  public getConfig(): CoreConfig {
    return { ...this.config };
  }
}