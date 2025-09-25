const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.statusCode(200);
    res.end("<h1>Hello World</h1>");
  } else {
    if (req.url === "/pizza") {
      res.statusCode(200);
      res.end("<h1></h1>");
    } else if (req.url === "/node") {
      res.statusCode(200);
      res.end("<h1></h1>");
    } else {
      res.statusCode(404);
      res.end("<h1>Page not found</h1>");
    }
  }
});

server.listen(3000, () => {
  console.log("Server is listenning on port 3000...");
});
