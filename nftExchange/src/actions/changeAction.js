import types from './types';

export function changeTitle(title) {
  return {
    type: types.TITLE_CHANGE,
    payload: title
  };
}

export function changeContent(content) {
  return {
    type: types.CONTENT_CHANGE,
    payload: content
  };
}