import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: NotificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = "";
          if (error.error instanceof ErrorEvent) {
            console.log("Client side error!");
            errorMsg = error.error.message;
          }
          else {
            console.log("Server side error!");
            errorMsg = error.error.message;
          }
          this.notificationService.showError(errorMsg);
          return throwError(errorMsg);
        })
      );
  }
}