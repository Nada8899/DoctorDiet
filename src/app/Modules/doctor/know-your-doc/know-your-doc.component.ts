import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DoctorService } from '../Service/doctor.service';
import { IDoctor } from '../../shared/Interface/IDoctor';
import { IConnect } from '../Interface/IConnect';
import { LoginService } from '../../auth/Services/login.service';

@Component({
  selector: 'app-know-your-doc',
  templateUrl: './know-your-doc.component.html',
  styleUrls: ['./know-your-doc.component.scss']
})
export class KnowYourDocComponent {
  constructor(private _activeRoute: ActivatedRoute, private _doctorService: DoctorService, private _loginService: LoginService) { }
  Connect: IConnect = { doctorID: "", patientId: "" }
  appear: boolean = false;
  doctor!: IDoctor
  ngOnInit() {
    this.getDoctor()
    this._loginService.getUserId()
  }
  change(id: string) {
    console.log(id)
    this.appear = !this.appear;
    this.Connect.doctorID = id;
    this.Connect.patientId = this._loginService.getUserId();
    console.log(this._loginService.getUserId())
    this._doctorService.Subscribe(this.Connect).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    });
  }
  getDoctor() {
    this._activeRoute.paramMap.subscribe((parms: ParamMap) => {
      const id = parms.get('id');
      if (id) {
        console.log(id)
        this._doctorService.getSingleDoctor(id).subscribe({
          next: data => {
            console.log(data);
            this.doctor = data;
          },
          error: err => { console.log(err) }

        })
      }
    });
  }



}