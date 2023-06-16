import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IMeal } from '../Interface/IMeal';
import { IPlan } from '../Interface/IPlan';
import bsCustomFileInput from 'bs-custom-file-input';
import { IDay } from '../Interface/IDay';
import { DoctorService } from '../Service/doctor.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {
  Meals: any[] = [];
  Days: IDay[] = [];
  Day !: IDay
  myMeal: IMeal = {
    description: '',
    image: undefined,
    category: 0,
    type: 0
  };



  myPlan: IPlan = {
    Duration: 0,
    CaloriesTo: 0,
    CaloriesFrom: 0,
    Days: [],
    Allergics: []
  };
  imageSource: string = '';
  imageDisplay: string = 'none';
  ngOnInit(): void {
    bsCustomFileInput.init();

  }
  constructor(private router: Router, private formBuilder: FormBuilder, private _doctorService: DoctorService) { }

  PlanForm = this.formBuilder.group({
    duration: ['', Validators.required],
    CaloriesTo: ['', Validators.required],
    CaloriesFrom: ['', [Validators.required]],

  });

  MealForm = this.formBuilder.group({
    categoryID: ['', [Validators.required]],
    description: ['', [Validators.required]],
    TypeMeal: ['', [Validators.required]],

    imgMeal: ['', [Validators.required]]
  });

  get imgMeal() {
    return this.PlanForm.get('imgMeal');
  }
  get duration() {
    return this.PlanForm.get('duration');
  }
  get categoryID() {
    return this.PlanForm.get('categoryID');
  }
  get CaloriesTO() {
    return this.PlanForm.get('CaloriesTo');
  }
  get CaloriesFrom() {
    return this.PlanForm.get('CaloriesFrom');
  }
  get description() {
    return this.PlanForm.get('description');
  }
  get TypeMeal() {
    return this.PlanForm.get('TypeMeal');
  }

  ChangeCatigory() {


    var catogry = document.getElementById("catogry") as HTMLSelectElement;
    const Selectoption = catogry.options[catogry.selectedIndex].text;

    var lable1 = document.getElementById("lable1") as HTMLLabelElement;
    lable1.textContent = Selectoption;


  }
  AddMealToText() {
    const catogry = document.getElementById("Meals") as HTMLSelectElement;
    const selectOption = catogry.options[catogry.selectedIndex].text;
    const meals = document.getElementById("AllMeals") as HTMLSelectElement;
    const selectMeal = meals.options[meals.selectedIndex].text;

    const input1 = this.MealForm.get('description');

    if (selectOption == "الاساسية") {
      input1?.setValue(input1.value + selectMeal + "+");
    }
    else {
      input1?.setValue(input1.value + selectMeal + '+');
    }

  }


  addPlan(PlanForm: any) {



    this.myPlan.Duration = Number(this.PlanForm.get('duration')?.value);

    this.myPlan.CaloriesFrom = Number(this.PlanForm.get('CaloriesFrom')?.value);
    this.myPlan.CaloriesTo = Number(this.PlanForm.get('CaloriesTo')?.value);
    this.myPlan.Days = this.Days;

    console.log(this.myPlan)

    console.log(PlanForm.value)
    this._doctorService.addPlan(this.myPlan).subscribe({
      next: data => console.log(data),
      error: err => console.log(err)
    })


  }
  AddMeal(MealForm: any) {

    console.log(MealForm.value)

    this.myMeal.category = Number(this.MealForm.get('categoryID')?.value);
    this.myMeal.description = this.MealForm.get('description')?.value;
    this.myMeal.type = Number(this.MealForm.get('TypeMeal')?.value);

    this.Meals.push(this.myMeal)
    console.log("mealList", this.Meals)

    MealForm.get('categoryID').reset({ value: 'category', disabled: false });
    MealForm.get('TypeMeal').reset({ value: 'JLC', disabled: false });
    MealForm.get('description').reset();
    MealForm.get('imgMeal').reset();

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
    this.imageuplud(event);

  }
  addDayList() {
    const newDay: IDay = {
      Meals: this.Meals,

    };

    this.Days.push(newDay)
    console.log("days", this.Days)

  }
  imageuplud(event: any) {
    //this.myMeal.image = event.target.files[0];

    // console.log("CCC", this.myMeal.image);

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result?.toString().split(',')[1]; // Extract the base64 string
      this.myMeal.image = base64Data;

    };
    reader.readAsDataURL(event.target.files[0]);

    // Send the mealData to the API using HttpClient

  }




  // imageuplud(event: any) {
  //   const file = event.target.files[0];
  //   console.log("Selected File:", file);

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const arrayBuffer = reader.result as ArrayBuffer;
  //     const byteArray = new Uint8Array(arrayBuffer);
  //     console.log("Byte Array:", byteArray);

  //     // Assign the byte array to your 'myMeal.Image' property
  //     this.myMeal.image = new Uint8Array(byteArray);
  //     console.log("Updated Image:",  new Uint8Array(byteArray));
  //   };

  //   if (file) {
  //     reader.readAsArrayBuffer(file);
  //   }
  // }
  MealLists = ["الاساسية", " البديل"];
  SubMeals = [" فراخ مسلوقه", "لحم", "لبن", "فاكهة", "بيض", "أرز", "مكرونه", "زبادي", "سمك", "سلطه", "رايب", "كرواسون", "فراخ مشويه", "محشي", "لسان عصفور", "عصير طبيعي"]
}
