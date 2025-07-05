"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptService = void 0;
const index_1 = require("../data/index");
const index_2 = require("../utils/index");
const index_3 = require("../errors/index");
class PromptService {
    constructor(config) {
        this.config = config;
        this.dataLoader = new index_1.DataLoader(config.dataPath);
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
    getPrompt(type, options) {
        const language = options.language || this.config.defaultLanguage;
        const mode = options.mode || this.config.defaultMode;
        try {
            const prompts = this.dataLoader.loadPrompts(language, mode, type);
            const selectedPrompt = index_2.RandomSelector.getRandomElement(prompts);
            return {
                id: selectedPrompt.id,
                prompt: selectedPrompt.prompt,
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
                return {
                    id: selectedPrompt.id,
                    prompt: selectedPrompt.prompt,
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
            this.dataLoader = new index_1.DataLoader(newConfig.dataPath);
        }
    }
}
exports.PromptService = PromptService;
//# sourceMappingURL=PromptService.js.map