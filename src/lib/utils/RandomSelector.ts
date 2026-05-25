import { TruthOrDareError } from '../errors/index';

/**
 * Utility class for random selection operations
 */
export class RandomSelector {
  /**
   * Get a random element from an array
   */
  public static getRandomElement<T>(array: T[]): T {
    if (array.length === 0) {
      throw new TruthOrDareError('Cannot get random element from empty array', 'EMPTY_ARRAY');
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  /**
   * Get a random boolean value
   */
  public static getRandomBoolean(): boolean {
    return Math.random() < 0.5;
  }

  /**
   * Get multiple random elements from an array (without duplicates)
   */
  public static getRandomElements<T>(array: T[], count: number): T[] {
    if (count <= 0) {
      return [];
    }
    
    if (count >= array.length) {
      return [...array];
    }

    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
  }

  /**
   * Shuffle an array in place
   */
  public static shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
}