import types from './types';

export function changeTitle(title) {
  return {
    type: types.TITLE_CHANGE,
    payload: title
  };
}
