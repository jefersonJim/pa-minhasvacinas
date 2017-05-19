import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLID
} from 'graphql';

import {
  getTodo,
  getTodos,
  createTodo,
  updateTodo,
  removeTodo,
  getPet,
  getPets,
  createPet,
  updatePet,
  removePet,
} from './database';

const todoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    _id: {
      type: GraphQLString,
      resolve: ({ _id }) => _id,
    },
    todo: {
      type: GraphQLString,
      resolve: ({ todo }) => todo,
    },
    completed: {
      type: GraphQLBoolean,
      resolve: ({ completed }) => completed
    }
  })
});

const petType = new GraphQLObjectType({
  name: 'Pet',
  fields: () => ({
    _id: {
      type: GraphQLString,
      resolve: ({ _id }) => _id,
    },
    todo: {
      type: GraphQLString,
      resolve: ({ pet }) => pet,
    },
    completed: {
      type: GraphQLBoolean,
      resolve: ({ completed }) => completed
    }
  })
});

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    todo: {
      type: todoType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { _id }) => getTodo(_id),
    },
    pet: {
      type: petType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { _id }) => getPet(_id),
    },
    todos: {
      type: new GraphQLList(todoType),
      resolve: () => getTodos(),
    },
    pets: {
      type: new GraphQLList(petType),
      resolve: () => getPets(),
    }, 
  })
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createTodo: {
      type: todoType,
      args: {
        todo: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { todo }) => createTodo(todo),
    },
    createPet: {
      type: petType,
      args: {
        pet: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { pet }) => createPet(pet),
    },
    updateTodo: {
      type: todoType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        todo: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, { _id, todo, completed }) =>
                  updateTodo(_id, todo, completed),
    },
    updatePet: {
      type: petType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
        pet: { type: GraphQLString },
        completed: { type: GraphQLBoolean },
      },
      resolve: (_, { _id, pet, completed }) =>
                  updatePet(_id, pet, completed),
    },
    removeTodo: {
      type: todoType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { _id }) => removeTodo(_id),
    },
    removePet: {
      type: petType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (_, { _id }) => removePet(_id),
    }
  })
});

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});
