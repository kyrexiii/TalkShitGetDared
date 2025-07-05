import { TruthOrDareCore } from './core';
import { PromptOptions, PromptResult, Language, Mode, PromptType, Prompt, CoreConfig, TruthOrDareError } from './types';
export declare function getTruth(options?: PromptOptions): PromptResult;
export declare function getDare(options?: PromptOptions): PromptResult;
export declare function getRandom(options?: PromptOptions): PromptResult;
export declare function getAvailableLanguages(): Language[];
export declare function getAvailableModes(language: Language): Mode[];
export declare function createCore(config?: Partial<CoreConfig>): TruthOrDareCore;
export { TruthOrDareCore, PromptOptions, PromptResult, Language, Mode, PromptType, Prompt, CoreConfig, TruthOrDareError };
//# sourceMappingURL=index.d.ts.map