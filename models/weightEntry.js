const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path')

const pathToFileOrDir = path.join(
    rootDir,
    'data',
    'entries.json'
);

var dir = path.join(rootDir, 'data');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

if (fs.existsSync(pathToFileOrDir)) {
    console.log(`The file or directory at '${pathToFileOrDir}' exists.`);
  } else {
    console.log(`The file or directory at '${pathToFileOrDir}' does not exist.`);
  }

const getEntriesFromFile = cb => {
    
      fs.readFile(pathToFileOrDir, (err, fileContent) => {
        if(err) cb([]);

        cb(JSON.parse(fileContent)) ;
      })
}

//to replace
const weightEntries = [];

module.exports = class WeightEntry {
    constructor(weight) {
        this.WeightEntry = weight;
    }

    save() {

        getEntriesFromFile = (entries => {
            entries.push(this);
            fs.writeFile(pathToFileOrDir, JSON.stringify(entries), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getEntriesFromFile(cb);
    }
}