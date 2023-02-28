const { access } = require("fs/promises");
const { constants } = require("fs");
const path = require("path");
const express = require("express");
const history = require('connect-history-api-fallback');

const distPath = path.resolve(__dirname, "../dist");
const siteHost = "localhost";
const sitePort = 3333;

const canAccessDistPath = async () => {
  try {
    await access(distPath, constants.R_OK);
    return true;
  } catch (e) {
    console.log("can't not access dist: " + e);
    return false;
  }
};

const startSite = () => {
  const app = express();
  app.use(history({
    index: '/index.html'
  }));
  app.use(express.static(distPath));
  app.listen(sitePort, siteHost, function () {
    console.log(`Your preview site: http://${siteHost}:${sitePort}`);
  });
};

const main = async () => {
  if (await canAccessDistPath()) startSite();
};

main();
