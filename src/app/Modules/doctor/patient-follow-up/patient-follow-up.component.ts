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
    this.patient.GetPatientsByDoctorId("455f58ee-d70a-453a-abd7-7577d00684a7").subscribe({
      next:data=>{
        this.PatientList=data
        console.log(data)
      },
      error:err=>this.errorMessage=err
     })
   
  }







}
