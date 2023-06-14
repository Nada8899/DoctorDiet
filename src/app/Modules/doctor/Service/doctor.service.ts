import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoctor } from '../../shared/Interface/IDoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _http: HttpClient) { }



  getSingleDoctor(id: string): Observable<IDoctor> {
    return this._http.get<IDoctor>(`http://localhost:5268/api/Doctor/doctorid?doctorid=${id}`);
  }

}
