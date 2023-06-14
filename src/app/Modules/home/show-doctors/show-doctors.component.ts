import { Component, OnInit } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.scss']
})
export class ShowDoctorsComponent implements OnInit {
  msg!:string;
  constructor(private homeService: HomeServicesService) { }
  ngOnInit() {
    this.msg="asd";
   this.sayhi()
   
  }
  sayhi(){
    console.log("hoiiiiiiiiiiiiiiii")

  }  close() {
    this.homeService.CloseDoctors()
  }
}
