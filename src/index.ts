import { 
  TruthOrDareCore,
  PromptOptions, 
  PromptResult, 
  Language, 
  Mode, 
  CoreConfig 
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
