import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { KnowYourDocComponent } from './know-your-doc/know-your-doc.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  declarations: [
    AdminDashBoardComponent,
    KnowYourDocComponent
  ],
  imports: [
    DoctorRoutingModule,
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
  ]
})
export class DoctorModule { }
