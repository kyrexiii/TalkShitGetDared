import { PromptHistoryService } from './PromptHistoryService';

describe('PromptHistoryService', () => {
    let service: PromptHistoryService;

    beforeEach(() => {
        service = new PromptHistoryService();
    });

    it('should be disabled by default', () => {
        expect(service.isEnabled()).toBe(false);
    });

    it('should enable tracking', () => {
        service.setEnabled(true);
        expect(service.isEnabled()).toBe(true);
    });

    it('should track prompts', () => {
        service.setEnabled(true);
        service.addToHistory('test_id_1');
        expect(service.hasPromptBeenUsed('test_id_1')).toBe(true);
        expect(service.getHistory()).toContain('test_id_1');
    });

    it('should not track if disabled', () => {
        service.setEnabled(false);
        service.addToHistory('test_id_1');
        expect(service.hasPromptBeenUsed('test_id_1')).toBe(false);
        expect(service.getHistory()).toHaveLength(0);
    });

    it('should respect max size', () => {
        service.setEnabled(true);
        service.setMaxSize(2);
        service.addToHistory('1');
        service.addToHistory('2');
        service.addToHistory('3');

        expect(service.getHistory()).toHaveLength(2);
        expect(service.hasPromptBeenUsed('1')).toBe(false); // Should be evicted
        expect(service.hasPromptBeenUsed('3')).toBe(true);
    });

    it('should clear history', () => {
        service.setEnabled(true);
        service.addToHistory('1');
        service.clearHistory();
        expect(service.getHistory()).toHaveLength(0);
    });
});
