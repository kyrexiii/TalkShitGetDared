import { TruthOrDareCore } from './TruthOrDareCore';

describe('TruthOrDareCore', () => {
    let core: TruthOrDareCore;

    beforeEach(() => {
        core = new TruthOrDareCore();
    });

    describe('Initialization', () => {
        it('should initialize with default configuration', () => {
            expect(core).toBeDefined();
        });

        it('should allow custom configuration', () => {
            const customCore = new TruthOrDareCore({
                defaultLanguage: 'spanish',
                defaultMode: 'nsfw',
                dataPath: './data'
            });
            expect(customCore).toBeDefined();
        });
    });

    describe('getTruth', () => {
        it('should return a truth prompt', () => {
            const result = core.getTruth();
            expect(result).toBeDefined();
            expect(result.type).toBe('truth');
            expect(result.prompt).toBeDefined();
            expect(result.prompt.id).toBeDefined();
            expect(result.prompt.text).toBeDefined();
        });

        it('should respect language option', () => {
            const result = core.getTruth({ language: 'spanish' });
            expect(result.language).toBe('spanish');
            expect(result.prompt.id).toMatch(/^es_/);
        });

        it('should respect mode option', () => {
            const result = core.getTruth({ mode: 'nsfw' });
            expect(result.mode).toBe('nsfw');
            expect(result.prompt.id).toContain('_nsfw_');
        });

        it('should respect difficulty filter', () => {
            const result = core.getTruth({ difficulty: 'easy' });
            expect(result.prompt.difficulty).toBe('easy');
        });

        it('should respect category filter', () => {
            const result = core.getTruth({ category: 'funny' });
            expect(result.prompt.category).toBe('funny');
        });
    });

    describe('getDare', () => {
        it('should return a dare prompt', () => {
            const result = core.getDare();
            expect(result).toBeDefined();
            expect(result.type).toBe('dare');
            expect(result.prompt).toBeDefined();
        });

        it('should respect options', () => {
            const result = core.getDare({ language: 'english', mode: 'sfw' });
            expect(result.language).toBe('english');
            expect(result.mode).toBe('sfw');
        });
    });

    describe('getRandom', () => {
        it('should return either truth or dare', () => {
            const result = core.getRandom();
            expect(['truth', 'dare']).toContain(result.type);
        });
    });

    describe('Batch Operations', () => {
        it('should return multiple prompts', () => {
            const batch = core.getBatch({ count: 5 });
            expect(batch.count).toBe(5);
            expect(batch.prompts).toHaveLength(5);
        });

        it('should ensure uniqueness by default', () => {
            const batch = core.getBatch({ count: 10 });
            const ids = batch.prompts.map(p => p.prompt.id);
            const uniqueIds = new Set(ids);
            expect(uniqueIds.size).toBe(ids.length);
        });
    });

    describe('Statistics', () => {
        it('should return library statistics', () => {
            const stats = core.getStats();
            expect(stats.total).toBeGreaterThan(0);
            expect(stats.byLanguage.english).toBeGreaterThan(0);
            expect(stats.byType.truth).toBeGreaterThan(0);
        });
    });

    describe('History Tracking', () => {
        it('should be disabled by default', () => {
            expect(core.isHistoryEnabled()).toBe(false);
        });

        it('should enable history tracking', () => {
            core.enableHistory(true);
            expect(core.isHistoryEnabled()).toBe(true);
        });

        it('should track prompts when enabled', () => {
            core.enableHistory(true);
            const result = core.getTruth();
            const history = core.getHistory();
            expect(history).toContain(result.prompt.id);
        });

        it('should not track prompts when disabled', () => {
            core.enableHistory(false);
            core.getTruth();
            const history = core.getHistory();
            expect(history).toHaveLength(0);
        });
    });
});
