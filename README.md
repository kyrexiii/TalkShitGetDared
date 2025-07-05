# Truth-or-Dare Core

A TypeScript npm package providing core logic for truth-and-dare applications with multi-language and content filtering support.

## Features

- 🌍 **Multi-language support** - Easily add new languages
- 🔒 **Content filtering** - SFW and NSFW modes
- 📁 **Structured data** - Organized JSON files for easy management
- 🎲 **Random selection** - Get random truth, dare, or mixed prompts
- 💪 **TypeScript** - Full type safety and IntelliSense support
- 🛡️ **Error handling** - Comprehensive error handling with fallbacks
- 📦 **Zero dependencies** - Uses only Node.js built-in modules

## Installation

```bash
npm install truth-or-dare-core
```

## Quick Start

```typescript
import { getTruth, getDare, getRandom } from 'truth-or-dare-core';

// Get a random truth (defaults to English SFW)
const truth = getTruth();
console.log(truth.prompt); // "What's your biggest fear?"

// Get a random dare with specific options
const dare = getDare({ language: 'spanish', mode: 'sfw' });
console.log(dare.prompt); // "Canta una canción elegida por el grupo."

// Get a random truth or dare
const random = getRandom({ language: 'english', mode: 'nsfw' });
console.log(`${random.type}: ${random.prompt}`);
```

## API Reference

### Core Functions

#### `getTruth(options?)`
Returns a random truth prompt.

**Parameters:**
- `options` (optional): Configuration object
  - `language?: 'english' | 'spanish'` - Language for the prompt (default: 'english')
  - `mode?: 'sfw' | 'nsfw'` - Content filtering mode (default: 'sfw')

**Returns:** `PromptResult`

#### `getDare(options?)`
Returns a random dare prompt.

**Parameters:**
- `options` (optional): Same as `getTruth()`

**Returns:** `PromptResult`

#### `getRandom(options?)`
Returns a random truth or dare prompt.

**Parameters:**
- `options` (optional): Same as `getTruth()`

**Returns:** `PromptResult`

### Utility Functions

#### `getAvailableLanguages()`
Returns an array of available languages.

**Returns:** `Language[]`

#### `getAvailableModes(language)`
Returns available modes for a specific language.

**Parameters:**
- `language: Language` - The language to check

**Returns:** `Mode[]`

#### `createCore(config?)`
Creates a new core instance with custom configuration.

**Parameters:**
- `config` (optional): Configuration object
  - `defaultLanguage?: Language` - Default language to use
  - `defaultMode?: Mode` - Default mode to use
  - `dataPath?: string` - Custom path to data files

**Returns:** `TruthOrDareCore`

### Types

#### `PromptResult`
```typescript
interface PromptResult {
  id: string;        // Unique identifier for the prompt
  prompt: string;    // The actual prompt text
  type: 'truth' | 'dare';  // Type of prompt
  language: Language;      // Language of the prompt
  mode: Mode;             // Content filtering mode
}
```

#### `Language`
```typescript
type Language = 'english' | 'spanish';
```

#### `Mode`
```typescript
type Mode = 'sfw' | 'nsfw';
```

## Data Structure

The package organizes prompts in a hierarchical structure:

```
data/
└── lang/
    ├── english/
    │   ├── sfw/
    │   │   ├── truth.json
    │   │   └── dare.json
    │   └── nsfw/
    │       ├── truth.json
    │       └── dare.json
    └── spanish/
        └── sfw/
            ├── truth.json
            └── dare.json
```

Each JSON file contains an array of prompt objects:

```json
[
  {
    "id": "en_sfw_t001",
    "prompt": "What's your biggest fear?"
  }
]
```

## Advanced Usage

### Custom Core Instance

```typescript
import { createCore } from 'truth-or-dare-core';

const customCore = createCore({
  defaultLanguage: 'spanish',
  defaultMode: 'sfw',
  dataPath: './custom-data-path'
});

const truth = customCore.getTruth();
```

### Error Handling

```typescript
import { getTruth, TruthOrDareError } from 'truth-or-dare-core';

try {
  const truth = getTruth({ language: 'french' }); // Unsupported language
} catch (error) {
  if (error instanceof TruthOrDareError) {
    console.log(`Error: ${error.message}`);
    console.log(`Code: ${error.code}`);
  }
}
```

## Contributing

To add new languages or prompts:

1. Create the appropriate folder structure in `data/lang/`
2. Add JSON files with the correct format
3. Update the `Language` type in `src/types.ts`
4. Test your changes

## License

MIT
