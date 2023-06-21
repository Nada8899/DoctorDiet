import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowYourDocComponent } from './know-your-doc/know-your-doc.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DoctorRoutingModule } from './doctor-routing.module';
import { SubscrebtionComponent } from './subscrebtion/subscrebtion.component';
import { PatientFollowUpComponent } from './patient-follow-up/patient-follow-up.component';
import { AddDayComponent } from './add-day/add-day.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { MainComponent } from './main/main.component';
import { MealsComponent } from './meals/meals.component';
import { PlansComponent } from './plans/plans.component';
import { PlanDashComponent } from './plan-dash/plan-dash.component';
import { TodayMealsComponent } from './today-meals/today-meals.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
 
    KnowYourDocComponent,
    SubscrebtionComponent,
    PatientFollowUpComponent,
    AddDayComponent,
    AddMealComponent,
    AddPlanComponent,
    MainComponent,
    MealsComponent,
    PlansComponent,
    PlanDashComponent,
    TodayMealsComponent,
    WelcomeComponent,
    PatientDetailsComponent,
    ProfileComponent
  ],
  imports: [
    DoctorRoutingModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class DoctorModule { }
