import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

  signInForm = this._formBuilder.group({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
    rememberMe: new FormControl(false),
  });

  alert?: { message: string };
  signedIn: boolean = false;

  signIn(): void {
    // Return if the form is invalid
    if (this.signInForm.invalid) {
      return;
    }
    // Disable the form
    this.signInForm.disable();

    // Hide the alert
    this.alert = undefined;

    // Sign in
    this._authService
      .signIn({
        email: this.signInForm.value.email || '',
        password: this.signInForm.value.password || '',
      })
      .subscribe({
        complete: () => {
          this.signedIn = true;
        },
        error: (error) => {
          console.error(error);
          this.alert = {
            message: 'Wrong email or password',
          };
          this.signInForm.reset();
          this.signInForm.enable();
        },
      });
  }
}
