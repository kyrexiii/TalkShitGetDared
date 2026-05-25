"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruthOrDareCore = void 0;
const index_1 = require("../services/index");
const index_2 = require("../data/index");
class TruthOrDareCore {
    constructor(config) {
        this.config = {
            defaultLanguage: 'english',
            defaultMode: 'sfw',
            dataPath: '',
            ...config
        };
        this.promptService = new index_1.PromptService(this.config);
    }
    getTruth(options = {}) {
        return this.promptService.getTruth(options);
    }
    getDare(options = {}) {
        return this.promptService.getDare(options);
    }
    getRandom(options = {}) {
        return this.promptService.getRandom(options);
    }
    getAvailableLanguages() {
        return this.promptService.getAvailableLanguages();
    }
    getAvailableModes(language) {
        return this.promptService.getAvailableModes(language);
    }
    getBatch(options) {
        return this.promptService.getBatch(options);
    }
    getStats() {
        const statsService = new index_1.StatisticsService(new index_2.DataLoader());
        return statsService.getStats();
    }
    isHistoryEnabled() {
        return this.promptService.getHistoryService().isEnabled();
    }
    enableHistory(enabled) {
        this.promptService.getHistoryService().setEnabled(enabled);
    }
    getHistory() {
        return this.promptService.getHistoryService().getHistory();
    }
    clearHistory() {
        this.promptService.getHistoryService().clearHistory();
    }
    clearCache() {
        this.promptService.clearCache();
    }
    getCacheStats() {
        return this.promptService.getCacheStats();
    }
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.promptService.updateConfig(this.config);
    }
    getConfig() {
        return { ...this.config };
    }
}
exports.TruthOrDareCore = TruthOrDareCore;
//# sourceMappingURL=TruthOrDareCore.js.map