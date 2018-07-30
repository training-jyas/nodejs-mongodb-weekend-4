console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  console.log('note to push :', note);
  try {
    var notesString = fs.readFileSync('notes-data.json');
    console.log('notesString :', notesString);
    notes = JSON.parse(notesString);
    console.log('notes array :', notes);
  } catch (e) {

  }

  var duplicateNotes = notes.filter(
    (note) => {
      return note.title === title
    }
  );
  console.log('duplicate notes :', duplicateNotes);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};