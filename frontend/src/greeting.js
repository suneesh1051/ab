// Small helpers used by the web page. Kept separate so they can be tested.

function cleanName(input) {
  const name = String(input || "").trim();
  return name === "" ? "world" : name;
}

function helloUrl(apiBase, name) {
  return `${apiBase}/api/hello?name=${encodeURIComponent(cleanName(name))}`;
}

if (typeof module !== "undefined") {
  module.exports = { cleanName, helloUrl };
}
