import { IAllergics } from "./IAllergics"
import { IDay } from "./IDay"

export interface IPlan{

    Duration :number
    CaloriesTo :number
    CaloriesFrom :number
    Days:IDay[]
    Allergics:IAllergics[]
}