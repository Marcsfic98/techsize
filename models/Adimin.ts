export abstract class Admin{
    private _email: string
    private _senha:number
     private _numero:number

    constructor(email:string , senha:number , numero:number){
        this._email = email
        this._senha = senha
        this._numero = numero
    }

      public get email(){
        return this._email
    }

    public set email(email:string){
        this._email = email
    }

      public get senha(){
        return this._senha
    }

    public set senha(senha:number){
        this._senha = senha
    }
}