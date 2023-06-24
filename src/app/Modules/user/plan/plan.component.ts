import { Component } from '@angular/core';
import { IPatient } from '../../doctor/Interface/IPatient';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../auth/Services/register.service';
import { UserService } from '../services/user.service';
import { LoginService } from '../../auth/Services/login.service';
import { INote } from '../../doctor/Interface/INote';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  constructor(private formBuilder: FormBuilder, private _router: Router, private _UserService: UserService, private Auth: LoginService) { }

  CurrentPatient!: IPatient;
  breakfast: any[] = [];
  lunch: any[] = [];
  dinner: any[] = [];
  note!: INote;
  async ngOnInit() {

    this.GetPatient();
    await console.log(this.CurrentPatient)
    console.log(this.Auth.getUserId());
    this.getPatientCurrentDay();
  }

  GetPatient() {

    this._UserService.GetPatientById(this.Auth.getUserId()).subscribe({
      next: data => this.CurrentPatient = data,

      error: err => console.log(err),
    })

    setTimeout(() => console.log(this.CurrentPatient), 1000)
  }

  getPatientCurrentDay() {
    this._UserService.getAllPatientData().subscribe((response) => {
      console.log(response);
      console.log(response['customPlans']);
      let customPlans = response['customPlans']
      this.note.dayId=response['customPlans']['id'];
      console.log(customPlans[customPlans.length - 1]['customPlanId']);
      let customPlansId = customPlans[customPlans.length - 1]['customPlanId'];
      this._UserService.getCurrentDay(customPlansId).subscribe((response) => {
        console.log(response);
        let CurrentDay = response;
        console.log(CurrentDay['customMeals'])
        for (let i = 0; i < CurrentDay['customMeals'].length; i++) {

          switch (CurrentDay['customMeals'][i].category) {
            case 0:
              this.breakfast.push(CurrentDay['customMeals'][i]);
              break;
            case 1:
              this.lunch.push(CurrentDay['customMeals'][i]);
              break;
            case 1:
              this.dinner.push(CurrentDay['customMeals'][i]);
              break;
            default:
              console.log('DayMeals');
              break;
          }
        }

      })
    })
  }
//Note button ///
addnote(){

  this.note.text="sdcds";//=( document.getElementsByClassName(".notebody") as unknown as HTMLTextAreaElement).value;
 console.log(this.note)
}

}
