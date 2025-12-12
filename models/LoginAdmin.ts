import { Admin } from "./Adimin";


export class LoginAdmin extends Admin {

    constructor(email:string , senha:number, numero:number){
        super(email, senha, numero)
    }
}