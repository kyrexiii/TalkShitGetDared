import { Language, Mode, PromptOptions, PromptResult, CoreConfig } from '../types/index';
export declare class TruthOrDareCore {
    private promptService;
    private config;
    constructor(config?: Partial<CoreConfig>);
    getTruth(options?: PromptOptions): PromptResult;
    getDare(options?: PromptOptions): PromptResult;
    getRandom(options?: PromptOptions): PromptResult;
    getAvailableLanguages(): Language[];
    getAvailableModes(language: Language): Mode[];
    clearCache(): void;
    getCacheStats(): {
        size: number;
        keys: string[];
    };
    updateConfig(newConfig: Partial<CoreConfig>): void;
    getConfig(): CoreConfig;
}
//# sourceMappingURL=TruthOrDareCore.d.ts.map