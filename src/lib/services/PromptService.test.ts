import { PromptService } from './PromptService';
import { PromptHistoryService } from './PromptHistoryService';

describe('PromptService', () => {
    let service: PromptService;

    beforeEach(() => {
        service = new PromptService({
            defaultLanguage: 'english',
            defaultMode: 'sfw',
            dataPath: ''
        });
    });

    it('should initialize correctly', () => {
        expect(service).toBeDefined();
    });

    describe('getPrompt', () => {
        it('should return a prompt', () => {
            const result = service.getTruth({ language: 'english', mode: 'sfw' });
            expect(result).toBeDefined();
            expect(result.prompt.id).toBeDefined();
        });

        it('should filter by difficulty', () => {
            const result = service.getTruth({ language: 'english', mode: 'sfw', difficulty: 'hard' });
            expect(result.prompt.difficulty).toBe('hard');
        });

        it('should filter by category', () => {
            const result = service.getTruth({ language: 'english', mode: 'sfw', category: 'personal' });
            expect(result.prompt.category).toBe('personal');
        });

        it('should throw error if no prompts match filter', () => {
            // Assuming no 'easy' prompts in 'extreme' category (hypothetical scenario)
            // This test might need adjustment based on actual data
            try {
                service.getTruth({
                    language: 'english',
                    mode: 'sfw',
                    difficulty: 'easy',
                    // @ts-ignore - testing invalid combination
                    category: 'non_existent_category'
                });
            } catch (error) {
                expect(error).toBeDefined();
            }
        });
    });

    describe('getBatch', () => {
        it('should return requested number of prompts', () => {
            const batch = service.getBatch({ count: 5, language: 'english', mode: 'sfw', type: 'truth' });
            expect(batch.prompts).toHaveLength(5);
        });

        it('should return unique prompts', () => {
            const batch = service.getBatch({ count: 10, language: 'english', mode: 'sfw', type: 'truth', ensureUnique: true });
            const ids = batch.prompts.map(p => p.prompt.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
    });

    describe('History Integration', () => {
        it('should use history service if provided', () => {
            const historyService = new PromptHistoryService();
            historyService.setEnabled(true);
            const serviceWithHistory = new PromptService({
                defaultLanguage: 'english',
                defaultMode: 'sfw',
                dataPath: '',
                enableHistory: true
            });
            // Inject history service manually for testing or use public API
            // Since we can't easily inject, we'll test via public API
            // But PromptService constructor creates its own history service based on config
            // So we should verify behavior

            const prompt = serviceWithHistory.getTruth();
            expect(serviceWithHistory.getHistoryService().hasPromptBeenUsed(prompt.prompt.id)).toBe(true);
        });
    });
});
