import { UserDTO } from "src/app/DTO/user.dto";
import * as Actions from "../actions/login.action";

export interface LoginState {
    SetUser: UserDTO;
    ClearState: any;
}

export const initialState: LoginState = {
    SetUser: null,
    ClearState: null
}

export const loginReducer = (state = initialState, action: Actions.LoginActions): LoginState => {
    switch (action.type) {
        case Actions.ActionTypes.SetUser:
            return {
                ...state,
                SetUser: action.payload
            }
        case Actions.ActionTypes.ClearState:
            state = null
        default: {
            return state;
        }
    }
}