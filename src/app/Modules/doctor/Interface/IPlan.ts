import { IAllergics } from "./IAllergics"
import { IDay } from "./IDay"

export interface IPlan{

    Duration :number|null
    CaloriesTo :number
    CaloriesFrom :number
    Days:any[]
    Allergics:IAllergics[]
    DoctorId:string
}