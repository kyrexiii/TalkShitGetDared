/**
 * Supported languages for truth-or-dare content
 */
export type Language = 'english' | 'spanish' | 'french' | 'german' | 'italian';

/**
 * Content filtering modes
 */
export type Mode = 'sfw' | 'nsfw';

/**
 * Type of prompt (truth or dare)
 */
export type PromptType = 'truth' | 'dare';

/**
 * Structure of a truth or dare prompt
 */
export interface Prompt {
  id: string;
  prompt: string;
}

/**
 * Options for getting prompts
 */
export interface PromptOptions {
  language?: Language;
  mode?: Mode;
}

/**
 * Result returned by prompt functions
 */
export interface PromptResult {
  id: string;
  prompt: string;
  type: PromptType;
  language: Language;
  mode: Mode;
}

/**
 * Configuration for the truth-or-dare core
 */
export interface CoreConfig {
  defaultLanguage: Language;
  defaultMode: Mode;
  dataPath: string;
}

/**
 * Error types for the package
 */
export class TruthOrDareError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'TruthOrDareError';
  }
}
