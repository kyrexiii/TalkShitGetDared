
# TalkShitGetDared 💀

A dangerously cursed, zero-dependency TypeScript package for all your Truth or Dare needs.  
Perfect for bots, APIs, party games, emotionally unstable couples, and Discord servers with too much time on their hands.

> Use responsibly... or don't.  
> I'm not legally responsible if your relationship ends (again).

---

## What Even Is This?

**TalkShitGetDared** is a chaos engine packed with:
- Truths that make people regret playing  
- Dares that might get you kicked out of the group chat  
- NSFW + SFW modes (you've been warned)  
- English, Spanish, and Hinglish support  
- Difficulty and category filtering — because pain comes in levels  
- Full TypeScript support with type declarations  

No dependencies. No mercy.

---

## Installation

```bash
npm install talkshitgetdared
```

or if you're allergic to npm:

```bash
pnpm add talkshitgetdared
# or
yarn add talkshitgetdared
```

---

## Usage

### ES Modules (TypeScript / ESM)

```typescript
import { getTruth, getDare, getRandom, getAvailableLanguages, getAvailableModes } from 'talkshitgetdared';

// Get a random truth
const truth = getTruth();
console.log('Truth:', truth.prompt.text);

// Get a dare in NSFW mode
const dare = getDare({ mode: 'nsfw' });
console.log('Dare:', dare.prompt.text);

// Get a random prompt in Spanish
const random = getRandom({ language: 'spanish', mode: 'sfw' });
console.log(`[${random.type}]`, random.prompt.text);
```

### CommonJS

```js
const { getTruth, getDare, getRandom } = require('talkshitgetdared');

const truth = getTruth();
console.log('Truth:', truth.prompt.text);
```

### CLI

```bash
npx talkshitgetdared              # random truth or dare
npx talkshitgetdared truth        # get a truth
npx talkshitgetdared dare --mode nsfw  # NSFW dare
npx talkshitgetdared stats        # library statistics
npx talkshitgetdared --help       # all options
```

---

## Options

You can filter prompts by:

| Option | Values | Default |
|---|---|---|
| `language` | `'english'` \| `'spanish'` \| `'hinglish'` | `'english'` |
| `mode` | `'sfw'` \| `'nsfw'` | `'sfw'` |
| `difficulty` | `'easy'` \| `'medium'` \| `'hard'` \| `'extreme'` | any |
| `category` | `'personal'` \| `'embarrassing'` \| `'relationships'` \| `'funny'` \| `'physical'` \| `'social'` \| `'intimate'` \| `'confession'` | any |

```typescript
const dare = getDare({
  language: 'hinglish',
  mode: 'sfw',
  difficulty: 'hard',
  category: 'funny'
});
```

---

## Advanced Usage

```typescript
import { getBatch, getStats, enableHistory, createCore } from 'talkshitgetdared';

// Get multiple unique prompts at once
const batch = getBatch({ count: 5, type: 'truth', ensureUnique: true });
batch.prompts.forEach(p => console.log(p.prompt.text));

// Enable history tracking (prevents duplicate prompts)
enableHistory(true);

// Get library statistics
const stats = getStats();
console.log(`Total prompts: ${stats.total}`);

// Create a custom instance with different defaults
const core = createCore({
  defaultLanguage: 'spanish',
  defaultMode: 'nsfw'
});
const dare = core.getDare();
```

---

## Folder Structure (if you really care)

```
src/data/lang/
  ├── english/
  │   ├── sfw/
  │   └── nsfw/
  ├── spanish/
  │   └── sfw/
  └── hinglish/
      ├── sfw/
      └── nsfw/
```

---

## Contribute Your Own Pain

Want to contribute your cursed prompts?
Fork it, PR it, or write them on a napkin and throw it into the ocean.
If it floats back to me, I'll probably add it.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## Emotional Disclaimer

This package will not fix your situationship, improve your friendships, or help you get your ex back.
It *might*, however, destroy all three at once.

I will **not** be attending your therapy session.

---

## License

MIT — do literally anything.
Just don't sue me if your friends block you.

[View License](./LICENSE.txt)

---

## Links

* GitHub: [kyrexiii/TalkShitGetDared](https://github.com/kyrexiii/TalkShitGetDared)
* NPM: [talkshitgetdared](https://www.npmjs.com/package/talkshitgetdared)
