import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/component/login/login.component';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './resuable/button/button.component';
import { SignUpComponent } from './auth/component/sign-up/sign-up.component';
import { LinkComponent } from './resuable/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ButtonComponent,
    LinkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, ReactiveFormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
