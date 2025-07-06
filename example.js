const { getTruth, getDare, getRandom, getAvailableLanguages, getAvailableModes } = require('./dist/index.js');

console.log('🎮 Truth-or-Dare Core Package Demo\n');

// Show available languages and modes
console.log('📋 Available Languages:', getAvailableLanguages());
console.log('🔧 Available Modes for English:', getAvailableModes('english'));
console.log('🔧 Available Modes for Spanish:', getAvailableModes('spanish'));
console.log();

// Basic usage examples
console.log('🤔 Random Truth (default English SFW):');
const truth = getTruth();
console.log(`   ${truth.prompt}\n`);

console.log('😈 Random Dare (default English SFW):');
const dare = getDare();
console.log(`   ${dare.prompt}\n`);

console.log('🎲 Random Truth or Dare (default English SFW):');
const random = getRandom();
console.log(`   ${random.type.toUpperCase()}: ${random.prompt}\n`);

// Language-specific examples
console.log('🌍 Spanish Truth:');
const spanishTruth = getTruth({ language: 'spanish', mode: 'sfw' });
console.log(`   ${spanishTruth.prompt}\n`);

console.log('🔞 English NSFW Dare:');
const nsfwDare = getDare({ language: 'english', mode: 'nsfw' });
console.log(`   ${nsfwDare.prompt}\n`);

console.log('✅ Demo completed successfully!');