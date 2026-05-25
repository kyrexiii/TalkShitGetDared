export declare class TruthOrDareError extends Error {
    readonly code: string;
    readonly timestamp: Date;
    constructor(message: string, code: string);
    toJSON(): Record<string, any>;
}
//# sourceMappingURL=TruthOrDareError.d.ts.map