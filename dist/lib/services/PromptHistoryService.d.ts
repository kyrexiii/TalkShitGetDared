export declare class PromptHistoryService {
    private history;
    private historyArray;
    private maxSize;
    private enabled;
    constructor(maxSize?: number, enabled?: boolean);
    isEnabled(): boolean;
    setEnabled(enabled: boolean): void;
    hasPromptBeenUsed(promptId: string): boolean;
    addToHistory(promptId: string): void;
    clearHistory(): void;
    getHistory(): string[];
    getHistorySize(): number;
    setMaxSize(maxSize: number): void;
    getMaxSize(): number;
}
//# sourceMappingURL=PromptHistoryService.d.ts.map