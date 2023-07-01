import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowYourDocComponent } from './know-your-doc/know-your-doc.component';
import { MainComponent } from './main/main.component';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { AddMealComponent } from './add-meal/add-meal.component';

import { PlansComponent } from './plans/plans.component';
import { TodayMealsComponent } from './today-meals/today-meals.component';
import { PlanDashComponent } from './plan-dash/plan-dash.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PatientFollowUpComponent } from './patient-follow-up/patient-follow-up.component';
import { SubscrebtionComponent } from './subscrebtion/subscrebtion.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { ProfileComponent } from './profile/profile.component';
<<<<<<< HEAD
import { EditCustomPlanComponent } from './edit-custom-plan/edit-custom-plan.component';
import { NotesComponent } from '../user/notes/notes.component';
import { CustomPlanDayComponent } from './custom-plan-day/custom-plan-day.component';
import { CustomPlanDayMealsComponent } from './custom-plan-day-meals/custom-plan-day-meals.component';
=======
import { NotesComponent } from './notes/notes.component';


>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6


const routes: Routes = [


  { path: 'KnowDoctor/:id', component: KnowYourDocComponent },
  { path: 'Profile', component: ProfileComponent },
  {
    path: 'dash', component: MainComponent,

    children: [
      { path: 'AddPlan', component: AddPlanComponent },
      { path: 'ُEditMeal/:Dayid/:id', component: AddMealComponent },
      { path: 'Plans', component: PlansComponent },
      { path: 'TodayMeal/:id', component: TodayMealsComponent },
      { path: "Plan/:id", component: PlanDashComponent },
      { path: "Welcome", component: WelcomeComponent },
      { path: "Patients", component: PatientFollowUpComponent },
      { path: "Subscrebtion", component: SubscrebtionComponent },
<<<<<<< HEAD
      { path: "PatienDe/:Patientid", component: PatientDetailsComponent },
      { path: "EditCustomMeal/:Dayid/:id", component: EditCustomPlanComponent },
      { path: "Note", component: NotesComponent },
      { path: "CustomPlanDays/:customId", component: CustomPlanDayComponent },
      { path: 'CustomPlanDayMeal/:id', component: CustomPlanDayMealsComponent },
   
=======
      {path: "PatienDe",component: PatientDetailsComponent},
      {path: "Notes",component:  NotesComponent},
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
