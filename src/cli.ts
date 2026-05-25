#!/usr/bin/env node

import { getTruth, getDare, getRandom, getStats, getAvailableLanguages } from './index';
import { Mode, DifficultyLevel } from './lib/types/index';

/**
 * Simple CLI for TalkShitGetDared
 * For a more feature-rich experience with colors and interactive mode,
 * install chalk and inquirer as dependencies
 */

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0] || 'random';

// Parse flags
function getFlag(flag: string, defaultValue?: string): string | undefined {
    const index = args.indexOf(flag);
    if (index !== -1 && args[index + 1]) {
        return args[index + 1];
    }
    return defaultValue;
}

function hasFlag(flag: string): boolean {
    return args.includes(flag);
}

// Show help
if (hasFlag('--help') || hasFlag('-h')) {
    console.log(`
🎮 TalkShitGetDared CLI

USAGE:
  npx talkshitgetdared [command] [options]

COMMANDS:
  truth          Get a truth prompt
  dare           Get a dare prompt
  random         Get a random truth or dare (default)
  stats          Show library statistics
  help           Show this help message

OPTIONS:
  --mode <sfw|nsfw>              Filter by mode (default: sfw)
  --language <lang>              Select language (default: english)
  --difficulty <easy|medium|hard> Filter by difficulty
  --category <category>          Filter by category
  --count <n>                    Get multiple prompts (1-10)
  --help, -h                     Show this help

EXAMPLES:
  npx talkshitgetdared
  npx talkshitgetdared truth --mode nsfw
  npx talkshitgetdared dare --difficulty hard
  npx talkshitgetdared random --count 5
  npx talkshitgetdared stats

Visit https://github.com/kyrexiii/TalkShitGetDared for more info.
  `);
    process.exit(0);
}

// Get options from flags
const mode = getFlag('--mode', 'sfw') as Mode;
const language = getFlag('--language', 'english');
const difficulty = getFlag('--difficulty') as DifficultyLevel | undefined;
const category = getFlag('--category');
const count = parseInt(getFlag('--count', '1') || '1', 10);

try {
    console.log('\n🎮 TalkShitGetDared\n');

    if (command === 'stats') {
        const stats = getStats();
        console.log('📊 Library Statistics:\n');
        console.log(`  Total prompts: ${stats.total}`);
        console.log(`\n  By Language:`);
        Object.entries(stats.byLanguage).forEach(([lang, count]) => {
            console.log(`    ${lang}: ${count}`);
        });
        console.log(`\n  By Mode:`);
        Object.entries(stats.byMode).forEach(([m, c]) => {
            console.log(`    ${m}: ${c}`);
        });
        console.log(`\n  By Type:`);
        Object.entries(stats.byType).forEach(([type, c]) => {
            console.log(`    ${type}: ${c}`);
        });
        console.log('');
    } else if (command === 'languages') {
        const languages = getAvailableLanguages();
        console.log('🌍 Available Languages:\n');
        languages.forEach(lang => console.log(`  • ${lang}`));
        console.log('');
    } else {
        const options: any = {
            language: language as any,
            mode,
        };

        // Only add optional properties if they're defined
        if (difficulty) {
            options.difficulty = difficulty;
        }
        if (category) {
            options.category = category as any;
        }

        for (let i = 0; i < Math.min(count, 10); i++) {
            let result;

            switch (command) {
                case 'truth':
                    result = getTruth(options);
                    console.log(`💭 TRUTH: ${result.prompt.text}`);
                    break;
                case 'dare':
                    result = getDare(options);
                    console.log(`🔥 DARE: ${result.prompt.text}`);
                    break;
                case 'random':
                default:
                    result = getRandom(options);
                    const emoji = result.type === 'truth' ? '💭' : '🔥';
                    const label = result.type.toUpperCase();
                    console.log(`${emoji} ${label}: ${result.prompt.text}`);
                    break;
            }

            if (count > 1) {
                console.log('');
            }
        }

        console.log('');
    }
} catch (error) {
    console.error('\n❌ Error:', error instanceof Error ? error.message : 'Unknown error');
    console.log('\nTry: npx talkshitgetdared --help\n');
    process.exit(1);
}
