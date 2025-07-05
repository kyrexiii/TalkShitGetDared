"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomSelector = void 0;
const index_1 = require("../errors/index");
class RandomSelector {
    static getRandomElement(array) {
        if (array.length === 0) {
            throw new index_1.TruthOrDareError('Cannot get random element from empty array', 'EMPTY_ARRAY');
        }
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    static getRandomBoolean() {
        return Math.random() < 0.5;
    }
    static getRandomElements(array, count) {
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
    static shuffle(array) {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
}
exports.RandomSelector = RandomSelector;
//# sourceMappingURL=RandomSelector.js.map