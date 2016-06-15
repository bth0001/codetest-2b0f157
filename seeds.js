var mongoose = require('mongoose');
var Todo = require('./models/todo');

mongoose.connect('mongodb://localhost/todos');

// the script won't exit until disconnected from db.
function quit() {
  mongoose.disconnect();
  console.log('\nQuitting!')
}

// error handler
function handleError(err) {
  console.log('ERROR:', err);
  quit();
  return err;
}

console.log('removing old todos');
Todo.remove({})
.then(function() {
  console.log('old todos removed');
  console.log('creating some new todos');
  var washTheCar = new Todo({ title: 'wash the car',    completed: false });
  var cleanRoom = new Todo({ title: 'clean room', completed: true  });
  return Todo.create([washTheCar, cleanRoom]);
})
.then(function(savedTodos) {
  console.log('Just saved', savedTodos.length, 'todos.');
  return Todo.find({});
})
.then(function(allTodos) {
  console.log('Printing all todos:');
  allTodos.forEach(function(todo) {
    console.log(todo);
  });
  return Todo.findOne({title: 'wash the car'});
})
.then(function(washTheCar) {
  washTheCar.completed = true;
  return washTheCar.save();
})
.then(function(washTheCar) {
  console.log('updated wash the car:', washTheCar);
  return washTheCar.remove();
})
.then(function(deleted) {
  return Todo.find({});
})
.then(function(allTodos) {
  console.log('Printing all todos:');
  allTodos.forEach(function(todo) {
    console.log(todo);
  });
  quit();
});
