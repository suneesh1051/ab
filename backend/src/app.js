// The whole backend lives in one small function so it is easy to test
// and, later in the course, easy to run inside AWS Lambda.

function route(method, url) {
  const { pathname, searchParams } = new URL(url, "http://localhost");

  if (method === "GET" && pathname === "/api/health") {
    return { status: 200, body: { status: "ok" } };
  }

  if (method === "GET" && pathname === "/api/hello") {
    const name = (searchParams.get("name") || "").trim() || "world";
    return { status: 200, body: { message: `Hello, ${name}!` } };
  }

  return { status: 404, body: { error: "Not found" } };
}

module.exports = { route };
