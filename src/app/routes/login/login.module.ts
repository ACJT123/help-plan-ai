import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent], // Declare LoginComponent here
  imports: [SharedModule],
})
export class LoginModule {}
