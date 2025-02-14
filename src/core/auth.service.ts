import { Injectable } from '@angular/core';
import { signIn, signOut } from '@aws-amplify/auth';
import { catchError, from, Observable, of, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  signIn(credentials: { email: string; password: string }): Observable<any> {
    return from(
      signIn({
        username: credentials.email,
        password: credentials.password,
      })
    ).pipe(
      switchMap(async (user: any) => {
        if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
          throw new Error('NEW_PASSWORD_REQUIRED');
        } else {
          return of(user);
        }
      }),
      catchError((error: any) => {
        signOut(); // remove local storage because of failed login
        if (error.name === 'UserNotConfirmedException') {
          throw new Error('EMAIL_VALIDATION_REQUIRED');
        }
        throw new Error(error);
      })
    );
  }
}
