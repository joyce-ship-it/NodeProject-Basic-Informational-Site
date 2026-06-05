// const http = require("node:http");
// const fs = require("node:fs");
// const createServer = http.createServer;

// const server = createServer((req, res) => {
//   console.log("request made");
//   res.setHeader("Content-Type", "text/html");
//   // res.write("<h1>Hello  node</h1>");

//   // routing

//   let path = "./pages/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact-me":
//       path += "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   // reading the file to get the html to serve to the client
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//       return;
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });

//   console.log("response sent");
// });

// server.listen(3000, "localhost", () => {
//   console.log("server is listening");
// });

const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
// const path = "D:/Node Backend/basic informational site/pages";
// console.log(path);

const options = {
  root: path.join(__dirname, "pages"),
};
function printErr(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("file has been sent");
  }
}
app.get("/", (req, res) =>
  res.sendFile("index.html", options, (err) => {
    printErr(err);
  }),
);
app.get("/about", (req, res) =>
  res.sendFile("about.html", options, (err) => {
    printErr(err);
  }),
);
app.get("/contact", (req, res) =>
  res.sendFile("contact-me.html", options, (err) => {
    printErr(err);
  }),
);

app.get("/404", (req, res) =>
  res.sendFile("/404.html", options, (next) => {
    printErr(next);
  }),
);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My express app is running at PORT: ${PORT}`);
});
