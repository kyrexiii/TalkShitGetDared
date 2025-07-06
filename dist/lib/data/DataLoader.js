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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoader = void 0;
const index_1 = require("../errors/index");
const enSfwTruth = __importStar(require("../../data/lang/english/sfw/truth"));
const enSfwDare = __importStar(require("../../data/lang/english/sfw/dare"));
const enNsfwTruth = __importStar(require("../../data/lang/english/nsfw/truth"));
const enNsfwDare = __importStar(require("../../data/lang/english/nsfw/dare"));
const esSfwTruth = __importStar(require("../../data/lang/spanish/sfw/truth"));
const esSfwDare = __importStar(require("../../data/lang/spanish/sfw/dare"));
class DataLoader {
    constructor() {
        this.cache = new Map();
        this.dataMap = new Map([
            ['english_sfw_truth', enSfwTruth.truthPrompts],
            ['english_sfw_dare', enSfwDare.darePrompts],
            ['english_nsfw_truth', enNsfwTruth.truthPrompts],
            ['english_nsfw_dare', enNsfwDare.darePrompts],
            ['spanish_sfw_truth', esSfwTruth.truthPrompts],
            ['spanish_sfw_dare', esSfwDare.darePrompts],
        ]);
    }
    loadPrompts(language, mode, type) {
        const cacheKey = `${language}_${mode}_${type}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        const dataKey = `${language}_${mode}_${type}`;
        const prompts = this.dataMap.get(dataKey);
        if (!prompts) {
            throw new index_1.TruthOrDareError(`No data available for language: ${language}, mode: ${mode}, type: ${type}`, 'DATA_NOT_FOUND');
        }
        this.validatePromptsData(prompts, dataKey);
        this.cache.set(cacheKey, prompts);
        return prompts;
    }
    validatePromptsData(prompts, filePath) {
        if (!Array.isArray(prompts)) {
            throw new index_1.TruthOrDareError(`Invalid data format in ${filePath}. Expected array of prompts.`, 'INVALID_DATA_FORMAT');
        }
        if (prompts.length === 0) {
            throw new index_1.TruthOrDareError(`No prompts found in ${filePath}`, 'NO_PROMPTS_FOUND');
        }
        for (const prompt of prompts) {
            if (!prompt.id || !prompt.prompt) {
                throw new index_1.TruthOrDareError(`Invalid prompt structure in ${filePath}. Each prompt must have 'id' and 'prompt' fields.`, 'INVALID_PROMPT_STRUCTURE');
            }
        }
    }
    getAvailableLanguages() {
        const languages = new Set();
        for (const key of this.dataMap.keys()) {
            const language = key.split('_')[0];
            languages.add(language);
        }
        return Array.from(languages);
    }
    getAvailableModes(language) {
        const modes = new Set();
        for (const key of this.dataMap.keys()) {
            const [keyLanguage, keyMode] = key.split('_');
            if (keyLanguage === language) {
                modes.add(keyMode);
            }
        }
        return Array.from(modes);
    }
    clearCache() {
        this.cache.clear();
    }
    getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }
}
exports.DataLoader = DataLoader;
//# sourceMappingURL=DataLoader.js.map