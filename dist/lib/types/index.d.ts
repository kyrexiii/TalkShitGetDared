export type Language = 'english' | 'hinglish' | 'spanish';
export type Mode = 'sfw' | 'nsfw';
export type PromptType = 'truth' | 'dare';
export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'extreme';
export type PromptCategory = 'personal' | 'embarrassing' | 'relationships' | 'funny' | 'physical' | 'social' | 'intimate' | 'confession';
export interface Prompt {
    id: string;
    text: string;
    contributor: string;
    difficulty: DifficultyLevel;
    category: PromptCategory;
}
export interface PromptOptions {
    language?: Language;
    mode?: Mode;
    difficulty?: DifficultyLevel;
    category?: PromptCategory;
}
export interface PromptResult {
    prompt: Prompt;
    type: PromptType;
    language: Language;
    mode: Mode;
}
export interface CoreConfig {
    defaultLanguage: Language;
    defaultMode: Mode;
    dataPath: string;
    enableHistory?: boolean;
    maxHistorySize?: number;
}
export interface CacheStats {
    size: number;
    keys: string[];
}
export interface PromptStats {
    total: number;
    byLanguage: Record<Language, number>;
    byMode: Record<Mode, number>;
    byType: Record<PromptType, number>;
    byDifficulty: Record<DifficultyLevel, number>;
    byCategory: Record<PromptCategory, number>;
}
export interface BatchOptions {
    count: number;
    language?: Language;
    mode?: Mode;
    type?: PromptType;
    ensureUnique?: boolean;
    difficulty?: DifficultyLevel;
    category?: PromptCategory;
}
export interface BatchResult {
    prompts: PromptResult[];
    count: number;
}
//# sourceMappingURL=index.d.ts.map