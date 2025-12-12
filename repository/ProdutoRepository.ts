import { Produto } from "../models/Produto"


export interface ProdutoRepository{
    adicionarProduto(produto:Produto):void
    deletarProduto(id:number):void
    alterarProduto(produto:Produto):void
    listarProdutos():void
    mostrarProduto(id:number):void
}