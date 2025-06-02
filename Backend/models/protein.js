class Protein {
  constructor(protein) {
    this.protein = protein;
  }

  save() {
    const db = getDb();
    db.collection("protein")
      .insertOne(this)
      .then((result) => {
        console.log("Entry saved:", result);
      })
      .catch((err) => {
        console.error("Error saving entry:", err);
      });
  }
}

module.exports = Protein;
