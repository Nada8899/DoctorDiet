import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PlanComponent } from './plan/plan.component';
import { UserRoutingModule } from './User-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    PlanComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
