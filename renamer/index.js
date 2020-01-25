#!/usr/bin/env node
const fs = require('fs');
const dir = process.cwd();
const temp = fs.readdirSync(dir);

temp.forEach((filename) => {
  if (filename.endsWith('.bp')) {
    const newFileName = filename.replace('.bp','.mp3');
    fs.rename(filename, newFileName, () => {});
  }
});


