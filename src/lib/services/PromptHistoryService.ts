import { TruthOrDareError } from '../errors/index';

/**
 * Service for tracking prompt history to prevent duplicates
 * Disabled by default to minimize resource usage
 */
export class PromptHistoryService {
    private history: Set<string> = new Set();
    private historyArray: string[] = []; // For maintaining order
    private maxSize: number;
    private enabled: boolean;

    constructor(maxSize: number = 50, enabled: boolean = false) {
        this.maxSize = maxSize;
        this.enabled = enabled;
    }

    /**
     * Check if history tracking is enabled
     */
    public isEnabled(): boolean {
        return this.enabled;
    }

    /**
     * Enable or disable history tracking
     */
    public setEnabled(enabled: boolean): void {
        this.enabled = enabled;
        if (!enabled) {
            // Clear history when disabled to free memory
            this.clearHistory();
        }
    }

    /**
     * Check if a prompt has been used recently
     * Returns false if history is disabled
     */
    public hasPromptBeenUsed(promptId: string): boolean {
        if (!this.enabled) {
            return false;
        }
        return this.history.has(promptId);
    }

    /**
     * Add a prompt to history
     * Only tracks if history is enabled
     */
    public addToHistory(promptId: string): void {
        if (!this.enabled) {
            return; // Don't track if disabled
        }

        if (this.history.has(promptId)) {
            return; // Already in history
        }

        // Add to history
        this.history.add(promptId);
        this.historyArray.push(promptId);

        // Remove oldest if exceeds max size
        if (this.historyArray.length > this.maxSize) {
            const oldest = this.historyArray.shift();
            if (oldest) {
                this.history.delete(oldest);
            }
        }
    }

    /**
     * Clear all history
     */
    public clearHistory(): void {
        this.history.clear();
        this.historyArray = [];
    }

    /**
     * Get current history (newest first)
     */
    public getHistory(): string[] {
        if (!this.enabled) {
            return [];
        }
        return [...this.historyArray].reverse();
    }

    /**
     * Get history size
     */
    public getHistorySize(): number {
        return this.historyArray.length;
    }

    /**
     * Set maximum history size
     */
    public setMaxSize(maxSize: number): void {
        if (maxSize < 1) {
            throw new TruthOrDareError('Max history size must be at least 1', 'INVALID_CONFIG');
        }

        this.maxSize = maxSize;

        // Trim history if current size exceeds new max
        while (this.historyArray.length > maxSize) {
            const oldest = this.historyArray.shift();
            if (oldest) {
                this.history.delete(oldest);
            }
        }
    }

    /**
     * Get maximum history size
     */
    public getMaxSize(): number {
        return this.maxSize;
    }
}
