import { PromptHistoryService } from './PromptHistoryService';
import { Language, Mode, PromptOptions, PromptResult, CoreConfig, BatchOptions, BatchResult } from '../types/index';
export declare class PromptService {
    private config;
    private dataLoader;
    private historyService;
    constructor(config: CoreConfig);
    getHistoryService(): PromptHistoryService;
    getTruth(options?: PromptOptions): PromptResult;
    getDare(options?: PromptOptions): PromptResult;
    getRandom(options?: PromptOptions): PromptResult;
    getBatch(options: BatchOptions): BatchResult;
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