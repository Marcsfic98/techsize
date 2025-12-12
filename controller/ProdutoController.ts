import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../utils/Colors";

export class ProdutoController implements ProdutoRepository{

    private dbProdutos :Array<Produto> = new Array<Produto>()
    id: number = 0


    adicionarProduto(produto:Produto): void {
        this.dbProdutos.push(produto)

        console.log(colors.fg.green, '\nO Produto: '+ produto.nome + 'foi adicionado com sucesso', colors.reset)
    }
    deletarProduto(id:number): void {
        let produtoDeletado = this.buscaNoArray(id)

        if(produtoDeletado !== null){
            this.dbProdutos.splice(this.dbProdutos.indexOf(produtoDeletado) ,1)
            console.log(colors.fg.green , '\nO PRODUTO: '+ produtoDeletado.nome+ 'FOI DELETADO!', colors.reset)
        }else{
            console.log(colors.fg.red , '\nProduto nao foi encontrado!', colors.reset)
        }
    }


    alterarProduto(produto:Produto): void {
       let buscarProduto = this.buscaNoArray(produto.id)

       if(buscarProduto !== null){
        this.dbProdutos[this.dbProdutos.indexOf(buscarProduto) ] = produto
        console.log(colors.fg.green , '\nO PRODUTO: '+ produto.nome + ' foi atualizada!', colors.reset)
       }else{
             console.log(colors.fg.red , '\nO PRODUTO: '+ produto.nome + ' NAO FOI ENCONTRADO!', colors.reset)
        }
    }
    listarProdutos(): void {
        this.dbProdutos.forEach((item => item.visualizar()))
    }


    mostrarProduto(idItem:number): void {
        let buscarProduto = this.buscaNoArray(idItem)

        if(buscarProduto !== null){
            buscarProduto.visualizar()
        }else{
            console.log(colors.fg.red , '\nProduto nao foi encontrado!', colors.reset)
        }
    }


      public gerarId():number{
        return ++ this.id
    }

     public buscaNoArray(id:number):Produto | null{
        let produtoEncontrado = this.dbProdutos.find((item) => item.id === id)
        return produtoEncontrado ?? null
}

}