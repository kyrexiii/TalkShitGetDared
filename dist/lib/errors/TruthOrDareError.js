"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthOrDareError = void 0;
class TruthOrDareError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'TruthOrDareError';
        this.code = code;
        this.timestamp = new Date();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, TruthOrDareError);
        }
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            timestamp: this.timestamp.toISOString(),
            stack: this.stack
        };
    }
}
exports.TruthOrDareError = TruthOrDareError;
//# sourceMappingURL=TruthOrDareError.js.map