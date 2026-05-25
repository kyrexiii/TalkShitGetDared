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
 * Difficulty levels for prompts
 */
export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'extreme';

/**
 * Categories for better prompt organization
 */
export type PromptCategory = 'personal' | 'embarrassing' | 'relationships' | 'funny' | 'physical' | 'social' | 'intimate' | 'confession';

/**
 * Structure of a truth or dare prompt
 */
export interface Prompt {
  id: string;
  text: string;
  contributor: string;
  difficulty: DifficultyLevel;
  category: PromptCategory;
}

/**
 * Options for getting prompts
 */
export interface PromptOptions {
  language?: Language;
  mode?: Mode;
  difficulty?: DifficultyLevel;
  category?: PromptCategory;
}

/**
 * Result returned by prompt functions
 */
export interface PromptResult {
  prompt: Prompt;
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
 * Cache statistics interface
 */
export interface CacheStats {
  size: number;
  keys: string[];
}