// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
const {MongoClient, ObjectID} = require('mongodb'); // this is called destructing syntax

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteOne
  // db.collection('Todos').deleteOne({completed: true}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Todos').deleteMany({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    console.log(result);
  });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Todos').findOneAndDelete({
    _id: new ObjectID("5b93e4314d176b901fd0a19f")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  db.close();
});
