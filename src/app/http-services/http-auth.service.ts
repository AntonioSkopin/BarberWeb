import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { UserDTO } from '../DTO/user.dto';
import { LoginService } from '../login/services/login.service';
import { AuthenticateModel } from '../models/authenticate.model';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthService {

  private apiUrl = "https://localhost:44386/api/Auth/";

  // Headers for request
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private loginService: LoginService
  ) { }

  isAuthenticated(): boolean {
    let token;

    // Obtain user token
    this.loginService.getAuthToken().subscribe(userToken => {
      token = userToken;
    });

    return !this.jwtHelperService.isTokenExpired(token);
  }

  login(authenticateModel: AuthenticateModel): Observable<UserDTO> {
    return this.httpClient.post<UserDTO>(this.apiUrl + "Authenticate", authenticateModel, this.httpOptions);
  }
}