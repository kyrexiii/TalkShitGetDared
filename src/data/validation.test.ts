import fs from 'fs';
import path from 'path';

describe('Prompt Data Validation', () => {
  const LANG_DIR = path.join(__dirname, 'lang');

  // Verify the directory exists
  if (!fs.existsSync(LANG_DIR)) {
    console.warn(`Language directory not found at ${LANG_DIR}`);
    return;
  }

  const languages = fs.readdirSync(LANG_DIR).filter(file => {
    return fs.statSync(path.join(LANG_DIR, file)).isDirectory();
  });

  languages.forEach(lang => {
    describe(`Language: ${lang}`, () => {
      const modes = ['sfw', 'nsfw'];

      modes.forEach(mode => {
        const modePath = path.join(LANG_DIR, lang, mode);
        
        if (fs.existsSync(modePath)) {
          describe(`Mode: ${mode}`, () => {
            const types = ['truth', 'dare'];

            types.forEach(type => {
              const typePath = path.join(modePath, `${type}.ts`);
              
              if (fs.existsSync(typePath)) {
                it(`should have valid ${type} prompts`, () => {
                  // Dynamically require the prompt file
                  // Since we are running in tests (ts-jest), we can require .ts files directly
                  const module = require(typePath);
                  
                  // Convention in this codebase is truthPrompts and darePrompts
                  const promptsArray = type === 'truth' ? module.truthPrompts : module.darePrompts;

                  expect(promptsArray).toBeDefined();
                  expect(Array.isArray(promptsArray)).toBe(true);
                  expect(promptsArray.length).toBeGreaterThan(0);

                  promptsArray.forEach((prompt: any) => {
                    // Check required fields
                    expect(prompt.id).toBeDefined();
                    expect(typeof prompt.id).toBe('string');
                    expect(prompt.id.length).toBeGreaterThan(0);

                    expect(prompt.text).toBeDefined();
                    expect(typeof prompt.text).toBe('string');
                    expect(prompt.text.length).toBeGreaterThan(0);

                    expect(prompt.contributor).toBeDefined();
                    expect(typeof prompt.contributor).toBe('string');
                    expect(prompt.contributor.length).toBeGreaterThan(0);

                    expect(prompt.difficulty).toBeDefined();
                    expect(['easy', 'medium', 'hard', 'extreme']).toContain(prompt.difficulty);

                    expect(prompt.category).toBeDefined();
                    expect([
                      'personal', 'embarrassing', 'relationships', 
                      'funny', 'physical', 'social', 'intimate', 'confession'
                    ]).toContain(prompt.category);
                  });
                });
              }
            });
          });
        }
      });
    });
  });
});
