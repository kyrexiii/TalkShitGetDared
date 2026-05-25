import { PromptService, StatisticsService } from '../services/index';
import { DataLoader } from '../data/index';
import { 
  Language, 
  Mode, 
  PromptOptions, 
  PromptResult, 
  CoreConfig,
  BatchOptions,
  BatchResult,
  PromptStats
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
      dataPath: '',
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
   * Get a batch of prompts
   */
  public getBatch(options: BatchOptions): BatchResult {
    return this.promptService.getBatch(options);
  }

  /**
   * Get library statistics
   */
  public getStats(): PromptStats {
    const statsService = new StatisticsService(new DataLoader());
    return statsService.getStats();
  }

  /**
   * Check if history tracking is enabled
   */
  public isHistoryEnabled(): boolean {
    return this.promptService.getHistoryService().isEnabled();
  }

  /**
   * Enable or disable history tracking
   */
  public enableHistory(enabled: boolean): void {
    this.promptService.getHistoryService().setEnabled(enabled);
  }

  /**
   * Get current prompt history
   */
  public getHistory(): string[] {
    return this.promptService.getHistoryService().getHistory();
  }

  /**
   * Clear prompt history
   */
  public clearHistory(): void {
    this.promptService.getHistoryService().clearHistory();
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