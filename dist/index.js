"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTruth = getTruth;
exports.getDare = getDare;
exports.getRandom = getRandom;
exports.getBatch = getBatch;
exports.getStats = getStats;
exports.enableHistory = enableHistory;
exports.getHistory = getHistory;
exports.clearHistory = clearHistory;
exports.getAvailableLanguages = getAvailableLanguages;
exports.getAvailableModes = getAvailableModes;
exports.createCore = createCore;
const index_1 = require("./lib/index");
const defaultCore = new index_1.TruthOrDareCore();
function getTruth(options = {}) {
    return defaultCore.getTruth(options);
}
function getDare(options = {}) {
    return defaultCore.getDare(options);
}
function getRandom(options = {}) {
    return defaultCore.getRandom(options);
}
function getBatch(options) {
    return defaultCore.getBatch(options);
}
function getStats() {
    return defaultCore.getStats();
}
function enableHistory(enabled) {
    defaultCore.enableHistory(enabled);
}
function getHistory() {
    return defaultCore.getHistory();
}
function clearHistory() {
    defaultCore.clearHistory();
}
function getAvailableLanguages() {
    return defaultCore.getAvailableLanguages();
}
function getAvailableModes(language) {
    return defaultCore.getAvailableModes(language);
}
function createCore(config) {
    return new index_1.TruthOrDareCore(config);
}
__exportStar(require("./lib/index"), exports);
//# sourceMappingURL=index.js.map