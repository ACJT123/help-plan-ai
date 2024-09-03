import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../resuable/button/button.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterModule],
})
export class AuthModule {}
