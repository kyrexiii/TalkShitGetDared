import { RandomSelector } from './RandomSelector';

describe('RandomSelector', () => {
  describe('getRandomElement', () => {
    it('should return an element from array', () => {
      const arr = [1, 2, 3];
      const result = RandomSelector.getRandomElement(arr);
      expect(arr).toContain(result);
    });

    it('should throw error for empty array', () => {
      expect(() => RandomSelector.getRandomElement([])).toThrow();
    });
  });

  describe('shuffle', () => {
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = RandomSelector.shuffle([...arr]);
      expect(shuffled).toHaveLength(arr.length);
      expect(shuffled).toEqual(expect.arrayContaining(arr));
    });
  });

  describe('getRandomBoolean', () => {
    it('should return boolean', () => {
      expect(typeof RandomSelector.getRandomBoolean()).toBe('boolean');
    });
  });
});
