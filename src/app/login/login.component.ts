import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpAuthService } from '../http-services/http-auth.service';
import { NotificationService } from '../services/notification.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private loginService: LoginService,
    private httpAuthService: HttpAuthService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void { }

  login(loginValues) {
    this.httpAuthService.login(loginValues).subscribe(loginResult => {
      this.loginService.setUser(loginResult);
      this.notificationService.showSuccess("Login success");
    });
  }
}