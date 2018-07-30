console.log('Starting notes.js');

const addNote = () => {
  console.log('addNote');
  return 'New note';
};

const add = (a, b) => {
  return a + b;
};

const sub = () => {
  console.log('sub method called !');
};

const nm = 'RTST';

module.exports.addNote = addNote;
module.exports.add = add;
module.exports.sub = sub;
module.exports.age = 30;
