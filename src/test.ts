import { getTruth, getDare, getRandom, getAvailableLanguages, getAvailableModes } from './index';
import { Language } from './types';

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
    const truth1 = getTruth();
    console.log(`ID: ${truth1.id}`);
    console.log(`Prompt: ${truth1.prompt}`);
    console.log(`Type: ${truth1.type}`);
    console.log(`Language: ${truth1.language}`);
    console.log(`Mode: ${truth1.mode}`);
    console.log();

    // Test getDare with defaults
    console.log('😈 Testing getDare() with defaults:');
    const dare1 = getDare();
    console.log(`ID: ${dare1.id}`);
    console.log(`Prompt: ${dare1.prompt}`);
    console.log(`Type: ${dare1.type}`);
    console.log(`Language: ${dare1.language}`);
    console.log(`Mode: ${dare1.mode}`);
    console.log();

    // Test getRandom with defaults
    console.log('🎲 Testing getRandom() with defaults:');
    const random1 = getRandom();
    console.log(`ID: ${random1.id}`);
    console.log(`Prompt: ${random1.prompt}`);
    console.log(`Type: ${random1.type}`);
    console.log(`Language: ${random1.language}`);
    console.log(`Mode: ${random1.mode}`);
    console.log();

    // Test with specific language and mode
    console.log('🌍 Testing with Spanish SFW:');
    const spanish = getTruth({ language: 'spanish', mode: 'sfw' });
    console.log(`ID: ${spanish.id}`);
    console.log(`Prompt: ${spanish.prompt}`);
    console.log(`Type: ${spanish.type}`);
    console.log(`Language: ${spanish.language}`);
    console.log(`Mode: ${spanish.mode}`);
    console.log();

    // Test with NSFW mode
    console.log('🔞 Testing with English NSFW:');
    const nsfw = getDare({ language: 'english', mode: 'nsfw' });
    console.log(`ID: ${nsfw.id}`);
    console.log(`Prompt: ${nsfw.prompt}`);
    console.log(`Type: ${nsfw.type}`);
    console.log(`Language: ${nsfw.language}`);
    console.log(`Mode: ${nsfw.mode}`);
    console.log();

    // Test multiple random calls
    console.log('🎯 Testing multiple random calls:');
    for (let i = 0; i < 5; i++) {
      const random = getRandom();
      console.log(`${i + 1}. [${random.type.toUpperCase()}] ${random.prompt}`);
    }
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
