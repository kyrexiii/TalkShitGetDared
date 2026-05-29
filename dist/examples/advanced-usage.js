"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
console.log('🚀 TalkShitGetDared - Advanced Usage Example');
console.log('-------------------------------------------');
console.log('\n📦 Batch: 3 Unique SFW Truths');
const batch = (0, index_1.getBatch)({
    count: 3,
    type: 'truth',
    mode: 'sfw',
    ensureUnique: true,
});
batch.prompts.forEach((p, i) => {
    console.log(`${i + 1}. ${p.prompt.text} [${p.prompt.category}]`);
});
console.log('\n🚫 History Tracking');
(0, index_1.enableHistory)(true);
console.log('History enabled. Getting 3 prompts...');
const p1 = (0, index_1.getBatch)({ count: 1 }).prompts[0];
const p2 = (0, index_1.getBatch)({ count: 1 }).prompts[0];
const p3 = (0, index_1.getBatch)({ count: 1 }).prompts[0];
console.log(`Generated IDs: ${p1.prompt.id}, ${p2.prompt.id}, ${p3.prompt.id}`);
console.log('Current History:', (0, index_1.getHistory)());
(0, index_1.clearHistory)();
console.log('History cleared.');
console.log('\n📊 Library Stats');
const stats = (0, index_1.getStats)();
console.log(`Total Prompts: ${stats.total}`);
console.log('By Language:', stats.byLanguage);
console.log('By Mode:', stats.byMode);
console.log('By Type:', stats.byType);
console.log('Available Categories:', Object.keys(stats.byCategory).join(', '));
//# sourceMappingURL=advanced-usage.js.map