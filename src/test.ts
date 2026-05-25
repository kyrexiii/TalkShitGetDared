import { getTruth, getDare, getRandom, getAvailableLanguages, getAvailableModes } from './index';
import { Language } from './lib/index';

/**
 * Test script for truth-or-dare-core package
 */
async function runTests() {
  console.log('🎮 Testing Truth-or-Dare Core Package\n');

  try {
    // Test available languages
    console.log('📋 Available Languages:');
    const languages = getAvailableLanguages();
    console.log(languages.join(', '));
    console.log();

    // Test available modes for each language
    for (const language of languages) {
      console.log(`🔧 Available Modes for ${language}:`);
      const modes = getAvailableModes(language);
      console.log(modes.join(', '));
      console.log();
    }

    // Test getTruth with defaults
    console.log('🤔 Testing getTruth() with defaults:');
    const truthStart = Date.now();
    const truth1 = getTruth();
    const truthTime = Date.now() - truthStart;
    console.log(`ID: ${truth1.prompt.id}`);
    console.log(`Prompt: ${truth1.prompt.text}`);
    console.log(`Type: ${truth1.type}`);
    console.log(`Language: ${truth1.language}`);
    console.log(`Mode: ${truth1.mode}`);
    console.log(`timeTaken: ${truthTime}ms`);
    console.log(`Contributor: ${truth1.prompt.contributor}`);
    console.log(`Category: ${truth1.prompt.category}`);
    console.log(`Difficulty: ${truth1.prompt.difficulty}`);
    console.log();

    // Test getDare with defaults
    console.log('😈 Testing getDare() with defaults:');
    const dareStart = Date.now();
    const dare1 = getDare();
    const dareTime = Date.now() - dareStart;
    console.log(`ID: ${dare1.prompt.id}`);
    console.log(`Prompt: ${dare1.prompt.text}`);
    console.log(`Type: ${dare1.type}`);
    console.log(`Language: ${dare1.language}`);
    console.log(`Mode: ${dare1.mode}`);
    console.log(`timeTaken: ${dareTime}ms`);
    console.log(`Contributor: ${truth1.prompt.contributor}`);
    console.log(`Category: ${truth1.prompt.category}`);
    console.log(`Difficulty: ${truth1.prompt.difficulty}`);
    console.log();

    // Test getRandom with defaults
    console.log('🎲 Testing getRandom() with defaults:');
    const randomStart = Date.now();
    const random1 = getRandom();
    const randomTime = Date.now() - randomStart;
    console.log(`ID: ${random1.prompt.id}`);
    console.log(`Prompt: ${random1.prompt.text}`);
    console.log(`Type: ${random1.type}`);
    console.log(`Language: ${random1.language}`);
    console.log(`Mode: ${random1.mode}`);
    console.log(`timeTaken: ${randomTime}ms`);
    console.log(`Contributor: ${truth1.prompt.contributor}`);
    console.log(`Category: ${truth1.prompt.category}`);
    console.log(`Difficulty: ${truth1.prompt.difficulty}`);
    console.log();

    // Test with specific language and mode
    console.log('🌍 Testing with Spanish SFW:');
    const spanishStart = Date.now();
    const spanish = getTruth({ language: 'spanish', mode: 'sfw' });
    const spanishTime = Date.now() - spanishStart;
    console.log(`ID: ${spanish.prompt.id}`);
    console.log(`Prompt: ${spanish.prompt.text}`);
    console.log(`Type: ${spanish.type}`);
    console.log(`Language: ${spanish.language}`);
    console.log(`Mode: ${spanish.mode}`);
    console.log(`timeTaken: ${spanishTime}ms`);
    console.log(`Contributor: ${truth1.prompt.contributor}`);
    console.log(`Category: ${truth1.prompt.category}`);
    console.log(`Difficulty: ${truth1.prompt.difficulty}`);
    console.log();

    // Test with NSFW mode
    console.log('🔞 Testing with English NSFW:');
    const nsfwStart = Date.now();
    const nsfw = getDare({ language: 'english', mode: 'nsfw' });
    const nsfwTime = Date.now() - nsfwStart;
    console.log(`ID: ${nsfw.prompt.id}`);
    console.log(`Prompt: ${nsfw.prompt.text}`);
    console.log(`Type: ${nsfw.type}`);
    console.log(`Language: ${nsfw.language}`);
    console.log(`Mode: ${nsfw.mode}`);
    console.log(`timeTaken: ${nsfwTime}ms`);
    console.log(`Contributor: ${truth1.prompt.contributor}`);
    console.log(`Category: ${truth1.prompt.category}`);
    console.log(`Difficulty: ${truth1.prompt.difficulty}`);
    console.log();

    // Test multiple random calls
    console.log('🎯 Testing multiple random calls:');
    const multipleStart = Date.now();
    for (let i = 0; i < 5; i++) {
      const callStart = Date.now();
      const random = getRandom();
      const callTime = Date.now() - callStart;
      console.log(`${i + 1}. [${random.type.toUpperCase()}] ${random.prompt.text} (${callTime}ms)`);
    }
    const multipleTime = Date.now() - multipleStart;
    console.log(`Total time for 5 calls: ${multipleTime}ms`);
    console.log();

    // Test error handling
    console.log('⚠️ Testing error handling with invalid language:');
    try {
      getTruth({ language: 'invalid' as Language, mode: 'sfw' });
      console.log('Error: Should have thrown an error');
    } catch (error) {
      console.log(`Caught expected error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
    console.log();

    console.log('✅ All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}
