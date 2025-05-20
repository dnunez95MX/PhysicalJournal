const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "entries.json"
);

const getEntriesFromFile = async (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class WeightEntry {
  constructor(weight, date) {
    this.weight = weight;
    this.date = date;
  }

  save() {
    this.id = Math.round(Math.random()).toString();
    getEntriesFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static async fetchAll() {
    return await getEntriesFromFile((entries) => {
      return entries;
    });
  }

  static async findById(id) {
    try {
      let x = await getEntriesFromFile();
      console.log(x);
      let res = await getEntriesFromFile((entries) => {
        console.log(entries);
        return console.log(entries.find((x) => x.id == 3));
        console.log(id);
        //return entries.find((e) => e.id == id);
      });
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
};
