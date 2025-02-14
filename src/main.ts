import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from 'aws-amplify';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'eu-central-1_H7mxQtWY8',
      userPoolClientId: '5d8puntt738u8liac3hjr4b4nn',
      //   signUpVerificationMethod: 'code',
      //   loginWith: {
      //     email: true,
      //   },
      //   userAttributes: {
      //     email: { required: true },
      //   },
      //   passwordFormat: {
      //     minLength: 8,
      //     requireLowercase: true,
      //     requireUppercase: true,
      //     requireNumbers: true,
      //     requireSpecialCharacters: true,
      //   },
    },
  },
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
