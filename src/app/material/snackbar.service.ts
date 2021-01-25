import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackbar: MatSnackBar) { }

  // Display a snackbar message at the bottom of the screen
  public showMessage(message: string, close: string) {
    if (message != null) {
      this.snackbar.open(message, close, {
        duration: 5000
      });
    }
  }
}
