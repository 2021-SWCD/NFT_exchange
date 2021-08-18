import { createAction, handleActions} from 'redux-actions';


const SET_TOKEN_INFO = 'SET_TOKEN_INFO';
export const setTokenInfo = createAction(SET_TOKEN_INFO, (value: setTokenInfoParam) => value);


// Initial state
const initialState = () =>{
   return { 
       accessToken : '',
       refreshToken: '',
    };
}

export default handleActions({
    [SET_TOKEN_INFO] : (state, action) => {
        return action.payload
    },
}, initialState());


type setTokenInfoParam = {
    accessToken: string,
    refreshToken: string,
}