import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Service/doctor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-dash',
  templateUrl: './plan-dash.component.html',
  styleUrls: ['./plan-dash.component.scss']
})
export class PlanDashComponent implements OnInit {
 data:any
 planId !:any

<<<<<<< HEAD
 constructor(private doctorService:DoctorService,private _ActivatedRoute:ActivatedRoute)  { }
=======
 constructor(private doctorService:DoctorService,private _ActivatedRoute:ActivatedRoute)  {
  

 }
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.planId = params.get('id');
      this.doctorService.GetDaysByplanID(this.planId).subscribe(Response => {
<<<<<<< HEAD
        this.data = Response;});});}

=======
        this.data = Response;
        console.log(this.data)
      });
    });

  }
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6

}
