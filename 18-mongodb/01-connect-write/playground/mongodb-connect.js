const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOne({
    text: 'This record is updated now now'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to fetch todo', err);
    }
    console.log(JSON.stringify(result, undefined, 2));
  });

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    // console.log(result);
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insert([{
    name: 'Andrew1',
    age: 25,
    location: 'Philadelphia'
  }, {
    name: 'Andrew2',
    age: 25,
    location: 'Philadelphiadsfds'
  }], (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });

  db.close();
});
