import fs from 'fs';
import path from 'path';

const LANG_DIR = path.join(__dirname, '../src/data/lang');
const TYPES_FILE = path.join(__dirname, '../src/lib/types/index.ts');
const LOADER_FILE = path.join(__dirname, '../src/lib/data/DataLoader.ts');

function generateDataExports() {
  if (!fs.existsSync(LANG_DIR)) {
    console.warn(`Directory not found: ${LANG_DIR}`);
    return;
  }

  const languages = fs.readdirSync(LANG_DIR).filter(file => {
    return fs.statSync(path.join(LANG_DIR, file)).isDirectory();
  });

  if (languages.length === 0) {
    console.warn(`No languages found in ${LANG_DIR}`);
    return;
  }

  // 1. Update Language type in src/lib/types/index.ts
  updateTypesFile(languages);

  // 2. Update DataLoader.ts
  updateDataLoaderFile(languages);
}

function updateTypesFile(languages: string[]) {
  const content = fs.readFileSync(TYPES_FILE, 'utf8');
  const langUnion = languages.map(lang => `'${lang}'`).join(' | ');
  
  // Replace the export type Language = ...
  const updatedContent = content.replace(
    /export type Language = .*?;/,
    `export type Language = ${langUnion};`
  );

  if (content !== updatedContent) {
    fs.writeFileSync(TYPES_FILE, updatedContent, 'utf8');
    console.log(`✅ Updated Language type in types/index.ts`);
  }
}

function updateDataLoaderFile(languages: string[]) {
  let content = fs.readFileSync(LOADER_FILE, 'utf8');

  // Collect all imports and data map entries
  const imports: string[] = [];
  const mapEntries: string[] = [];

  languages.forEach(lang => {
    const langPath = path.join(LANG_DIR, lang);
    const modes = ['sfw', 'nsfw'];
    
    modes.forEach(mode => {
      const modePath = path.join(langPath, mode);
      if (fs.existsSync(modePath)) {
        const types = ['truth', 'dare'];
        types.forEach(type => {
          const typePath = path.join(modePath, `${type}.ts`);
          if (fs.existsSync(typePath)) {
            // Generate alias like enSfwTruth
            const alias = `${lang.substring(0, 2)}${mode.charAt(0).toUpperCase() + mode.slice(1)}${type.charAt(0).toUpperCase() + type.slice(1)}`;
            imports.push(`import * as ${alias} from '../../data/lang/${lang}/${mode}/${type}';`);
            mapEntries.push(`      ['${lang}_${mode}_${type}', ${alias}.${type}Prompts],`);
          }
        });
      }
    });
  });

  // Replace imports section
  const importSectionRegex = /\/\/ Direct imports of all data modules[\s\S]*?(?=\/\*\*|\n\n)/;
  const newImportSection = `// Direct imports of all data modules\n${imports.join('\n')}\n`;
  content = content.replace(importSectionRegex, newImportSection);

  // Replace dataMap section inside constructor
  const mapSectionRegex = /this\.dataMap = new Map\(\[[\s\S]*?\]\);/;
  const newMapSection = `this.dataMap = new Map([\n${mapEntries.join('\n')}\n    ]);`;
  content = content.replace(mapSectionRegex, newMapSection);

  fs.writeFileSync(LOADER_FILE, content, 'utf8');
  console.log(`✅ Updated DataLoader.ts with dynamic imports`);
}

try {
  generateDataExports();
} catch (error) {
  console.error("Failed to generate data exports:", error);
  process.exit(1);
}
