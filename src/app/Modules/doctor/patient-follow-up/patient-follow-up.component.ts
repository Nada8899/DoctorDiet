import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IPatient } from '../Interface/IPatient';
import { PatientService } from '../Service/patient.service';

@Component({
  selector: 'app-patient-follow-up',
  templateUrl: './patient-follow-up.component.html',
  styleUrls: ['./patient-follow-up.component.scss']
})
export class PatientFollowUpComponent {
  PatientList:IPatient[]=[]
  errorMessage:string=""


  constructor(private patient:PatientService,private router:Router){
    
  }

  ngOnInit() {
    this.patient.GetPatientsByDoctorId("0fbcd163-8b38-4dd1-a315-74796b3c2e33").subscribe({
      next:data=>{
        this.PatientList=data
        console.log(data)
      },
      error:err=>this.errorMessage=err
     })
   
  }







}
