"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
async function runTests() {
    console.log('🎮 Testing Truth-or-Dare Core Package\n');
    try {
        console.log('📋 Available Languages:');
        const languages = (0, index_1.getAvailableLanguages)();
        console.log(languages.join(', '));
        console.log();
        for (const language of languages) {
            console.log(`🔧 Available Modes for ${language}:`);
            const modes = (0, index_1.getAvailableModes)(language);
            console.log(modes.join(', '));
            console.log();
        }
        console.log('🤔 Testing getTruth() with defaults:');
        const truth1 = (0, index_1.getTruth)();
        console.log(`ID: ${truth1.id}`);
        console.log(`Prompt: ${truth1.prompt}`);
        console.log(`Type: ${truth1.type}`);
        console.log(`Language: ${truth1.language}`);
        console.log(`Mode: ${truth1.mode}`);
        console.log();
        console.log('😈 Testing getDare() with defaults:');
        const dare1 = (0, index_1.getDare)();
        console.log(`ID: ${dare1.id}`);
        console.log(`Prompt: ${dare1.prompt}`);
        console.log(`Type: ${dare1.type}`);
        console.log(`Language: ${dare1.language}`);
        console.log(`Mode: ${dare1.mode}`);
        console.log();
        console.log('🎲 Testing getRandom() with defaults:');
        const random1 = (0, index_1.getRandom)();
        console.log(`ID: ${random1.id}`);
        console.log(`Prompt: ${random1.prompt}`);
        console.log(`Type: ${random1.type}`);
        console.log(`Language: ${random1.language}`);
        console.log(`Mode: ${random1.mode}`);
        console.log();
        console.log('🌍 Testing with Spanish SFW:');
        const spanish = (0, index_1.getTruth)({ language: 'spanish', mode: 'sfw' });
        console.log(`ID: ${spanish.id}`);
        console.log(`Prompt: ${spanish.prompt}`);
        console.log(`Type: ${spanish.type}`);
        console.log(`Language: ${spanish.language}`);
        console.log(`Mode: ${spanish.mode}`);
        console.log();
        console.log('🔞 Testing with English NSFW:');
        const nsfw = (0, index_1.getDare)({ language: 'english', mode: 'nsfw' });
        console.log(`ID: ${nsfw.id}`);
        console.log(`Prompt: ${nsfw.prompt}`);
        console.log(`Type: ${nsfw.type}`);
        console.log(`Language: ${nsfw.language}`);
        console.log(`Mode: ${nsfw.mode}`);
        console.log();
        console.log('🎯 Testing multiple random calls:');
        for (let i = 0; i < 5; i++) {
            const random = (0, index_1.getRandom)();
            console.log(`${i + 1}. [${random.type.toUpperCase()}] ${random.prompt}`);
        }
        console.log();
        console.log('⚠️ Testing error handling with invalid language:');
        try {
            (0, index_1.getTruth)({ language: 'invalid', mode: 'sfw' });
            console.log('Error: Should have thrown an error');
        }
        catch (error) {
            console.log(`Caught expected error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
        console.log();
        console.log('✅ All tests completed successfully!');
    }
    catch (error) {
        console.error('❌ Test failed:', error instanceof Error ? error.message : 'Unknown error');
        process.exit(1);
    }
}
if (require.main === module) {
    runTests();
}
//# sourceMappingURL=test.js.map