import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDTO } from 'src/app/DTO/user.dto';
import { ClearState, SetUser } from '../actions/login.action';
import { LoginState } from '../reducers/login.reducer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _loginStore: Store<LoginState>
  ) { }

  public setUser(userInfo: UserDTO) {
    this._loginStore.dispatch(new SetUser(userInfo));
  }

  public getAuthToken() {
    return this._loginStore.select((state: any) => state.LoginState.SetUser.token);
  }

  public getUserGd() {
    return this._loginStore.select((state: any) => state.LoginState.SetUser.gd);
  }

  public logout() {
    this._loginStore.dispatch(new ClearState());
  }
}
