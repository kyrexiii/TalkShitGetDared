export type Language = 'english' | 'spanish' | 'french' | 'german' | 'italian';
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
}
export interface CacheStats {
    size: number;
    keys: string[];
}
//# sourceMappingURL=index.d.ts.map