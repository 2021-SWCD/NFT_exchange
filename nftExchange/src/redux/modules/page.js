import { createAction, handleActions} from 'redux-actions';

const SET_PAGE = "SET_PAGE";
export const setPage = createAction(SET_PAGE, (page) => page);


// Initial state
const initialState = () =>{
   return {
    title : "",
    content : "",
    cost : 0,
    imageUrl: "",
   };
}

export default handleActions({
    [SET_PAGE] : (state, action) => {
        return action.payload;
    },
}, initialState());