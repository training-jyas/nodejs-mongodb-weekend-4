console.log('Starting app.js');

// const notes = require('./notes.js');

// console.log('process', process);
console.log('arguments', process.argv);
var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
  console.log('add a note');
} else if (command === 'list') {
  console.log('list all notes');
} else if (command === 'get') {
  console.log('get a note');
} else if (command === 'delete') {
  console.log('delete a note');
} else if (command === 'update') {
  console.log('update a note');
} else {
  console.log('command not found');
}