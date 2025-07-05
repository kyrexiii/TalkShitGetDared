"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthOrDareError = exports.TruthOrDareCore = void 0;
exports.getTruth = getTruth;
exports.getDare = getDare;
exports.getRandom = getRandom;
exports.getAvailableLanguages = getAvailableLanguages;
exports.getAvailableModes = getAvailableModes;
exports.createCore = createCore;
const core_1 = require("./core");
Object.defineProperty(exports, "TruthOrDareCore", { enumerable: true, get: function () { return core_1.TruthOrDareCore; } });
const types_1 = require("./types");
Object.defineProperty(exports, "TruthOrDareError", { enumerable: true, get: function () { return types_1.TruthOrDareError; } });
const defaultCore = new core_1.TruthOrDareCore();
function getTruth(options = {}) {
    return defaultCore.getTruth(options);
}
function getDare(options = {}) {
    return defaultCore.getDare(options);
}
function getRandom(options = {}) {
    return defaultCore.getRandom(options);
}
function getAvailableLanguages() {
    return defaultCore.getAvailableLanguages();
}
function getAvailableModes(language) {
    return defaultCore.getAvailableModes(language);
}
function createCore(config) {
    return new core_1.TruthOrDareCore(config);
}
//# sourceMappingURL=index.js.map