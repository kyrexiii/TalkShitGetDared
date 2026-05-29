"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticsService = void 0;
class StatisticsService {
    constructor(dataLoader) {
        this.dataLoader = dataLoader;
    }
    getStats() {
        const languages = this.dataLoader.getAvailableLanguages();
        const stats = {
            total: 0,
            byLanguage: {},
            byMode: {},
            byType: {},
            byDifficulty: {},
            byCategory: {},
        };
        const types = ['truth', 'dare'];
        for (const language of languages) {
            stats.byLanguage[language] = 0;
            const availableModes = this.dataLoader.getAvailableModes(language);
            for (const mode of availableModes) {
                if (!stats.byMode[mode]) {
                    stats.byMode[mode] = 0;
                }
                for (const type of types) {
                    if (!stats.byType[type]) {
                        stats.byType[type] = 0;
                    }
                    try {
                        const prompts = this.dataLoader.loadPrompts(language, mode, type);
                        const count = prompts.length;
                        stats.total += count;
                        stats.byLanguage[language] += count;
                        stats.byMode[mode] += count;
                        stats.byType[type] += count;
                        prompts.forEach((prompt) => {
                            if (!stats.byDifficulty[prompt.difficulty]) {
                                stats.byDifficulty[prompt.difficulty] = 0;
                            }
                            stats.byDifficulty[prompt.difficulty]++;
                            if (!stats.byCategory[prompt.category]) {
                                stats.byCategory[prompt.category] = 0;
                            }
                            stats.byCategory[prompt.category]++;
                        });
                    }
                    catch {
                        continue;
                    }
                }
            }
        }
        return stats;
    }
    getTotalPromptCount() {
        return this.getStats().total;
    }
    getPromptCountByLanguage(language) {
        return this.getStats().byLanguage[language] || 0;
    }
    getPromptCountByMode(mode) {
        return this.getStats().byMode[mode] || 0;
    }
    getPromptCountByType(type) {
        return this.getStats().byType[type] || 0;
    }
    getAvailableCategories() {
        const stats = this.getStats();
        return Object.keys(stats.byCategory);
    }
    getAvailableDifficulties() {
        const stats = this.getStats();
        return Object.keys(stats.byDifficulty);
    }
}
exports.StatisticsService = StatisticsService;
//# sourceMappingURL=StatisticsService.js.map