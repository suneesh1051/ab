// "Building" this frontend just means copying the files into dist/,
// the folder that gets uploaded to the cloud later in the course.

const fs = require("node:fs");
const path = require("node:path");

const dist = path.join(__dirname, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, "src"), { recursive: true });

fs.copyFileSync(path.join(__dirname, "index.html"), path.join(dist, "index.html"));
fs.copyFileSync(path.join(__dirname, "src", "greeting.js"), path.join(dist, "src", "greeting.js"));

console.log("Frontend built into dist/");
