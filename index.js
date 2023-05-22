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
  antares.setAccessKey("2bd7826d64ad2b0b:1fcf0ba1e87c3ad3");
  antares.get("SmartGardening", "SG").then(function (response) {
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);
