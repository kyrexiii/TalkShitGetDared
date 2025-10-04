
# TalkShitGetDared 💀

A dangerously cursed, zero-dependency TypeScript package for all your Truth or Dare needs.  
Perfect for bots, APIs, party games, emotionally unstable couples, and Discord servers with too much time on their hands.

> Use responsibly... or don’t.  
> I’m not legally responsible if your relationship ends (again).

---

## What Even Is This?

**TalkShitGetDared** is a JSON-fueled chaos engine packed with:
- Truths that make people regret playing  
- Dares that might get you kicked out of the group chat  
- NSFW + SFW modes (you’ve been warned)  
- English **and** Spanish support  
- Difficulty and category filtering — because pain comes in levels  

No dependencies. No mercy.

---

## Installation

```bash
npm install talkshitgetdared
````

or if you’re allergic to npm:

```bash
pnpm add talkshitgetdared
# or
yarn add talkshitgetdared
```

---

## Usage

```js
const {
  getTruth,
  getDare,
  getRandom,
  getAvailableLanguages,
  getAvailableModes
} = require('talkshitgetdared')

console.log('Languages:', getAvailableLanguages())
console.log('Modes in English:', getAvailableModes('english'))

// get truth
const truth = getTruth()
console.log('Truth:', truth.prompt.text)
console.log('Contributor:', truth.prompt.contributor)

// get dare
const dare = getDare({ mode: 'nsfw' })
console.log('Dare:', dare.prompt.text)

// get random (truth or dare)
const random = getRandom({ language: 'spanish', mode: 'sfw' })
console.log(`[${random.type}]`, random.prompt.text)
```

You can filter by:

* `language`: `'english' | 'spanish'`
* `mode`: `'sfw' | 'nsfw'`
* `difficulty`: `'easy' | 'medium' | 'hard'`

---

## Folder Structure (if you really care)

```
/data
  └── /lang
      ├── english/
      │   ├── sfw/
      │   └── nsfw/
      └── spanish/
          └── sfw/
```

---

## Contribute Your Own Pain

Want to contribute your cursed prompts?
Fork it, PR it, or write them on a napkin and throw it into the ocean.
If it floats back to me, I’ll probably add it.

---

## Emotional Disclaimer

This package will not fix your situationship, improve your friendships, or help you get your ex back.
It *might*, however, destroy all three at once.

I will **not** be attending your therapy session.

---

## License

MIT — do literally anything.
Just don’t sue me if your friends block you.

[View License](./LICENSE.txt)

---

## Links

* GitHub: [kyrexiii/TalkShitGetDared](https://github.com/kyrexiii/TalkShitGetDared)
* NPM: [talkshitgetdared](https://www.npmjs.com/package/talkshitgetdared)

````
