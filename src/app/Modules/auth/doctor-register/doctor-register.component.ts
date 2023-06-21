import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPassVaildators } from '../CustomValidator/ConfirmPassword';
import { PasswordValidator } from '../CustomValidator/PassValidator';
import { RegisterService } from '../Services/register.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent {
  selectedFile!: File;
  error: string = '';
  constructor(private formBuilder: FormBuilder,private _router:Router,private _registerService:RegisterService) { }

  DoctorRegisterForm = this.formBuilder.group({
    FullName: ['', [Validators.required,Validators.minLength(3)]],
    Specialization: ['', [Validators.required,Validators.minLength(2)]],
    Phone: ['', [Validators.required, Validators.pattern(/^(010[0-9]{8}|011[0-9]{8}|012[0-9]{8}|015[0-9]{8})$/)]],
    Phone1: ['', [ Validators.pattern(/^(010[0-9]{8}|011[0-9]{8}|012[0-9]{8}|015[0-9]{8})$/)]],
    Phone2: ['', [ Validators.pattern(/^(010[0-9]{8}|011[0-9]{8}|012[0-9]{8}|015[0-9]{8})$/)]],
    aleternativePhones:this.formBuilder.array([]),
    Location: ['', [Validators.required,Validators.minLength(3)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required ,Validators.minLength(6),Validators.maxLength(10),PasswordValidator]],
    confirmPassword: ['', [Validators.required]],
    ProfileImage:['',[Validators.required]],
    SyndicateCarnet:['',[Validators.required]],

  },{ validators: [ConfirmPassVaildators] }
  );
  get UserName() {
    return this.DoctorRegisterForm.get('username');
  }
  get Specialization() {
    return this.DoctorRegisterForm.get('Specialization');
  }
  get aleternativePhones()
  {
    return this.DoctorRegisterForm.get('aleternativePhones') as FormArray;
  }
  get Location() {
    return this.DoctorRegisterForm.get('Location');
  }

  get PhoneNumber(){
    return this.DoctorRegisterForm.get('Phone');
  }
  get PhoneNumber1(){
    return this.DoctorRegisterForm.get('Phone1');
  }
  get PhoneNumber2(){
    return this.DoctorRegisterForm.get('Phone2');
  }
  get password() {
    return this.DoctorRegisterForm.get('password');
  }

  get FullName() {
    return this.DoctorRegisterForm.get('FullName');
  }
  get email() {
    return this.DoctorRegisterForm.get('email');
  }

  get confirmPassword() {
    return this.DoctorRegisterForm.get('confirmPassword');
  }
  get ProfileImage() {
    return this.DoctorRegisterForm.get('ProfileImage')
  }
  get SyndicateCarnet() {
    return this.DoctorRegisterForm.get('SyndicateCarnet');
  }

  ngOnInit(): void {

  }

  onSubmit(registerForm: any) {

    console.log('RegisterForm : ',registerForm.value);
    if (registerForm.valid) {
      console.log('Form submitted!');
      console.log('DoctorRegisterForm : ', this.DoctorRegisterForm.value);
      const formData =new FormData();
      formData.append('FullName', registerForm.get("FullName").value);
      formData.append('UserName', registerForm.get("username").value);
      formData.append('Email', registerForm.get("email").value);
      formData.append('Password', registerForm.get("password").value);
      formData.append('ConfirmPassword', registerForm.get("confirmPassword").value);
      formData.append('Specialization', registerForm.get("Specialization").value);
      formData.append('Location', registerForm.get("Location").value);
      formData.append('ProfileImage', this.selectedFile,this.selectedFile.name);
      formData.append('SyndicateCarnet', this.selectedFile,this.selectedFile.name);

      formData.append('contactInfo',registerForm.get("Phone").value)
      console.log(registerForm.get("Phone").value);
      console.log(registerForm.get("Phone1").value);
      console.log(registerForm.get("Phone2").value);
       if(registerForm.get("Phone1").value !==''){
      formData.append('contactInfo',registerForm.get("Phone1").value)}
      else if(registerForm.get("Phone2").value !=='')
      formData.append('contactInfo',registerForm.get("Phone2").value)

      // const alternativePhones = registerForm.get('aleternativePhones') as FormArray;
      // for (let i = 0; i < alternativePhones.length; i++) {
      //   formData.append('contactInfo', alternativePhones.at(i).value);
      // }
      // formData.append('contactInfo', registerForm.get("Phone").value)
      // for (let i = 0; i < alternativePhones.length; i++) {
      // console.log('alternativePhones : ',alternativePhones.value);}
      
      console.log('formData : ',formData);
    this._registerService.DoctorRegister(formData).subscribe(
      (resp)=>{

        console.log(resp)
        if (resp.message == 'Success') {
          console.log("Recored Added")
          this._router.navigate(['/auth/Login']);

        }
        else {
          this.error = resp.errors.email.message;
        }




    })

    } else {
      console.log('Not Valid.');

    }
  }
  addAlternativePhone()
  {
    this.aleternativePhones.push(this.formBuilder.control(''));
  }

  onSelectFile(fileInput: any) {
    this.selectedFile = <File>fileInput.target.files[0];
    console.log(this.selectedFile)
    const dataTransfer = new ClipboardEvent('').clipboardData || new DataTransfer();
    dataTransfer.items.add(new File(['my-file'], 'new-file-name'));
    const inputElement: HTMLInputElement = document.getElementById('formFile') as HTMLInputElement

     inputElement.files = dataTransfer.files;
  }
}

