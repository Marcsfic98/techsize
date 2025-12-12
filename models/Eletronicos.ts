import { Produto } from "./Produto"


export class Eletronicos extends Produto{
    private _voltagem:number

    constructor(id:number ,nome:string , preco:number , descricao:string , voltagem:number){
        super(id , nome , preco ,descricao)
        this. _voltagem = voltagem
    }

     public get voltagem(){
        return this._voltagem
    }

    public set voltagem(voltagem:number){
        this._voltagem = voltagem
    }


}