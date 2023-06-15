import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IMeal } from '../Interface/IMeal';
import { IPlan } from '../Interface/IPlan';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent {
MealList : IMeal[] = [];
myMeal! : IMeal
myPlan!:IPlan;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  PlanForm = this.formBuilder.group({
    duration: ['', Validators.required],
    CaloriesTO: ['', Validators.required],
    CaloriesFrom: ['', [Validators.required]],

  });
  MealForm = this.formBuilder.group({
    Basic: ['', [Validators.required]],
    substitute1: ['', [Validators.required]],
    substitute2: ['', [Validators.required]],
  });

  get duration() {
    return this.PlanForm.get('duration');
  }
  get CaloriesTO() {
    return this.PlanForm.get('CaloriesTO');
  }
  get CaloriesFrom() {
    return this.PlanForm.get('CaloriesFrom');
  }
  get Basic() {
    return this.PlanForm.get('Basic');
  }
  get substitute1() {
    return this.PlanForm.get('substitute1');
  }
  get substitute2() {
    return this.PlanForm.get('substitute2');
  }


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
    const catogry = document.getElementById("Meals") as HTMLSelectElement;
    const selectOption = catogry.options[catogry.selectedIndex].text;
    const meals = document.getElementById("AllMeals") as HTMLSelectElement;
    const selectMeal = meals.options[meals.selectedIndex].text;
    const input3 = this.MealForm.get('substitute2');
    const input2 = this.MealForm.get('substitute1');
    const input1 = this.MealForm.get('Basic');
  
    if (selectOption == "الاساسية") {
      input1?.setValue(input1.value + selectMeal + "+");
    } else if (selectOption == "1 البديل") {
      input2?.setValue(input2.value + selectMeal + '+');
    } else {
      input3?.setValue(input3.value + selectMeal + '+');
    }
  }
  

addPlan(PlanForm:any){

  console.log(PlanForm.value)
}
AddMeal(MealForm:any){
 console.log(MealForm.value)
 this.MealList.push(this.myMeal)
 console.log("mealList",MealForm.value)
}

  Meals = ["الاساسية", "1 البديل", "البديل 2"];
  SubMeals = [" فراخ مسلوقه"  , "لحم", "لبن", "فاكهة", "بيض", "أرز","مكرونه","زبادي", "سمك","سلطه","رايب","كرواسون","فراخ مشويه","محشي","لسان عصفور","عصير طبيعي"]
}
