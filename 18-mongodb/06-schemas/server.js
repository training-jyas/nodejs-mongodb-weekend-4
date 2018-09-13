var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var otherTodo = new Todo({
  text: 'Something to do'
});

otherTodo.save()
.then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
  mongoose.disconnect();
}, (e) => {
  console.log('Unable to save', e);
  mongoose.disconnect();
});

// User
// email - require it - trim it - set type - set min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  },
  name: {
    type: String
  }
});

var user = new User({
  email: 'jyasveer@example.com   ',
  name: 'jyasveer'
});

user.save().then((doc) => {
  console.log('User saved', doc);
  mongoose.disconnect();
}, (e) => {
  console.log('Unable to save user', e);
  mongoose.disconnect();
});
