import { createAction, handleActions} from 'redux-actions';


const SET_LANGUAGE = "SET_LANGUAGE";
export const setLanguage = createAction(SET_LANGUAGE, (value: languageType) => value);


// Initial state
const initialState = () =>{
   return "ko";

}

export default handleActions({
    [SET_LANGUAGE] : (state, action) => {
        return action.payload
    },
}, initialState());


type languageType = "ko" | "en" | "jp"