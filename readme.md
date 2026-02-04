# How to run

run node index.js and open localhost:3000 to see the html pages.

# About

This project shows how to create an http server and serve html pages for the client (browser). The html files are created and placed in the pages folder. We create an http server by creating a http server with the help of the createServer function from Node's http module. One a request come, the callback function gets executed.

The server is made to listen to the port 3000 with the domain being localhost aka loopback address which means the website is hosted on your own computer.

The request object's url is used to find what webpage the user wants to see. Based on the url, we define a switch statement that restructures the path and adds a status code to the result object. We also set the return type of the response object with setHeader.

The fs module is then used to read the files from the path and then write them to the response object. The data is sent only after res.end() is executed.

![screenshot of UI](image.png)
