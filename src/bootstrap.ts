import { bootstrapApplication } from '@angular/platform-browser';
import { Amplify } from '@aws-amplify/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'eu-central-1_H7mxQtWY8',
      userPoolClientId: '5d8puntt738u8liac3hjr4b4nn',
    },
  },
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
