#!/usr/bin/env node
const path = require("path");
const ncp = require("ncp").ncp;
const { spawnSync, exec } = require("child_process");
const cwd = process.cwd();
exec(
  ncp(path.resolve(__dirname, "..") + `/client`, cwd, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("successfully created");
    console.log("installing node_modules...........");
    ls = spawnSync("npm", ["install"]);
    console.log(`stderr: ${ls.stderr.toString()}`);
    console.log(`stdout: ${ls.stdout.toString()}`);
  })
);
