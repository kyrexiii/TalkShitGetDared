# 💀 TalkShitGetDared

A dangerously cursed, zero-dependency TypeScript package for all your Truth or Dare needs.  
Perfect for bots, APIs, party games, emotionally unstable couples, and Discord servers with too much free time.

> 🧠 Use responsibly... or don’t.  
> 😇 I'm not legally responsible if your relationship ends.

---

## 🤸 What Even Is This?

**TalkShitGetDared** is a JSON-powered chaos engine filled with:
- ✅ Truths that emotionally damage people
- ✅ Dares that ruin friend groups (safely)
- 🔥 NSFW & SFW modes
- 🌍 English and Spanish support
- 🎯 Difficulty and category filters (because pain comes in levels)

---

## 📦 Installation

```bash
npm install talkshitgetdared
````

---

## 🧪 Usage

```ts
import { truthPrompts, darePrompts } from 'talkshitgetdared';

// get all NSFW truths in Spanish that are medium difficulty
const chaos = truthPrompts.filter(p =>
  p.id.startsWith('es_nsfw') && p.difficulty === 'medium'
);
```

---

---

## 📁 Folder Structure (in case you get lost)

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

## 🤝 Contribute (or ruin it more)

Want to add your own unhinged prompts in any language?
Fork it, PR it, and maybe I’ll approve it while crying in the corner.

---

## ⚠️ Legal & Emotional Disclaimer

This package is for entertainment purposes only.
Do not use in court.
Do not cry.
Do not use with your ex unless you're ready for consequences.

---

## 📜 License

MIT – do whatever you want, just don’t blame me for your breakup.
> – [MIT License, Cursed Edition](./LICENSE.txt)

---

## 🌐 Links

* GitHub: [kyrexiii/TalkShitGetDared](https://github.com/kyrexiii/TalkShitGetDared)
* NPM: [talkshitgetdared-v3](https://www.npmjs.com/package/talkshitgetdared)

---
