import { Component } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';
import { HomeServicesService } from '../home-services.service';

@Component({
  selector: 'app-show-doctors',
  templateUrl: './show-doctors.component.html',
  styleUrls: ['./show-doctors.component.scss']
})
export class ShowDoctorsComponent {
  constructor(private homeService: HomeServicesService) { }
  close() {
    this.homeService.CloseDoctors()
  }
}
