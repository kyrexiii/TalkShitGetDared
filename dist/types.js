"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthOrDareError = void 0;
class TruthOrDareError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'TruthOrDareError';
    }
}
exports.TruthOrDareError = TruthOrDareError;
//# sourceMappingURL=types.js.map