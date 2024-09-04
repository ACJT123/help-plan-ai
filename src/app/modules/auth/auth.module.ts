import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/button/button.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginModule } from '../../routes/login/login.module';
import { SignUpModule } from '../../routes/sign-up/sign-up.module';

@NgModule({
  declarations: [],
  imports: [AuthRoutingModule],
})
export class AuthModule {}
