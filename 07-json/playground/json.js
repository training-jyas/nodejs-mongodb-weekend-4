var obj = {
  name: 'RTST'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var jsonObj = JSON.parse(stringObj);
console.log(typeof jsonObj);
console.log(jsonObj);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
console.log(noteString.title);
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
