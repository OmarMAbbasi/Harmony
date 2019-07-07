import {
ACTION_CONSTANTS
} from 'action_path';

const someReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  return oldState;
//   switch(action.type) {
//     case //SOME_ACTION_CONSTANT	:
//       return newState;
//     default:
//       return oldState;
//   }
};