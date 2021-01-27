import { Action } from "@ngrx/store";
import { UserDTO } from "src/app/DTO/user.dto";


export enum ActionTypes {
    SetUser = "[LoginState] SetUser",
    ClearState = "[LoginState] ClearState"
}

export class SetUser implements Action {
    readonly type = ActionTypes.SetUser;
    constructor(public payload: UserDTO) { }
}

export class ClearState implements Action {
    readonly type = ActionTypes.ClearState;
}

export type LoginActions = SetUser | ClearState;