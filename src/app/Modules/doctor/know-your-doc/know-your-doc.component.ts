import { Component } from '@angular/core';

@Component({
  selector: 'app-know-your-doc',
  templateUrl: './know-your-doc.component.html',
  styleUrls: ['./know-your-doc.component.scss']
})
export class KnowYourDocComponent {

  appear: boolean = false;

  change() {
    console.log("asdasd")
    this.appear = !this.appear;
  }

}
