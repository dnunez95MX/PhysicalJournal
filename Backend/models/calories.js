const getDb = require("../utils/database").getDb;

class Calories {
  constructor(calories) {
    this.calories = calories;
  }

  save() {
    const db = getDb();
    db.collection("calories")
      .insertOne(this)
      .then((result) => {
        console.log("Entry saved:", result);
      })
      .catch((err) => {
        console.error("Error saving entry:", err);
      });
  }
}

module.exports = Calories;
