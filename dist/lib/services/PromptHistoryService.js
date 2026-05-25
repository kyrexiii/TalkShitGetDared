"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptHistoryService = void 0;
const index_1 = require("../errors/index");
class PromptHistoryService {
    constructor(maxSize = 50, enabled = false) {
        this.history = new Set();
        this.historyArray = [];
        this.maxSize = maxSize;
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
    setEnabled(enabled) {
        this.enabled = enabled;
        if (!enabled) {
            this.clearHistory();
        }
    }
    hasPromptBeenUsed(promptId) {
        if (!this.enabled) {
            return false;
        }
        return this.history.has(promptId);
    }
    addToHistory(promptId) {
        if (!this.enabled) {
            return;
        }
        if (this.history.has(promptId)) {
            return;
        }
        this.history.add(promptId);
        this.historyArray.push(promptId);
        if (this.historyArray.length > this.maxSize) {
            const oldest = this.historyArray.shift();
            if (oldest) {
                this.history.delete(oldest);
            }
        }
    }
    clearHistory() {
        this.history.clear();
        this.historyArray = [];
    }
    getHistory() {
        if (!this.enabled) {
            return [];
        }
        return [...this.historyArray].reverse();
    }
    getHistorySize() {
        return this.historyArray.length;
    }
    setMaxSize(maxSize) {
        if (maxSize < 1) {
            throw new index_1.TruthOrDareError('Max history size must be at least 1', 'INVALID_CONFIG');
        }
        this.maxSize = maxSize;
        while (this.historyArray.length > maxSize) {
            const oldest = this.historyArray.shift();
            if (oldest) {
                this.history.delete(oldest);
            }
        }
    }
    getMaxSize() {
        return this.maxSize;
    }
}
exports.PromptHistoryService = PromptHistoryService;
//# sourceMappingURL=PromptHistoryService.js.map