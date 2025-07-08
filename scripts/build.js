const { exec } = require("child_process");

const cursedMessages = [
    "⚠️ build has stopped working... just kidding. It's done, loser.",
];

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
