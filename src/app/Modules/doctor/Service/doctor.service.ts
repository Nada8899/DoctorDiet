import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../../shared/Interface/IDoctor';
import { IConnect } from '../Interface/IConnect';
import { IPlan } from '../Interface/IPlan';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http: HttpClient, private _formBuilder: FormBuilder) { }



  getSingleDoctor(id: string): Observable<IDoctor> {
    return this._http.get<IDoctor>(`http://localhost:5268/api/Doctor/doctorid?doctorid=${id}`);
  }

  Subscribe(Connect: IConnect): Observable<IConnect> {
    return this._http.post<IConnect>(`http://localhost:5268/api/Patient/Subscribtion`, Connect);
  }

  addPlan(data: IPlan): Observable<IPlan> {
    return this._http.post<IPlan>(`http://localhost:5268/api/Plan`, data);
  }



}
