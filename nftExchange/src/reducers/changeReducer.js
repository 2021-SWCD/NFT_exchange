import types from '../actions/types';

const titleNum = '';
export default (state = titleNum, action) => {
  switch (action.type) {
    case types.TITLE_CHANGE:
      return (state = action.payload);
/*     case types.CONTENT_CHANGE:
      return (state = action.payload); */
    default:
      return state;
  }
};