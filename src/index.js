#!/usr/bin/env node
const path = require("path");
const ncp = require("ncp").ncp;

(() => {
  const cwd = process.cwd();
  ncp(path.resolve(__dirname, "..") + `/client`, cwd, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("successfully created");
    console.log("installing node_modules...........");
    const { spawnSync } = require("child_process"),
      ls = spawnSync("npm", ["install"]);

    console.log(`stderr: ${ls.stderr.toString()}`);
    console.log(`stdout: ${ls.stdout.toString()}`);
  });
})();
