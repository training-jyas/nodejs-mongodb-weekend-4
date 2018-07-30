console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
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

var updateNote = (title, body) => {
  console.log('Updating note', title, body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  updateNote
};
