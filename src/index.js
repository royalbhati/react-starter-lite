#!/usr/bin/env node
const path = require("path");
const ncp = require("ncp").ncp;
const Listr = require("listr");
const { projectInstall } = require("pkg-install");
const chalk = require("chalk");

const copyFiles = async () => {
  const cwd = process.cwd();
  ncp(path.resolve(__dirname, "..") + `/client`, cwd, function(err) {
    if (err) {
      return console.error(err);
    }
    return new Promise((resolve, reject) => {
      resolve(1);
    });
  });
};

const tasks = new Listr([
  {
    title: "Copying project files",
    task: () => copyFiles()
  },
  {
    title: "Installing dependencies",
    task: () => projectInstall()
  }
]);
tasks.run().then(() => {
  console.log("%s Project ready", chalk.green.bold("DONE"));
});
