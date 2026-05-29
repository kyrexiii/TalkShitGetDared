import fs from 'fs';
import path from 'path';

const LANG_DIR = path.join(__dirname, '../src/data/lang');
const TYPES_FILE = path.join(__dirname, '../src/lib/types/index.ts');
const LOADER_FILE = path.join(__dirname, '../src/lib/data/DataLoader.ts');

function toPascalCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function extractMarkerFromFile(filePath: string): string {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const match = fileContent.match(
    /id:\s*['"]([a-z]{2,})_(sfw|nsfw)_[td]\d+['"]/i,
  );

  

  if (!match) {
    throw new Error(
      `Could not extract language marker from ${filePath}. ` +
        `Expected an id like 'hn_sfw_t001' or 'en_nsfw_d004'.`,
    );
  }

  return match[1].toLowerCase();
}

function generateDataExports() {
  if (!fs.existsSync(LANG_DIR)) {
    console.warn(`Directory not found: ${LANG_DIR}`);
    return;
  }

  const languages = fs
    .readdirSync(LANG_DIR)
    .filter(file => fs.statSync(path.join(LANG_DIR, file)).isDirectory())
    .sort();

  if (languages.length === 0) {
    console.warn(`No languages found in ${LANG_DIR}`);
    return;
  }

  updateTypesFile(languages);
  updateDataLoaderFile(languages);
}

function updateTypesFile(languages: string[]) {
  const content = fs.readFileSync(TYPES_FILE, 'utf8');
  const langUnion = languages.map(lang => `'${lang}'`).join(' | ');

  const updatedContent = content.replace(
    /export type Language = .*?;/,
    `export type Language = ${langUnion};`,
  );

  if (content !== updatedContent) {
    fs.writeFileSync(TYPES_FILE, updatedContent, 'utf8');
    console.log('✅ Updated Language type in types/index.ts');
  }
}

function updateDataLoaderFile(languages: string[]) {
  let content = fs.readFileSync(LOADER_FILE, 'utf8');

  const imports: string[] = [];
  const mapEntries: string[] = [];

  languages.forEach(lang => {
    const langPath = path.join(LANG_DIR, lang);
    const modes = ['sfw', 'nsfw'] as const;
    const types = ['truth', 'dare'] as const;

    modes.forEach(mode => {
      const modePath = path.join(langPath, mode);
      if (!fs.existsSync(modePath)) return;

      types.forEach(type => {
        const typePath = path.join(modePath, `${type}.ts`);
        if (!fs.existsSync(typePath)) return;

        const marker = extractMarkerFromFile(typePath);
        const alias = `${marker}${toPascalCase(mode)}${toPascalCase(type)}`;

        imports.push(
          `import * as ${alias} from '../../data/lang/${lang}/${mode}/${type}';`,
        );
        mapEntries.push(
          `      ['${lang}_${mode}_${type}', ${alias}.${type}Prompts],`,
        );
      });
    });
  });

  const importSectionRegex =
    /\/\/ Direct imports of all data modules[\s\S]*?(?=\/\*\*)/;

  const newImportSection =
    `// Direct imports of all data modules\n${imports.join('\n')}\n\n`;

  if (!importSectionRegex.test(content)) {
    throw new Error('Could not locate import section in DataLoader.ts');
  }

  content = content.replace(importSectionRegex, newImportSection);

  const mapSectionRegex = /this\.dataMap = new Map\(\[[\s\S]*?\]\);/;

  const newMapSection =
    `this.dataMap = new Map([\n${mapEntries.join('\n')}\n    ]);`;

  if (!mapSectionRegex.test(content)) {
    throw new Error('Could not locate dataMap section in DataLoader.ts');
  }

  content = content.replace(mapSectionRegex, newMapSection);

  fs.writeFileSync(LOADER_FILE, content, 'utf8');
  console.log('✅ Updated DataLoader.ts with dynamic imports');
}

try {
  generateDataExports();
} catch (error) {
  console.error('Failed to generate data exports:', error);
  process.exit(1);
}