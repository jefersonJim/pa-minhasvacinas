import {
  ALL_PETS,
  EDIT_PET,
  REMOVE_PET,
  SINGLE_PET,
  CREATE_PET,
} from '../actions/actionTypes';

function getIndexOfPetItem(action, state) {
  let index = -1, data = action.result;

  for (let i = 0; i < state.result.length; i++) {
	if (state.result[i]._id === data._id) {
	  index = i;
	  break;
	}
  }

  return index;
}

function pets(state = [], action) {
  if (action.error) {
	return {
	  result: state.result,
	  error: action.error,
	};
  }

  switch(action.type) {
	case SINGLE_PET:
	case ALL_PETS:
	  return {
		result: action.result
	  };
	case CREATE_PET:
	  return {
		result: [
		  ...state.result,
		  action.result,
		]
	  };
	case EDIT_PET:
	  var index = getIndexOfPetItem(action, state);

	  // todo item not found in state object so return original state
	  if (index === -1) return state;

	  // todo item found! return new state
	  return {
		result: [
		  ...state.result.slice(0, index),
		  Object.assign({}, state.result[index], action.result),
		  ...state.result.slice(index + 1)
		]
	  };
	case REMOVE_PET:
	  var index = getIndexOfPetItem(action, state);

	  // todo item not found in state object so return original state
	  if (index === -1) return state;

	  // todo item found! don't include it in the new state
	  return {
		result: [
		  ...state.result.slice(0, index),
		  ...state.result.slice(index + 1)
		],
	  };
	default:
	  return state;
  }
}

module.exports = {
  pets,
};