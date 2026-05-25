"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptService = void 0;
const index_1 = require("../data/index");
const index_2 = require("../utils/index");
const index_3 = require("../errors/index");
const PromptHistoryService_1 = require("./PromptHistoryService");
class PromptService {
    constructor(config) {
        this.config = config;
        this.dataLoader = new index_1.DataLoader();
        this.historyService = new PromptHistoryService_1.PromptHistoryService(config.maxHistorySize || 50, config.enableHistory || false);
    }
    getHistoryService() {
        return this.historyService;
    }
    getTruth(options = {}) {
        return this.getPrompt('truth', options);
    }
    getDare(options = {}) {
        return this.getPrompt('dare', options);
    }
    getRandom(options = {}) {
        const type = index_2.RandomSelector.getRandomBoolean() ? 'truth' : 'dare';
        return this.getPrompt(type, options);
    }
    getBatch(options) {
        const count = options.count;
        const language = options.language || this.config.defaultLanguage;
        const mode = options.mode || this.config.defaultMode;
        const type = options.type;
        const ensureUnique = options.ensureUnique !== false;
        const results = [];
        const usedIdsInBatch = new Set();
        for (let i = 0; i < count; i++) {
            const currentType = type || (index_2.RandomSelector.getRandomBoolean() ? 'truth' : 'dare');
            try {
                let prompts = this.dataLoader.loadPrompts(language, mode, currentType);
                if (options.difficulty) {
                    prompts = prompts.filter(p => p.difficulty === options.difficulty);
                }
                if (options.category) {
                    prompts = prompts.filter(p => p.category === options.category);
                }
                if (ensureUnique) {
                    const uniquePrompts = prompts.filter(p => !usedIdsInBatch.has(p.id) && !this.historyService.hasPromptBeenUsed(p.id));
                    if (uniquePrompts.length > 0) {
                        prompts = uniquePrompts;
                    }
                    else {
                        const batchUniquePrompts = prompts.filter(p => !usedIdsInBatch.has(p.id));
                        if (batchUniquePrompts.length > 0) {
                            prompts = batchUniquePrompts;
                        }
                    }
                }
                if (prompts.length === 0) {
                    throw new index_3.TruthOrDareError(`No prompts found matching the specified criteria for ${language} ${mode} ${currentType}`, 'NO_MATCHING_PROMPTS');
                }
                const selectedPrompt = index_2.RandomSelector.getRandomElement(prompts);
                usedIdsInBatch.add(selectedPrompt.id);
                this.historyService.addToHistory(selectedPrompt.id);
                results.push({
                    prompt: selectedPrompt,
                    type: currentType,
                    language,
                    mode
                });
            }
            catch (error) {
                throw error;
            }
        }
        return {
            prompts: results,
            count: results.length
        };
    }
    getPrompt(type, options) {
        const language = options.language || this.config.defaultLanguage;
        const mode = options.mode || this.config.defaultMode;
        try {
            let prompts = this.dataLoader.loadPrompts(language, mode, type);
            if (options.difficulty) {
                prompts = prompts.filter(prompt => prompt.difficulty === options.difficulty);
            }
            if (options.category) {
                prompts = prompts.filter(prompt => prompt.category === options.category);
            }
            if (this.historyService.isEnabled()) {
                const unusedPrompts = prompts.filter(prompt => !this.historyService.hasPromptBeenUsed(prompt.id));
                if (unusedPrompts.length > 0) {
                    prompts = unusedPrompts;
                }
            }
            if (prompts.length === 0) {
                throw new index_3.TruthOrDareError(`No prompts found matching the specified criteria for ${language} ${mode} ${type}`, 'NO_MATCHING_PROMPTS');
            }
            const selectedPrompt = index_2.RandomSelector.getRandomElement(prompts);
            this.historyService.addToHistory(selectedPrompt.id);
            return {
                prompt: selectedPrompt,
                type,
                language,
                mode
            };
        }
        catch (error) {
            return this.handleFallback(type, language, mode, error);
        }
    }
    handleFallback(type, requestedLanguage, requestedMode, originalError) {
        if (requestedLanguage !== this.config.defaultLanguage || requestedMode !== this.config.defaultMode) {
            try {
                const prompts = this.dataLoader.loadPrompts(this.config.defaultLanguage, this.config.defaultMode, type);
                const selectedPrompt = index_2.RandomSelector.getRandomElement(prompts);
                this.historyService.addToHistory(selectedPrompt.id);
                return {
                    prompt: selectedPrompt,
                    type,
                    language: this.config.defaultLanguage,
                    mode: this.config.defaultMode
                };
            }
            catch (fallbackError) {
                throw new index_3.TruthOrDareError(`Failed to get ${type} prompt. Original error: ${originalError instanceof Error ? originalError.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`, 'FALLBACK_FAILED');
            }
        }
        if (originalError instanceof Error) {
            throw originalError;
        }
        throw new index_3.TruthOrDareError('Unknown error occurred', 'UNKNOWN_ERROR');
    }
    getAvailableLanguages() {
        return this.dataLoader.getAvailableLanguages();
    }
    getAvailableModes(language) {
        return this.dataLoader.getAvailableModes(language);
    }
    clearCache() {
        this.dataLoader.clearCache();
    }
    getCacheStats() {
        return this.dataLoader.getCacheStats();
    }
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        if (newConfig.dataPath) {
            this.dataLoader = new index_1.DataLoader();
        }
        if (newConfig.enableHistory !== undefined) {
            this.historyService.setEnabled(newConfig.enableHistory);
        }
        if (newConfig.maxHistorySize !== undefined) {
            this.historyService.setMaxSize(newConfig.maxHistorySize);
        }
    }
}
exports.PromptService = PromptService;
//# sourceMappingURL=PromptService.js.map