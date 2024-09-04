import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './routes/login/login.module';
import { SignUpModule } from './routes/sign-up/sign-up.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
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
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
