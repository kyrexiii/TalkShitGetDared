import { Language, Mode, PromptOptions, PromptResult, CoreConfig } from '../types/index';
export declare class PromptService {
    private config;
    private dataLoader;
    constructor(config: CoreConfig);
    getTruth(options?: PromptOptions): PromptResult;
    getDare(options?: PromptOptions): PromptResult;
    getRandom(options?: PromptOptions): PromptResult;
    private getPrompt;
    private handleFallback;
    getAvailableLanguages(): Language[];
    getAvailableModes(language: Language): Mode[];
    clearCache(): void;
    getCacheStats(): {
        size: number;
        keys: string[];
    };
    updateConfig(newConfig: Partial<CoreConfig>): void;
}
//# sourceMappingURL=PromptService.d.ts.map