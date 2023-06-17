import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Service/doctor.service';
import { LoginService } from '../../auth/Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscrebtion',
  templateUrl: './subscrebtion.component.html',
  styleUrls: ['./subscrebtion.component.scss']
})
export class SubscrebtionComponent implements OnInit{
  waitingPatients!:any[];
  DoctorId!:string;
    constructor(private _DoctorService:DoctorService, private _LoginService:LoginService){}

  ngOnInit(): void {
  this.getDoctorId();
  this.GetAllWaitingPatient();
  }
  getDoctorId()
  {
    this.DoctorId = this._LoginService.getUserId()
  }
  GetAllWaitingPatient()
  {
    this._DoctorService.getAllWaitingPatients(this.DoctorId).subscribe((response)=>{
      this.waitingPatients = response;
      console.log(this.waitingPatients);
    })
  }
  AcceptPatient(Patientid:string)
  {

    let waitingPatient ={
      "patientId":Patientid,
        "doctorID": this.DoctorId
    }
    console.log(waitingPatient);
    this._DoctorService.acceptPatient(waitingPatient).subscribe((response)=>{

      console.log(response);
      console.log("Accepted");
      this.GetAllWaitingPatient();


    }),
    (error:any)=>{

      console.log(error.message);
    }


  }
  trackByFunction(index: number, item: any): any {
    return item.noEat[0].patientId;
  }

  RejectPatient(Patientid:string)
  {

    let waitingPatient ={
      "patientId":Patientid,
        "doctorID": this.DoctorId
    }
    console.log(waitingPatient);
    this._DoctorService.rejectPatient(waitingPatient).subscribe((response)=>{

      console.log(response);
      console.log("Rejected");
      // this.GetAllWaitingPatient();
    }),
    (error:any)=>{

      console.log(error.message);
    }


  }
}


