import pmongo from 'promised-mongo';

let MONGODB_URI = 'reduxtest';

if (process.env.MONGODB_URI) MONGODB_URI = process.env.MONGODB_URI;

const db = pmongo(MONGODB_URI, {
  authMechanism: 'ScramSHA1'
}, ['todos'], ['pets']);

export function getTodo(_id) {
  return db.todos.findOne({ _id: pmongo.ObjectId(_id) });
}

export function getPet(_id) {
  return db.pets.findOne({ _id: pmongo.ObjectId(_id) });
}

export function getTodos() {
  return db.todos.find({});
}

export function getPets() {
  return db.pets.find({});
}

export function createTodo(todo) {
  if (!todo) {
    return new Promise((resolve, reject) => {
      reject(`"todo" cannot be empty`);
    });
  }

  return db.todos.insert({ todo, completed: false });
}

export function createPet(pet) {
  if (!pet) {
    return new Promise((resolve, reject) => {
      reject(`"pet" cannot be empty`);
    });
  }

  return db.pets.insert({ pet, completed: false });
}

export function removeTodo(_id) {
  return db.todos.remove({ _id: pmongo.ObjectId(_id) })
                 .then(() => {
                    return { _id: _id };
                 });
}

export function removePet(_id) {
  return db.pets.remove({ _id: pmongo.ObjectId(_id) })
                 .then(() => {
                    return { _id: _id };
                 });
}


export function updateTodo(_id, todo, completed) {
  let todoItem = {
    todo, completed
  };

  if (!_id) return new Promise((resolve, reject) => {
    reject(`"_id" required to update Todo Item\n`);
  });

  if (!todo) delete todoItem.todo;
  if (typeof completed !== 'boolean') delete todoItem.completed;

  return db.todos.findAndModify({
            new: true, // return the newly modified document
            query: { _id: pmongo.ObjectId(_id) },
            update: { $set: todoItem } }).then(({ value }) => value);
}

export function updatePet(_id, pet, completed) {
  let petItem = {
    pet, completed
  };

  if (!_id) return new Promise((resolve, reject) => {
    reject(`"_id" required to update Pet Item\n`);
  });

  if (!pet) delete petItem.pet;
  if (typeof completed !== 'boolean') delete petItem.completed;

  return db.pets.findAndModify({
            new: true, // return the newly modified document
            query: { _id: pmongo.ObjectId(_id) },
            update: { $set: petItem } }).then(({ value }) => value);
}

