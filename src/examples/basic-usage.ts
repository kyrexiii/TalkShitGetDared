import { getTruth, getDare, getRandom } from '../index';

console.log('🎮 TalkShitGetDared - Basic Usage Example');
console.log('----------------------------------------');

// 1. Get a random truth
const truth = getTruth();
console.log('\n🤔 Random Truth:');
console.log(`"${truth.prompt.text}"`);
console.log(`(ID: ${truth.prompt.id}, Difficulty: ${truth.prompt.difficulty})`);

// 2. Get a random dare
const dare = getDare();
console.log('\n😈 Random Dare:');
console.log(`"${dare.prompt.text}"`);
console.log(`(ID: ${dare.prompt.id}, Difficulty: ${dare.prompt.difficulty})`);

// 3. Get a random prompt (truth or dare)
const random = getRandom();
console.log(`\n🎲 Random ${random.type.toUpperCase()}:`);
console.log(`"${random.prompt.text}"`);

// 4. Get a specific type with options
const nsfwDare = getDare({ mode: 'nsfw', difficulty: 'hard' });
console.log('\n🔥 Hard NSFW Dare:');
console.log(`"${nsfwDare.prompt.text}"`);

// 5. Get a prompt in another language
const spanishTruth = getTruth({ language: 'spanish' });
console.log('\n🇪🇸 Spanish Truth:');
console.log(`"${spanishTruth.prompt.text}"`);
