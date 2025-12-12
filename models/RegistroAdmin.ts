import { Admin } from "./Adimin";

export class RegistroAdmin extends Admin{
    private _confirmeSenha:number
    private _nome:string
    
    constructor(email:string , senha:number , numero:number,confirmeSenha:number,nome:string ){
        super(email, senha , numero)
        this._confirmeSenha = confirmeSenha
        this._nome = nome
    }


      public get confirmeSenha(){
        return this._confirmeSenha
    }

    public set confirmeSenha(confirmeSenha:number){
        this._confirmeSenha = confirmeSenha
    }

      public get nome(){
        return this._nome
    }

    public set nome(nome:string){
        this._nome = nome
    }
}