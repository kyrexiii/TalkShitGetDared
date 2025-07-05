import { Language, Mode, PromptType, Prompt } from '../types/index';
export declare class DataLoader {
    private cache;
    private dataPath;
    constructor(dataPath: string);
    loadPrompts(language: Language, mode: Mode, type: PromptType): Prompt[];
    private validatePromptsData;
    getAvailableLanguages(): Language[];
    getAvailableModes(language: Language): Mode[];
    clearCache(): void;
    getCacheStats(): {
        size: number;
        keys: string[];
    };
}
//# sourceMappingURL=DataLoader.d.ts.map