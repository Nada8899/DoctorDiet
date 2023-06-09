import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AdminRegisterComponent
    
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
