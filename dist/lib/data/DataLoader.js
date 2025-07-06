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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const index_1 = require("../errors/index");
class DataLoader {
    constructor(dataPath) {
        this.cache = new Map();
        this.dataPath = dataPath;
    }
    loadPrompts(language, mode, type) {
        const cacheKey = `${language}_${mode}_${type}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        const filePath = path.join(this.dataPath, language, mode, `${type}.ts`);
        try {
            if (!fs.existsSync(filePath)) {
                throw new index_1.TruthOrDareError(`Data file not found: ${filePath}`, 'FILE_NOT_FOUND');
            }
            delete require.cache[require.resolve(filePath)];
            const moduleImport = require(filePath);
            const prompts = moduleImport[`${type}Prompts`];
            if (!prompts) {
                throw new index_1.TruthOrDareError(`No prompts export found in ${filePath}. Expected ${type}Prompts export.`, 'NO_EXPORT_FOUND');
            }
            this.validatePromptsData(prompts, filePath);
            this.cache.set(cacheKey, prompts);
            return prompts;
        }
        catch (error) {
            if (error instanceof index_1.TruthOrDareError) {
                throw error;
            }
            throw new index_1.TruthOrDareError(`Failed to load prompts from ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`, 'LOAD_ERROR');
        }
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
        try {
            if (!fs.existsSync(this.dataPath)) {
                return [];
            }
            const entries = fs.readdirSync(this.dataPath, { withFileTypes: true });
            return entries
                .filter(entry => entry.isDirectory())
                .map(entry => entry.name);
        }
        catch (error) {
            throw new index_1.TruthOrDareError(`Failed to get available languages: ${error instanceof Error ? error.message : 'Unknown error'}`, 'LANGUAGES_ERROR');
        }
    }
    getAvailableModes(language) {
        try {
            const languagePath = path.join(this.dataPath, language);
            if (!fs.existsSync(languagePath)) {
                return [];
            }
            const entries = fs.readdirSync(languagePath, { withFileTypes: true });
            return entries
                .filter(entry => entry.isDirectory())
                .map(entry => entry.name);
        }
        catch (error) {
            throw new index_1.TruthOrDareError(`Failed to get available modes for ${language}: ${error instanceof Error ? error.message : 'Unknown error'}`, 'MODES_ERROR');
        }
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