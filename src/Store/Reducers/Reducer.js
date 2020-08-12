import Data from '../../Asset/data/data';
import * as ActionTypes from '../Action/Action';

const iState = {
    list: Data,
    loginData: [{ name: 'Admin', password: '12345', email: 'abc@gmail.com', city: 'xyz city' }],
    isSignedIn: false,
    isAdmin: false,
};

const reducer = (state = iState, action) => {

    switch (action.type) {

        case ActionTypes.signInFun:
            return {
                "loginData": state.loginData,
                "list": state.list,
                "isSignedIn": action.payload.isSignedIn,
                "isAdmin": state.isAdmin
            }
        case ActionTypes.adminLogin:
            return {
                "loginData": state.loginData,
                "list": state.list,
                "isSignedIn": state.isSignedIn,
                "isAdmin": action.payload.isAdmin
            }
        case ActionTypes.createUser:
            const n = { "name": action.payload.name, "password": action.payload.password, "email": action.payload.email, "city": action.payload.city }
            return {
                "loginData": [...state.loginData, n],
                "list": state.list,
                "isSignedIn": state.isSignedIn,
                "isAdmin": state.isAdmin
            }
        default:
            return state;
    }
}

export default reducer;