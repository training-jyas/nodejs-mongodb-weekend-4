console.log('Starting app.js');

const fs = require('fs');
const os = require('os');

const notes = require('./notes.js');

console.log('notes', notes);
console.log(notes.addNote());
console.log('Result =', notes.add(9, -2));
console.log('Result:', notes.sub(9, -2));

const platform = os.platform();
console.log(`os platform is ${platform}`);
let user = os.userInfo();
console.log('user', user);

console.log('append file start!');
fs.appendFile('greetings.txt', 'Hello ' + user.username + '! You are ' + notes.age, () => {console.log('file is modified in async way!')});
console.log('append file ends!');

console.log('append file sync start!');
fs.appendFileSync('greetings-sync.txt', `Hello ${user.username}! You are ${notes.age}.`);
console.log('append file sync end!');
