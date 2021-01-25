import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    private httpClient: HttpClient
  ) { }
}
