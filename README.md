# 💀 TalkShitGetDared

A dangerously cursed, zero-dependency TypeScript package for all your Truth or Dare needs  
Perfect for bots, APIs, party games, emotionally unstable couples and Discord servers with too much time

> 🧠 Use responsibly... or don’t  
> 😇 I'm not legally responsible if your relationship ends

---

## 🤸 What Even Is This?

**TalkShitGetDared** is a json-fueled chaos machine packed with:
- ✅ Truths that make people regret playing
- ✅ Dares that might get you kicked out of the group chat
- 🔥 NSFW + SFW modes
- 🌍 English and spanish support
- 🎯 Difficulty and category filtering (pain comes in levels)

---

## 📦 Install it

```bash
npm install talkshitgetdared
````

---

## 🧪 how 2 use

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
const dare = getDare({ mode: 'nsfw' }) // yeah that's right
console.log('Dare:', dare.prompt.text)

// get random (truth or dare)
const random = getRandom({ language: 'spanish', mode: 'sfw' })
console.log(`[${random.type}]`, random.prompt.text)
```

---

## 📁 Folder structure if you care

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

## 🙌 Add your own pain

Want to contribute your cursed prompts?
Fork it, PR it or throw them in a bottle into the ocean and hope I see it

---

## ⚠️ Emotional warning lol

This package is for fun but don’t use it to fix your situationship
I will NOT be attending your therapy session

---

## 📜 License

MIT, do literally anything
just don’t sue me if your friends block you

[MIT License](./LICENSE.txt)

---

## 🌐 Links and stuff

* GitHub: [kyrexiii/TalkShitGetDared](https://github.com/kyrexiii/TalkShitGetDared)
* NPM: [talkshitgetdared](https://www.npmjs.com/package/talkshitgetdared)

```
