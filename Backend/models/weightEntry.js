const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "entries.json"
);

const getEntriesFromFile = (cb) => {
  let data = fs.readFileSync(p, (err) => {
    if (err) {
      console.log(err);
    }
  }
  );
  if (data.length === 0) {  // Check if the file is empty
    cb([]);  
  }
  cb(JSON.parse(data));
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
    return await new Promise((resolve) => { 
      getEntriesFromFile((entries) => {
        resolve(entries);
      });
     });
  }

  static async findById(id) {
    try {
      return await new Promise((resolve) => {
        getEntriesFromFile((entries) => {
          let foundEntry = entries.find(e => e.id == id);
          resolve(foundEntry);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
