import { Component } from '@angular/core';

@Component({
  selector: 'app-add-day',
  templateUrl: './add-day.component.html',
  styleUrls: ['./add-day.component.scss']
})
export class AddDayComponent {
  ChangeCatigory() {
    var catogry = document.getElementById("catogry") as HTMLSelectElement;
    const Selectoption = catogry.options[catogry.selectedIndex].text;

    var lable1 = document.getElementById("lable1") as HTMLLabelElement;
    lable1.textContent = Selectoption;
    var lable2 = document.getElementById("lable2") as HTMLLabelElement;
    lable2.textContent = "البديل 1";
    var lable3 = document.getElementById("lable3") as HTMLLabelElement;
    lable3.textContent = "البديل 2";

  }
  AddMealToText() {

    var catogry = document.getElementById("Meals") as HTMLSelectElement;
    const Selectoption = catogry.options[catogry.selectedIndex].text;
    var Meals = document.getElementById("AllMeals") as HTMLSelectElement;
    const SelectMeal = Meals.options[Meals.selectedIndex].text;
    if (Selectoption == "الاساسية") {
      var input1 = document.getElementById("input1") as HTMLInputElement;
      input1.value += SelectMeal + "+";
    } else if (Selectoption == "1 البديل") {
      var input2 = document.getElementById("input2") as HTMLInputElement;
      input2.value += SelectMeal + '+';
    } else {
      var input3 = document.getElementById("input3") as HTMLInputElement;
      input3.value += SelectMeal + '+';
    }

  }



  Meals = ["الاساسية",  "1 البديل", "البديل 2"];
  SubMeals = ["فراخ", "لحم", "لبن", "فاكهة", "بيض", "أرز"]



}

