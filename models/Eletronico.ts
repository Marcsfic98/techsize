import { Produto } from "./Produto"


export class Eletronico extends Produto{
    private _voltagem:number

    constructor(id:number ,nome:string , preco:number , descricao:string , quantidade:number , voltagem:number ){
        super(id , nome , preco ,descricao , quantidade)
        this. _voltagem = voltagem
    }

     public get voltagem(){
        return this._voltagem
    }

    public set voltagem(voltagem:number){
        this._voltagem = voltagem
    }

    public visualizar():void {
        super.visualizar()
        console.log('VOLTAGEM: ' + this._voltagem);
    }


}