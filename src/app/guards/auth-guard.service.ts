import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpAuthService } from '../http-services/http-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private httpAuthService: HttpAuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.httpAuthService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
