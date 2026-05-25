import { DataLoader } from '../data/index';
import { Language, Mode, PromptType, DifficultyLevel, PromptCategory, PromptStats } from '../types/index';
export declare class StatisticsService {
    private dataLoader;
    constructor(dataLoader: DataLoader);
    getStats(): PromptStats;
    getTotalPromptCount(): number;
    getPromptCountByLanguage(language: Language): number;
    getPromptCountByMode(mode: Mode): number;
    getPromptCountByType(type: PromptType): number;
    getAvailableCategories(): PromptCategory[];
    getAvailableDifficulties(): DifficultyLevel[];
}
//# sourceMappingURL=StatisticsService.d.ts.map