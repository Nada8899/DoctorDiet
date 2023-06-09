import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmPassVaildators, ConfirmPassVali } from '../CustomValidator/ConfirmPassword';
import { PasswordValidator } from '../CustomValidator/PassValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder, private _route: Router) {

   }
   error:string='';
  RegistrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern('01[0-2]{1}[0-9]{8}')]],
    age: ['', [Validators.required, Validators.min(15)]],
    height: ['', [Validators.required]],
    weight: ['', [Validators.required]],
    chronicDisease: [''],


    Goal: this.formBuilder.group(
      {
        weightLoss: [false,],
        weightGain: [false,],
        muscleBuilding: [false,]
      }
    ),

    NoEat: this.formBuilder.group(
      {
        Fish: [false,],
        Meat: [false,],
        Chekin: [false,],
        NoThing: [false,],
      }
    ),

    activityRate: this.formBuilder.group(
      {
        low: [false,],
        regular: [false,],
        high: [false,],
        veryHigh: [false,]
      }
    ),

    Gender: ['', [Validators.required]],
    KindOfFoodDidnotNeed: ['',],
    password: ['', [Validators.required, PasswordValidator]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: [ConfirmPassVaildators] });     

  get OptionRun() {
    return this.RegistrationForm.get('optionsRun');
  }
  get OptionWalk() {
    return this.RegistrationForm.get('optionsWalk');
  }
  get OptionSleep() {
    return this.RegistrationForm.get('optionsSleep');
  }
  get UserName() {
    return this.RegistrationForm.get('userName');
  }
  get fullName() {
    return this.RegistrationForm.get('fullName');
  }
  get email() {
    return this.RegistrationForm.get('email');
  }
  get phoneNumber() {
    return this.RegistrationForm.get('phoneNumber');
  }
  get password() {
    return this.RegistrationForm.get('password');
  }
  get confirmPassword() {
    return this.RegistrationForm.get('confirmPassword');
  }
  get age() {
    return this.RegistrationForm.get('age');
  }
  get height() {
    return this.RegistrationForm.get('height');
  }
  get weight() {
    return this.RegistrationForm.get('weight');
  }
  get Gender() {
    return this.RegistrationForm.get('Gender');
  }


  onSubmit(RegistrationForm:FormGroup) {
    if (this.RegistrationForm.valid) {
      
      console.log('Form submitted!');
      console.log('Selected options:', this.RegistrationForm.value);
      this._route.navigate(['Login']);

    } else {
      console.log('Please check at least one option.');
      console.log('Selected options:', this.RegistrationForm.value)
    }
  }

 
}
