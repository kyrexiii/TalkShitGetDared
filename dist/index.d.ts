import { TruthOrDareCore, PromptOptions, PromptResult, Language, Mode, CoreConfig, BatchOptions, BatchResult, PromptStats } from './lib/index';
export declare function getTruth(options?: PromptOptions): PromptResult;
export declare function getDare(options?: PromptOptions): PromptResult;
export declare function getRandom(options?: PromptOptions): PromptResult;
export declare function getBatch(options: BatchOptions): BatchResult;
export declare function getStats(): PromptStats;
export declare function enableHistory(enabled: boolean): void;
export declare function getHistory(): string[];
export declare function clearHistory(): void;
export declare function getAvailableLanguages(): Language[];
export declare function getAvailableModes(language: Language): Mode[];
export declare function createCore(config?: Partial<CoreConfig>): TruthOrDareCore;
export * from './lib/index';
//# sourceMappingURL=index.d.ts.map