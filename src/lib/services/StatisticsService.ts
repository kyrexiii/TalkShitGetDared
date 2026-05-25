import { DataLoader } from '../data/index';
import {
    Language,
    Mode,
    PromptType,
    DifficultyLevel,
    PromptCategory,
    PromptStats,
} from '../types/index';

/**
 * Service for providing statistics about the prompt library
 */
export class StatisticsService {
    private dataLoader: DataLoader;

    constructor(dataLoader: DataLoader) {
        this.dataLoader = dataLoader;
    }

    /**
     * Get comprehensive statistics about all prompts
     */
    public getStats(): PromptStats {
        const languages = this.dataLoader.getAvailableLanguages();
        const stats: PromptStats = {
            total: 0,
            byLanguage: {} as Record<Language, number>,
            byMode: {} as Record<Mode, number>,
            byType: {} as Record<PromptType, number>,
            byDifficulty: {} as Record<DifficultyLevel, number>,
            byCategory: {} as Record<PromptCategory, number>,
        };

        // Initialize counters
        const types: PromptType[] = ['truth', 'dare'];

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

                        // Count by difficulty and category
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
                    } catch (error) {
                        // Skip if data doesn't exist for this combination
                        continue;
                    }
                }
            }
        }

        return stats;
    }

    /**
     * Get total number of prompts
     */
    public getTotalPromptCount(): number {
        return this.getStats().total;
    }

    /**
     * Get prompt count by language
     */
    public getPromptCountByLanguage(language: Language): number {
        return this.getStats().byLanguage[language] || 0;
    }

    /**
     * Get prompt count by mode
     */
    public getPromptCountByMode(mode: Mode): number {
        return this.getStats().byMode[mode] || 0;
    }

    /**
     * Get prompt count by type
     */
    public getPromptCountByType(type: PromptType): number {
        return this.getStats().byType[type] || 0;
    }

    /**
     * Get available categories (ones that have prompts)
     */
    public getAvailableCategories(): PromptCategory[] {
        const stats = this.getStats();
        return Object.keys(stats.byCategory) as PromptCategory[];
    }

    /**
     * Get available difficulty levels (ones that have prompts)
     */
    public getAvailableDifficulties(): DifficultyLevel[] {
        const stats = this.getStats();
        return Object.keys(stats.byDifficulty) as DifficultyLevel[];
    }
}
