const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'entries.json'
);

const getEntriesFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class WeightEntry {
  constructor(weight) {
    this.weight = weight;
  }

  save() {
    this.id = Math.random().toString();
    getEntriesFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static async fetchAll(cb) {
    return await getEntriesFromFile(cb);
  }

  static findById(id) {
    return getEntriesFromFile(entries => {
        return entries.find(e => e.id == id);
    });
  }
};
