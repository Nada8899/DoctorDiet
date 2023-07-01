import { Component, OnInit } from '@angular/core';
import { IPatient } from '../../doctor/Interface/IPatient';
import { UserService } from '../services/user.service';
import { LoginService } from '../../auth/Services/login.service';
<<<<<<< HEAD
import { INoteGetDoctorData } from '../interface/INoteGetDoctorData';
import { IDoctorNoteDto } from '../interface/IDoctorNoteDto';
import { NotesService } from '../services/notes.service';
import { IDocIdResponse } from '../interface/IDocIdResponse';
import { IPatientNoteData } from '../interface/IPatientNoteData';
import { FormBuilder, Validators } from '@angular/forms';
=======
import { INote } from '../../doctor/Interface/INote';
import { NotExpr } from '@angular/compiler';

>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
<<<<<<< HEAD
export class PlanComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,private _NoteService:NotesService, private _UserService: UserService, private Auth: LoginService) { }


  userID:string=''
  data:INoteGetDoctorData[]=[]
  errorMsg:string = ""
  docId!:string
  DoctorNote:IDoctorNoteDto={
    doctorId:this.docId,
    patientId:this.userID
  }


   patientNoteDataForm=this.formBuilder.group({
    text: ['', Validators.required],
   });
   get text()
   {
    return this.patientNoteDataForm.get('text');
   }
   currentDate = new Date();
   currentDateTime = this.currentDate;
  patientNoteData:IPatientNoteData={
    patientId: '',
    doctorId: '',
    date: this.currentDateTime,
    id: 0,
    dayCustomPlanId: 0,
    text:''
  }
  CurrentDayCustomPlanId!: number
  showDone:boolean = false


  ISsubscribe !:string
  CurrentPatient!: IPatient;
  breakfast: any[] = [];
  lunch: any[] = [];
  dinner: any[] = [];
  snaks: any[] = [];
  sohor: any[] = [];

  ISsohor :boolean=false
  ISbreakfast :boolean=false
  ISlunch :boolean=false
  ISsnaks :boolean=false
  ISdinner :boolean=false


   ngOnInit() {
     this.userID=this.Auth.getUserId()

     this.GetDoctorId()

this._UserService.GetIFPatientInSubscription(this.userID).subscribe((res)=>{
  console.log(res)
  if(res.msg=="Confirmed"){
    this.ISsubscribe="Confirmed"
  }
  else if(res.msg=="Canceled"){
    this.ISsubscribe="Canceled"
  }
  else{
    this.ISsubscribe="NotConfirmed"
  }
})
    this.GetPatient();
     console.log(this.CurrentPatient)
    console.log(this.Auth.getUserId());
    this.getPatientCurrentDay();
  }

  GetPatient() {

    this._UserService.GetPatientById(this.Auth.getUserId()).subscribe({
      next: (data: IPatient) => this.CurrentPatient = data,

      error: (err: any) => console.log(err),
=======
export class PlanComponent {
  constructor(private formBuilder: FormBuilder, private _router: Router, private _UserService: UserService, private Auth: LoginService) { }

  CurrentPatient!: IPatient;
  breakfast: any[] = [];
  lunch: any[] = [];
  dinner: any[] = [];
  note!: INote;
  async ngOnInit() {

    this.GetPatient();
    await console.log(this.CurrentPatient)
    console.log(this.Auth.getUserId());
    this.getPatientCurrentDay();
  }

  GetPatient() {

    this._UserService.GetPatientById(this.Auth.getUserId()).subscribe({
      next: data => this.CurrentPatient = data,

      error: err => console.log(err),
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
    })

    setTimeout(() => console.log(this.CurrentPatient), 1000)
  }

  getPatientCurrentDay() {
    this._UserService.getAllPatientData().subscribe((response) => {
<<<<<<< HEAD
      let customPlans = response['customPlans'];
      let customPlanId = response['customPlans']['id'];

      let customPlansId = customPlans[customPlans.length - 1]['id'];
      this._UserService.getCurrentDay(customPlansId).subscribe((response) => {
        let CurrentDay = response;
        this.CurrentDayCustomPlanId=CurrentDay.id;
=======
      console.log(response);
      console.log(response['customPlans']);
      let customPlans = response['customPlans']
      this.note.dayId=response['customPlans']['id'];
      console.log(customPlans[customPlans.length - 1]['customPlanId']);
      let customPlansId = customPlans[customPlans.length - 1]['customPlanId'];
      this._UserService.getCurrentDay(customPlansId).subscribe((response) => {
        console.log(response);
        let CurrentDay = response;
        console.log(CurrentDay['customMeals'])
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
        for (let i = 0; i < CurrentDay['customMeals'].length; i++) {

          switch (CurrentDay['customMeals'][i].category) {
            case 0:
              this.breakfast.push(CurrentDay['customMeals'][i]);
<<<<<<< HEAD
              this.ISbreakfast=true
              break;
            case 1:
              this.lunch.push(CurrentDay['customMeals'][i]);
              this.ISlunch=true
              break;
            case 2:
              this.dinner.push(CurrentDay['customMeals'][i]);
              this.ISdinner=true
              break;
            case 3:
              this.sohor.push(CurrentDay['customMeals'][i]);
              this.ISsohor=true
              break;
            case 4:
              this.snaks.push(CurrentDay['customMeals'][i]);
              this.ISsnaks=true
=======
              break;
            case 1:
              this.lunch.push(CurrentDay['customMeals'][i]);
              break;
            case 1:
              this.dinner.push(CurrentDay['customMeals'][i]);
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
              break;
            default:
              console.log('DayMeals');
              break;
          }
        }

      })
    })
  }
<<<<<<< HEAD



   GetAllDocNotesForSpecificPatient(DoctorNote:IDoctorNoteDto) {

  this._NoteService.GetDoctorNotes(DoctorNote).subscribe((resp) => {
    this.data = resp;

  }, error => {
    this.errorMsg = "error"
    console.log(error)
  })


}

 GetDoctorId() {
  this._UserService.GetDocIdWithStatusConfirmed(this.userID).subscribe(
    (resp: IDocIdResponse | string) => {
      if (typeof resp === 'string') {
        this.errorMsg = 'Failed Successfully';
      } else {
        this.docId = resp.docid;

           this.DoctorNote={
      patientId:this.userID  ,
      doctorId:this.docId
       }

      }
     this.GetAllDocNotesForSpecificPatient(this.DoctorNote)
    },
    (error) => {
      this.errorMsg = 'Failed Successfully Ha Ha Ha';
    }

  );
}


AddPatientNote() {



  this.patientNoteData={
    patientId: this.userID,
    doctorId: this.docId,
    date: this.currentDateTime,
    id: 0,
    dayCustomPlanId: this.CurrentDayCustomPlanId,
    text:this.text?.value
  }



  this._NoteService.AddPatientNote(this.patientNoteData).subscribe((resp)=> {

     this.text?.reset();
     if(resp.status=="Success")
     {
      this.showDone=!this.showDone;
     }


   }, (error) => {
      this.errorMsg = 'Failed Successfully Ha Ha Ha';


  });
}


onSubmitPatientNoteData()
{
  if(this.patientNoteDataForm.valid)
  {
  }
}



}












=======
//Note button ///
addnote(){

  this.note.text="sdcds";//=( document.getElementsByClassName(".notebody") as unknown as HTMLTextAreaElement).value;
 console.log(this.note)
}

}
>>>>>>> 9cbb9f7f13cb6ba9a9c469d0b95d9c34e2a20fa6
