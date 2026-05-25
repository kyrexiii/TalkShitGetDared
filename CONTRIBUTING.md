# Contributing to TalkShitGetDared 💀

So, you want to add your own chaos to the mix? Excellent. We need more people like you (or maybe less, who knows).

Here’s how you can contribute without breaking everything.

## Adding New Prompts

This is the easiest way to contribute. We always need more truths and dares.

1.  **Navigate to the data folder:**
    `src/data/lang/[language]/[mode]/`

2.  **Choose the file:**
    *   `truth.ts` for Truths
    *   `dare.ts` for Dares

3.  **Add your prompt:**
    Follow the existing format:

    ```typescript
    {
      id: "unique_id_here", // e.g., en_sfw_t099
      text: "Your cursed prompt here",
      contributor: "your_github_username", // Optional, but good for clout
      difficulty: "easy" | "medium" | "hard" | "extreme",
      category: "funny" | "personal" | "social" | "physical" | "embarrassing"
    }
    ```

4.  **Run tests:**
    Make sure you didn't break the JSON structure (or TS file).
    ```bash
    npm run test
    ```

## Adding a New Language

Want to translate the pain?

1.  Create a new folder in `src/data/lang/` (e.g., `german`).
2.  Create `sfw` and `nsfw` subfolders.
3.  Add `truth.ts` and `dare.ts` files in each.
4.  Update `src/lib/types/index.ts` to include your new language in the `Language` type.
5.  Update `src/lib/data/DataLoader.ts` to import and map your new files.

## Reporting Bugs

If you find a bug open an issue.
Please describe:
*   What you did
*   What happened
*   What you expected to happen
*   Your therapy bill (optional)

## Code Style

*   We use **TypeScript**. Keep it strict.
*   Run `npm run lint` before committing.
*   Don't add dependencies unless absolutely necessary. We like it lightweight.

## Pull Request Process

1.  Fork the repo.
2.  Create a branch (`git checkout -b feature/more-pain`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

I'll review it when I'm not crying over my own dares.
