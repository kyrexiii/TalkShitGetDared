/**
 * Custom error class 
 */
export class TruthOrDareError extends Error {
  public readonly code: string;
  public readonly timestamp: Date;

  constructor(message: string, code: string) {
    super(message);
    this.name = 'TruthOrDareError';
    this.code = code;
    this.timestamp = new Date();

    // Maintain proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, TruthOrDareError);
    }
  }

  /**
   * Convert error to JSON for logging
   */
  public toJSON(): Record<string, any> {
    return {
      name: this.name,
      message: this.message,
      code: this.code,
      timestamp: this.timestamp.toISOString(),
      stack: this.stack
    };
  }
}