const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const cursedMessages = [
    "⚠️ build has stopped working... just kidding. It's done, loser.",
];

// Clean dist before building to prevent stale files
const distPath = path.join(__dirname, "..", "dist");
if (fs.existsSync(distPath)) {
    fs.rmSync(distPath, { recursive: true, force: true });
}

exec("tsc", (err, stdout, stderr) => {
    if (err) {
        console.error("❌ Build failed:\n");
        console.error(err.stack);
        process.exit(1);
    } else {
        const message = cursedMessages[Math.floor(Math.random() * cursedMessages.length)];
        console.log(`\n${message}`);
    }
});
