// Runs the backend on your own computer: npm start, then open
// http://localhost:4000/api/hello?name=Team

const http = require("node:http");
const { route } = require("./app");

const PORT = process.env.PORT || 4000;

http
  .createServer((req, res) => {
    const { status, body } = route(req.method, req.url);
    res.writeHead(status, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(JSON.stringify(body));
  })
  .listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
