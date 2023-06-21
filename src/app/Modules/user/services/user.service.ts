import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { IPatient } from '../../doctor/Interface/IPatient';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router) {


   
  }

  GetPatientById(patientId:string):Observable<IPatient>{
    
    return this.httpClient.get<IPatient>(`http://localhost:5268/api/Patient/patientDTO/${patientId}`).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }
}