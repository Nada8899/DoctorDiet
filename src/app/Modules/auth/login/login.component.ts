import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { PasswordValidator } from '../CustomValidator/PassValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{

  constructor(private formBuilder: FormBuilder,private _router:Router) { }

  LoginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    
    password: ['', [Validators.required ,Validators.minLength(6),Validators.maxLength(10),PasswordValidator]],
   
  });
  get UserName() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }
  ngOnInit(): void {
    
  }

  onSubmit() {
    if (this.LoginForm.valid) {
      console.log('Form submitted!');
      console.log('', this.LoginForm.value);
      this._router.navigate(["Home"])

    } else {
      console.log('Not Valid.');

    }
  }
 
  
  }


