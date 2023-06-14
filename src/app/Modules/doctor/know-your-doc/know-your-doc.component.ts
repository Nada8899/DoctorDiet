import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DoctorService } from '../Service/doctor.service';
import { IDoctor } from '../../shared/Interface/IDoctor';

@Component({
  selector: 'app-know-your-doc',
  templateUrl: './know-your-doc.component.html',
  styleUrls: ['./know-your-doc.component.scss']
})
export class KnowYourDocComponent {

  constructor(private _activeRoute: ActivatedRoute, private _doctorService: DoctorService) { }
  appear: boolean = false;
  doctor!: IDoctor
  ngOnInit() {
    this.getDoctor()
  }
  change() {
    console.log("asdasd")
    this.appear = !this.appear;
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