import { Language, Mode, PromptOptions, PromptResult, CoreConfig, BatchOptions, BatchResult, PromptStats } from '../types/index';
export declare class TruthOrDareCore {
    private promptService;
    private config;
    constructor(config?: Partial<CoreConfig>);
    getTruth(options?: PromptOptions): PromptResult;
    getDare(options?: PromptOptions): PromptResult;
    getRandom(options?: PromptOptions): PromptResult;
    getAvailableLanguages(): Language[];
    getAvailableModes(language: Language): Mode[];
    getBatch(options: BatchOptions): BatchResult;
    getStats(): PromptStats;
    isHistoryEnabled(): boolean;
    enableHistory(enabled: boolean): void;
    getHistory(): string[];
    clearHistory(): void;
    clearCache(): void;
    getCacheStats(): {
        size: number;
        keys: string[];
    };
    updateConfig(newConfig: Partial<CoreConfig>): void;
    getConfig(): CoreConfig;
}
//# sourceMappingURL=TruthOrDareCore.d.ts.map