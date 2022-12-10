const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const staticpath = path.join(__dirname, "/");

var antares = require("antares-http");

app.use(express.static(staticpath));

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/index.html");
});

app.get("/api", function (req, res) {
  antares.setAccessKey("31cb746757318d7a:9c147700e89be808");
  antares.get("Innovillage", "AGW").then(function (response) {
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);
