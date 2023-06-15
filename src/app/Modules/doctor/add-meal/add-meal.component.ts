import { Component, OnInit } from '@angular/core';
import 'bs-custom-file-input';

declare const bsCustomFileInput: any;
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit{
  ngOnInit(): void {
    bsCustomFileInput.init();
  }
  previewImage(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const preview = document.getElementById('preview');
        if (preview) {
          preview.setAttribute('src', e.target.result);
          preview.style.display = 'block';
        }
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

}
