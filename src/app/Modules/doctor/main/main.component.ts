import { Component } from '@angular/core';
import { LoginService } from '../../auth/Services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  userName:String | undefined;
  imgUser: string;

  constructor (private loginservice:LoginService){

  this.userName=  loginservice.getUserName();
  this.imgUser=loginservice.getUserImg()
  console.log("rdctfvygbhjnkm",this.imgUser)
  }

}
