import { Component } from '@angular/core';
import { LoginService } from '../../auth/Services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPass } from '../interface/IPass';
import { ProfileService } from '../services/profile.service';
import { PasswordValidator } from '../../auth/CustomValidator/PassValidator';
import { ConfirmPassVaildators } from '../../auth/CustomValidator/ConfirmPassword';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userId!: string
  errorMsg!: string
  data: any
  ObjPass: IPass = {
    DoctorId: "",
    Password: ''
  }
  showConfirmation = false;
  DoctorName =""
  constructor(private _LoginService: LoginService, private _ProfileService: ProfileService, private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.userId = this._LoginService.getUserId()
    this.GetProfile()
  }
  UserInfo = this.formBuilder.group({
    fullName: ['', [Validators.minLength(5)]],
    email: ['', [Validators.email]],
    phoneNumber: ['', [Validators.pattern(/^(010[0-9]{8}|011[0-9]{8}|012[0-9]{8}|015[0-9]{8})$/)]],
    height: [''],
    weight: [''],

  });


  PassForm = this.formBuilder.group({

    newpassword: ['', [Validators.required, PasswordValidator]],
    confirmpassword: ['', [Validators.required]],

  },
    { validators: [ConfirmPassVaildators] });

  get fullName() {
    return this.UserInfo.get('fullName');
  }
  get email() {
    return this.UserInfo.get('email');
  }
  get phoneNumber() {
    return this.UserInfo.get('phoneNumber');
  }
  get height() {
    return this.UserInfo.get('height');
  } get weight() {
    return this.UserInfo.get('weight');
  }
  get confirmpassword() {
    return this.UserInfo.get('confirmpassword');
  }
  get newpassword() {
    return this.UserInfo.get('newpassword');
  }

  calculateAge(birthDate: string): number {
    const currentDate: Date = new Date();
    const dateOfBirth: Date = new Date(birthDate);

    const ageDiffInMs: number = currentDate.getTime() - dateOfBirth.getTime();
    const ageDate: Date = new Date(ageDiffInMs);
    const calculatedAge: number = Math.abs(ageDate.getUTCFullYear() - 1970);

    return calculatedAge;
  }

  GetProfile() {
    if (this._LoginService.getUserRole() == 'Patient') {
      this._ProfileService.GetPatientInfo(this.userId).subscribe((resp) => {
        this.data = resp;

        console.log(this.data);
      }, error => {
        this.errorMsg = "you dont have access"
      })
    }

  }
  onSubmit(UserInfo: FormGroup) {
    if (this.UserInfo.valid) {

      console.log(this.UserInfo.value)

    }
  }

  onSubmitPass() {
    if (this.PassForm.valid) {
      console.log("PassForm", this.PassForm.value)

      const newPasswordControl = this.PassForm.get('newpassword');
      if (newPasswordControl && newPasswordControl.value) {

        this.ObjPass.Password = newPasswordControl.value;
      }

      this.ObjPass.DoctorId = this._LoginService.getUserId()
      if (this._LoginService.getUserRole() == 'Patient') {
        console.log("objPass", this.ObjPass)
        this._ProfileService.ChangePatientPass(this.ObjPass).subscribe((resp) => {
          console.log(resp);
          if (resp.message == 'Success') {
            this.showConfirmation = true;
            this.PassForm.reset();
          }

        }, error => {
          console.log(error)
        })
      }
    }
  }

  hideConfirmation() {
    this.showConfirmation = false;
  }

  GetSubscribtion() {
    this._ProfileService.getpatientSubscribtion(this._LoginService.getUserId())
      .subscribe((resp) => {
        this.data=resp
        console.log(resp)
        console.log(this.data?.customPlans[0].duration)
        this.DoctorName=this.data?.doctorPatientBridges[0].fullName
        console.log(this.data?.doctorPatientBridges[0].fullName)

        console.log(this.data?.goal[0].name)
      }, error => {
        console.log(error)
      }
      )
  }
}
