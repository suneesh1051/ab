const test = require("node:test");
const assert = require("node:assert");
const { cleanName, helloUrl } = require("../src/greeting");

test("empty name becomes world", () => {
  assert.strictEqual(cleanName("   "), "world");
});

test("name is trimmed", () => {
  assert.strictEqual(cleanName("  Team "), "Team");
});

test("url encodes the name", () => {
  assert.strictEqual(
    helloUrl("http://localhost:4000", "A & B"),
    "http://localhost:4000/api/hello?name=A%20%26%20B"
  );
});
