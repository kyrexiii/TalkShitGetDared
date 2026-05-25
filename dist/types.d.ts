export type Language = 'english' | 'spanish' | 'french' | 'german' | 'italian';
export type Mode = 'sfw' | 'nsfw';
export type PromptType = 'truth' | 'dare';
export interface Prompt {
    id: string;
    prompt: string;
}
export interface PromptOptions {
    language?: Language;
    mode?: Mode;
}
export interface PromptResult {
    id: string;
    prompt: string;
    type: PromptType;
    language: Language;
    mode: Mode;
}
export interface CoreConfig {
    defaultLanguage: Language;
    defaultMode: Mode;
    dataPath: string;
}
export declare class TruthOrDareError extends Error {
    code: string;
    constructor(message: string, code: string);
}
//# sourceMappingURL=types.d.ts.map