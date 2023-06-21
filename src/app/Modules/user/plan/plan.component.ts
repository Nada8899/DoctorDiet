import { Component } from '@angular/core';
import { IPatient } from '../../doctor/Interface/IPatient';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../auth/Services/register.service';
import { UserService } from '../services/user.service';
import { LoginService } from '../../auth/Services/login.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  constructor(private formBuilder: FormBuilder,private _router:Router,private _UserService:UserService,private Auth: LoginService) { }

  CurrentPatient!: IPatient;

  async ngOnInit() {

     this.GetPatient();
    await console.log(this.CurrentPatient)
    console.log(this.Auth.getUserId())
  }

   GetPatient() {
      
      this._UserService.GetPatientById(this.Auth.getUserId()).subscribe({
      next: data => this.CurrentPatient = data,
      
      error: err => console.log(err),
    })

    setTimeout(()=>console.log(this.CurrentPatient),1000)
  }
  

}