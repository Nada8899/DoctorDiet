import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDoctorsComponent } from '../home/show-doctors/show-doctors.component';
import { KnowYourDocComponent } from './know-your-doc/know-your-doc.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';



const routes: Routes = [
 
  { path: 'DoctorDashboard',component:AdminDashBoardComponent},
  { path: 'KD',component:KnowYourDocComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }