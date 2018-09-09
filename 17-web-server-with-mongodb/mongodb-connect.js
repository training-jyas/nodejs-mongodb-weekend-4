const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';
MongoClient.connect(url, (err, client) => {
    // Use the admin database for the operation
    const adminDb = client.db(dbName).admin();

    adminDb.listDatabases((error, dbs) => {
        console.log(dbs);
    });
});

// name: string;
//   price: number;
//   description: string;
//   id: string;
//   image: string;
//   isAvailable: boolean;
//   isAdded: boolean;