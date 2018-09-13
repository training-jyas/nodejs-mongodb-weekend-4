// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5b94cf3289e8dfb58246233f")
  }, {
    $set: {
      completed: true,
      text: 'This record is updated now now'
    }
  }, {
    returnOriginal: true
  })
  .then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b94c86f7ba3fe5159cbe473")
  }, {
    $set: {
      name: 'RTST'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.close();

});
