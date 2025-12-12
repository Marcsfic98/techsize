


export abstract class Produto{
    
    private _id:number
    private _nome:string
    private _preco:number
    private _descricao:string
    private _quantidade:number
    
    
    constructor(id:number ,nome:string , preco:number , descricao:string , quantidade:number ){
        this._id = id
        this._nome = nome
        this._preco = preco
        this._descricao = descricao
        this._quantidade = quantidade
    }


    public get id(){
        return this._id
    }

    public set id(id:number){
        this._id = id
    }

     public get nome(){
        return this._nome
    }

    public set nome(nome:string){
        this._nome = nome
    }

     public get preco(){
        return this._preco
    }

    public set preco(preco:number){
        this._preco = preco
    }

      public get descricao(){
        return this._descricao
    }

    public set descricao(descricao:string){
        this._descricao = descricao
    }

      public get quantidade(){
        return this._quantidade
    }

    public set quantidade(quantidade:number){
        this._quantidade = quantidade
    }



     public visualizar():void {
        console.log('\n\n************************************************************')
        console.log('DADOS DO PRODUTO:')
        console.log('***********************************************************')
        console.log('ID: ' + this._id);
        console.log('NOME: ' + this._nome)
        console.log('PRECO: '+ this._preco);
        console.log('DESCRICAO: ' + this._descricao);
        console.log('QUANTIDADE: ' + this._quantidade);
        

     }



   
}