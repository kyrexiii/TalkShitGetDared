import { 
  TruthOrDareCore,
  PromptOptions, 
  PromptResult, 
  Language, 
  Mode, 
  CoreConfig,
  BatchOptions,
  BatchResult,
  PromptStats
} from './lib/index';

// Create default instance
const defaultCore = new TruthOrDareCore();

/**
 * Get a random truth prompt
 */
export function getTruth(options: PromptOptions = {}): PromptResult {
  return defaultCore.getTruth(options);
}

/**
 * Get a random dare prompt
 */
export function getDare(options: PromptOptions = {}): PromptResult {
  return defaultCore.getDare(options);
}

/**
 * Get a random truth or dare prompt
 */
export function getRandom(options: PromptOptions = {}): PromptResult {
  return defaultCore.getRandom(options);
}

/**
 * Get a batch of prompts
 */
export function getBatch(options: BatchOptions): BatchResult {
  return defaultCore.getBatch(options);
}

/**
 * Get library statistics
 */
export function getStats(): PromptStats {
  return defaultCore.getStats();
}

/**
 * Enable or disable history tracking
 */
export function enableHistory(enabled: boolean): void {
  defaultCore.enableHistory(enabled);
}

/**
 * Get current prompt history
 */
export function getHistory(): string[] {
  return defaultCore.getHistory();
}

/**
 * Clear prompt history
 */
export function clearHistory(): void {
  defaultCore.clearHistory();
}

/**
 * Get available languages
 */
export function getAvailableLanguages(): Language[] {
  return defaultCore.getAvailableLanguages();
}

/**
 * Get available modes for a language
 */
export function getAvailableModes(language: Language): Mode[] {
  return defaultCore.getAvailableModes(language);
}

/**
 * Create a new TruthOrDareCore instance with custom configuration
 */
export function createCore(config?: Partial<CoreConfig>): TruthOrDareCore {
  return new TruthOrDareCore(config);
}

// Re-export everything from lib for advanced users
export * from './lib/index';
