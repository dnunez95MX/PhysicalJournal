const getDb = require('../utils/database').getDb;

class Entry {
  constructor(weight) {
    this.weight = weight;
  }

  save() {
    const db = getDb();
    db.collection('entries').insertOne(this)
    .then((result) => {
          console.log('Entry saved:', result);
        }
    ).catch((err) => {
      console.error('Error saving entry:', err);
    });
  }
}

module.exports = Entry;
