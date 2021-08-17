import types from './types';

export function changeNum(num) {
  return {
    type: types.NUM_CHANGE,
    payload: num
  };
}
