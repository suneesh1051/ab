// Uses Node's built-in test runner, so there is nothing extra to install.

const test = require("node:test");
const assert = require("node:assert");
const { route } = require("../src/app");

test("health check says ok", () => {
  const res = route("GET", "/api/health");
  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(res.body, { status: "ok" });
});

test("hello greets by name", () => {
  const res = route("GET", "/api/hello?name=Team");
  assert.strictEqual(res.body.message, "Hello, Team!");
});

test("hello falls back to world", () => {
  const res = route("GET", "/api/hello");
  assert.strictEqual(res.body.message, "Hello, world!");
});

test("unknown path is a 404", () => {
  const res = route("GET", "/nope");
  assert.strictEqual(res.status, 404);
});
