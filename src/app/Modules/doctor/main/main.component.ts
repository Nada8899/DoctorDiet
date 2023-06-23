import { Component } from '@angular/core';
import { LoginService } from '../../auth/Services/login.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  userName:String | undefined;
  decodedImage: any;



  constructor (private loginservice:LoginService){
    this.decodedImage = this.loginservice.getUserImg()
  this.userName=  loginservice.getUserName();
  console.log("rdctfvygbhjnkm",this.decodedImage)
  }

}
