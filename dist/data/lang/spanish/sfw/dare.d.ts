type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'extreme';
type PromptCategory = 'personal' | 'embarrassing' | 'relationships' | 'funny' | 'physical' | 'social' | 'intimate' | 'confession';
interface Prompt {
    id: string;
    text: string;
    contributor: string;
    difficulty: DifficultyLevel;
    category: PromptCategory;
}
export declare const darePrompts: Prompt[];
export {};
//# sourceMappingURL=dare.d.ts.map