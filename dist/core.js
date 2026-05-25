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
exports.TruthOrDareCore = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const types_1 = require("./types");
class TruthOrDareCore {
    constructor(config) {
        this.config = {
            defaultLanguage: 'english',
            defaultMode: 'sfw',
            dataPath: path.join(__dirname, '..', 'data', 'lang'),
            ...config
        };
    }
    loadPrompts(language, mode, type) {
        const filePath = path.join(this.config.dataPath, language, mode, `${type}.json`);
        try {
            if (!fs.existsSync(filePath)) {
                throw new types_1.TruthOrDareError(`Data file not found: ${filePath}`, 'FILE_NOT_FOUND');
            }
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const prompts = JSON.parse(fileContent);
            if (!Array.isArray(prompts)) {
                throw new types_1.TruthOrDareError(`Invalid data format in ${filePath}. Expected array of prompts.`, 'INVALID_DATA_FORMAT');
            }
            if (prompts.length === 0) {
                throw new types_1.TruthOrDareError(`No prompts found in ${filePath}`, 'NO_PROMPTS_FOUND');
            }
            for (const prompt of prompts) {
                if (!prompt.id || !prompt.prompt) {
                    throw new types_1.TruthOrDareError(`Invalid prompt structure in ${filePath}. Each prompt must have 'id' and 'prompt' fields.`, 'INVALID_PROMPT_STRUCTURE');
                }
            }
            return prompts;
        }
        catch (error) {
            if (error instanceof types_1.TruthOrDareError) {
                throw error;
            }
            if (error instanceof SyntaxError) {
                throw new types_1.TruthOrDareError(`Invalid JSON in ${filePath}: ${error.message}`, 'INVALID_JSON');
            }
            throw new types_1.TruthOrDareError(`Failed to load prompts from ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`, 'LOAD_ERROR');
        }
    }
    getRandomElement(array) {
        if (array.length === 0) {
            throw new types_1.TruthOrDareError('Cannot get random element from empty array', 'EMPTY_ARRAY');
        }
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    getTruth(options = {}) {
        const language = options.language || this.config.defaultLanguage;
        const mode = options.mode || this.config.defaultMode;
        try {
            const truths = this.loadPrompts(language, mode, 'truth');
            const selectedTruth = this.getRandomElement(truths);
            return {
                id: selectedTruth.id,
                prompt: selectedTruth.prompt,
                type: 'truth',
                language,
                mode
            };
        }
        catch (error) {
            if (language !== this.config.defaultLanguage || mode !== this.config.defaultMode) {
                try {
                    const truths = this.loadPrompts(this.config.defaultLanguage, this.config.defaultMode, 'truth');
                    const selectedTruth = this.getRandomElement(truths);
                    return {
                        id: selectedTruth.id,
                        prompt: selectedTruth.prompt,
                        type: 'truth',
                        language: this.config.defaultLanguage,
                        mode: this.config.defaultMode
                    };
                }
                catch (fallbackError) {
                    throw new types_1.TruthOrDareError(`Failed to get truth prompt. Original error: ${error instanceof Error ? error.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`, 'FALLBACK_FAILED');
                }
            }
            throw error;
        }
    }
    getDare(options = {}) {
        const language = options.language || this.config.defaultLanguage;
        const mode = options.mode || this.config.defaultMode;
        try {
            const dares = this.loadPrompts(language, mode, 'dare');
            const selectedDare = this.getRandomElement(dares);
            return {
                id: selectedDare.id,
                prompt: selectedDare.prompt,
                type: 'dare',
                language,
                mode
            };
        }
        catch (error) {
            if (language !== this.config.defaultLanguage || mode !== this.config.defaultMode) {
                try {
                    const dares = this.loadPrompts(this.config.defaultLanguage, this.config.defaultMode, 'dare');
                    const selectedDare = this.getRandomElement(dares);
                    return {
                        id: selectedDare.id,
                        prompt: selectedDare.prompt,
                        type: 'dare',
                        language: this.config.defaultLanguage,
                        mode: this.config.defaultMode
                    };
                }
                catch (fallbackError) {
                    throw new types_1.TruthOrDareError(`Failed to get dare prompt. Original error: ${error instanceof Error ? error.message : 'Unknown error'}. Fallback error: ${fallbackError instanceof Error ? fallbackError.message : 'Unknown error'}`, 'FALLBACK_FAILED');
                }
            }
            throw error;
        }
    }
    getRandom(options = {}) {
        const isRandomTruth = Math.random() < 0.5;
        return isRandomTruth ? this.getTruth(options) : this.getDare(options);
    }
    getAvailableLanguages() {
        try {
            const dataPath = this.config.dataPath;
            if (!fs.existsSync(dataPath)) {
                return [];
            }
            const entries = fs.readdirSync(dataPath, { withFileTypes: true });
            return entries
                .filter(entry => entry.isDirectory())
                .map(entry => entry.name);
        }
        catch (error) {
            throw new types_1.TruthOrDareError(`Failed to get available languages: ${error instanceof Error ? error.message : 'Unknown error'}`, 'LANGUAGES_ERROR');
        }
    }
    getAvailableModes(language) {
        try {
            const languagePath = path.join(this.config.dataPath, language);
            if (!fs.existsSync(languagePath)) {
                return [];
            }
            const entries = fs.readdirSync(languagePath, { withFileTypes: true });
            return entries
                .filter(entry => entry.isDirectory())
                .map(entry => entry.name);
        }
        catch (error) {
            throw new types_1.TruthOrDareError(`Failed to get available modes for ${language}: ${error instanceof Error ? error.message : 'Unknown error'}`, 'MODES_ERROR');
        }
    }
}
exports.TruthOrDareCore = TruthOrDareCore;
//# sourceMappingURL=core.js.map