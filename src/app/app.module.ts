import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'help-plan-ai-123',
        appId: '1:395722538438:web:7ee779d37c11d34a6d86c7',
        storageBucket: 'help-plan-ai-123.appspot.com',
        apiKey: 'AIzaSyCiPQbIwJvjueV3dC_vTNHn5LslNaXu-yY',
        authDomain: 'help-plan-ai-123.firebaseapp.com',
        messagingSenderId: '395722538438',
        measurementId: 'G-8PZJ5TS5LC',
      })
    ),
    provideAuth(() => getAuth()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
