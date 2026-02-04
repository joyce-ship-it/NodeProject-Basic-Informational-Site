const http = require("node:http");
const fs = require("node:fs");
const createServer = http.createServer;

const server = createServer((req, res) => {
  console.log("request made");
  res.setHeader("Content-Type", "text/html");
  // res.write("<h1>Hello  node</h1>");

  // routing

  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // reading the file to get the html to serve to the client
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
      return;
    } else {
      res.write(data);
      res.end();
    }
  });

  console.log("response sent");
});

server.listen(3000, "localhost", () => {
  console.log("server is listening");
});
