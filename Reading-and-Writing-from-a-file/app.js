const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    // res.statusCode(302);
    res.end(`<form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username"/>
                <button type="submit">Add</button>
            </form>`);
  } else {
    if (url === "/message") {
      res.setHeader("Content-Type", "text/html");

      let dataChunks = [];
      req.on("data", (chunks) => {
        // console.log(chunks);
        dataChunks.push(chunks);
      });

      req.on("end", () => {
        let combinedBuffer = Buffer.concat(dataChunks);
        console.log(combinedBuffer.toString());
        let value = combinedBuffer.toString().split("=")[1];
        console.log(value);

        fs.writeFile("text.txt", value, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          res.end();
        });
      });
    } else if (url === "/read") {
      fs.readFile("text.txt", (err, data) => {
        res.end(`<h1>${data.toString()}</h1>`);
      });
    }
  }
});

server.listen(3000, () => {
  console.log(`Server is running...`);
});
