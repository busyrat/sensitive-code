#! /usr/bin/env node

const execSync = require("child_process").execSync;
const fs = require("fs");
const path = require("path");
const USER_HOME = process.env.HOME || process.env.USERPROFILE;

const cfgPath = path.join(USER_HOME, ".sensicode/config.js");

let words = [];

if (fs.existsSync(cfgPath)) {
  words = require(cfgPath).words || [];
}

const sensiWords = `(${words.join('|')})`;

let results;
try {
  results = execSync(`git grep -n -P "${sensiWords}"`, {
    encoding: "utf-8"
  });
} catch (e) {
  process.exit(0);
}

if (results) {
  console.error("发现敏感词：");
  console.error(results.trim());
  process.exit(1);
}

process.exit(0);
