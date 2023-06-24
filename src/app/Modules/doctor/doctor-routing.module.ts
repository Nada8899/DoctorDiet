import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDoctorsComponent } from '../home/show-doctors/show-doctors.component';
import { KnowYourDocComponent } from './know-your-doc/know-your-doc.component';
import { MainComponent } from './main/main.component';
import { MealsComponent } from './meals/meals.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { AddDayComponent } from './add-day/add-day.component';
import { PlansComponent } from './plans/plans.component';
import { TodayMealsComponent } from './today-meals/today-meals.component';
import { PlanDashComponent } from './plan-dash/plan-dash.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientFollowUpComponent } from './patient-follow-up/patient-follow-up.component';
import { SubscrebtionComponent } from './subscrebtion/subscrebtion.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ProfileComponent } from './profile/profile.component';
import { NotesComponent } from './notes/notes.component';




const routes: Routes = [


  { path: 'KnowDoctor/:id', component: KnowYourDocComponent },
  { path: 'Profile', component: ProfileComponent },
  {
    path: 'dash', component: MainComponent,

    children: [
      { path: 'meals', component: MealsComponent },
      { path: 'AddPlan', component: AddPlanComponent },
      { path: 'AddMeal', component: AddMealComponent },
      { path: 'AddDay', component: AddDayComponent },
      { path: 'Plans', component: PlansComponent },
      { path: 'TodayMeal/:id', component: TodayMealsComponent },
      { path: "Plan/:id", component: PlanDashComponent },
      { path: "Welcome", component: WelcomeComponent },
      { path: "Patients", component: PatientFollowUpComponent },
      { path: "Subscrebtion", component: SubscrebtionComponent },
      {path: "PatienDe",component: PatientDetailsComponent},
      {path: "Notes",component:  NotesComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
