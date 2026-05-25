import { StatisticsService } from './StatisticsService';
import { DataLoader } from '../data/DataLoader';

describe('StatisticsService', () => {
    let service: StatisticsService;

    beforeEach(() => {
        service = new StatisticsService(new DataLoader());
    });

    it('should return total count', () => {
        expect(service.getTotalPromptCount()).toBeGreaterThan(0);
    });

    it('should return count by language', () => {
        const count = service.getPromptCountByLanguage('english');
        expect(count).toBeGreaterThan(0);
    });

    it('should return count by mode', () => {
        const count = service.getPromptCountByMode('sfw');
        expect(count).toBeGreaterThan(0);
    });

    it('should return count by type', () => {
        const count = service.getPromptCountByType('truth');
        expect(count).toBeGreaterThan(0);
    });

    it('should return available categories', () => {
        const categories = service.getAvailableCategories();
        expect(categories.length).toBeGreaterThan(0);
        expect(categories).toContain('funny');
    });
});
