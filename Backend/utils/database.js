const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://jdanielnunez95:paulateamo123@clusterdn.3k0tq0f.mongodb.net/physical_tracker?retryWrites=true&w=majority')
    .then(client => {
        console.log(client);
        _db = client.db();
        callback(client);
    })
    .catch(err => console.log(err));
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
