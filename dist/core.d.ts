import { Language, Mode, PromptOptions, PromptResult, CoreConfig } from './types';
export declare class TruthOrDareCore {
    private config;
    constructor(config?: Partial<CoreConfig>);
    private loadPrompts;
    private getRandomElement;
    getTruth(options?: PromptOptions): PromptResult;
    getDare(options?: PromptOptions): PromptResult;
    getRandom(options?: PromptOptions): PromptResult;
    getAvailableLanguages(): Language[];
    getAvailableModes(language: Language): Mode[];
}
//# sourceMappingURL=core.d.ts.map