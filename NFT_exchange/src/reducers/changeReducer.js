import types from '../actions/types';

const count = 0;
export default (state = count, action) => {
  switch (action.type) {
    case types.NUM_CHANGE:
        return state = action.payload;
    default:
      return state;
  }
};