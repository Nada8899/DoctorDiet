import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-dash',
  templateUrl: './plan-dash.component.html',
  styleUrls: ['./plan-dash.component.scss']
})
export class PlanDashComponent {
  numbers: number[] = Array.from({ length: 90 }, (_, index) => index + 1);
}
