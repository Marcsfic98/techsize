import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    private dbProdutos :Array<Produto> = new Array<Produto>()
    id: number = 0


     adicionarProduto(): void {
        throw new Error("Method not implemented.")
    }
    deletarProduto(): void {
        throw new Error("Method not implemented.")
    }
    alterarProduto(): void {
        throw new Error("Method not implemented.")
    }
    listarProdutos(): void {
        throw new Error("Method not implemented.")
    }
    mostrarProduto(): void {
        throw new Error("Method not implemented.")
    }
    
}