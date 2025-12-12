import readlinesync = require("readline-sync");
import { colors } from "./utils/Colors";
import { ProdutoController } from "./controller/ProdutoController";
import { Eletronico } from "./models/Eletronico";

export function main (){
    let produtos:ProdutoController = new ProdutoController()
    let opcao , preco , id , voltagem , quantidade :number
    let nome , descricao :string


    while(true){

   
        console.log(colors.bg.black, colors.fg.magentastrong, 
                    "------------------------------------------------------");
        console.log("                                                     ");
        console.log("                      TECHSIZE                       ");
        console.log("                                                     ");
        console.log("------------------------------------------------------");
        console.log("                                                     ");
        console.log("            1 - ADICIONAR PRODUTO                     ");
        console.log("            2 - REMOVER PRODUTO                       ");
        console.log("            3 - ALTERAR PRODUTO                       ");
        console.log("            4 - LISTAR TODOS PRODUTOS                 ");
        console.log("            5 - MOSTRAR  PRODUTO SELECIONADO          ");
        console.log("            6 - SAIR                                  ");
        console.log("------------------------------------------------------");
        console.log("                                                     ", colors.reset);


         console.log("SELECIONE A OPCAO DESEJADA: ");
        opcao = readlinesync.questionInt("");



          if (opcao == 6) {
            console.log(colors.fg.greenstrong, "\nOBRIGADO POR UTILIZAR NOSSO SISTEMA!");
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong, "\n\nADICIONAR PRODUTO\n\n", colors.reset)

                 console.log('DIGITE O NOME DO PRODUTO: ')
                 nome = readlinesync.question('')

                console.log('DIGITE O PRECO: ')
                preco = readlinesync.questionFloat('')

                console.log('DIGITE A DESCRICAO: ')
                descricao = readlinesync.question('')

                console.log('DIGITE A VOLTAGEM: ')
                voltagem = readlinesync.questionFloat('')

                console.log('DIGITE A QUANTIDADE: ')
                quantidade = readlinesync.questionInt('')

                produtos.adicionarProduto(
                    new Eletronico(produtos.gerarId() , nome , preco , descricao ,quantidade , voltagem) 
                )

                keyPress()
                break

            case 2:
                console.log(colors.fg.whitestrong, "\n\nREMOVER PRODUTO\n\n", colors.reset)
                 console.log('DIGITE O ID DO PRODUTO A SER DELETADO: ')
                 id = readlinesync.questionInt('')

                 produtos.deletarProduto(id)
                keyPress()  
                break
                
            case 3:
                console.log(colors.fg.whitestrong, "\n\nEDITAR PRODUTO\n\n", colors.reset)
                
                 console.log('DIGITE O ID DO PRODUTO A SER EDITADO: ')
                 id = readlinesync.questionInt('')

                 let idSelecionado = produtos.buscaNoArray(id)

                 if(idSelecionado !== null ){

                        console.log('DIGITE O NOME DO PRODUTO: ')
                        nome = readlinesync.question('')

                        console.log('DIGITE O PRECO: ')
                        preco = readlinesync.questionFloat('')

                        console.log('DIGITE A DESCRICAO: ')
                        descricao = readlinesync.question('')

                        console.log('DIGITE A VOLTAGEM: ')
                        voltagem = readlinesync.questionFloat('')

                        console.log('DIGITE A QUANTIDADE: ')
                        quantidade = readlinesync.questionInt('')

                        produtos.alterarProduto(
                            new Eletronico(produtos.id , nome , preco , descricao ,quantidade , voltagem) 
                        )
                 }
 
                keyPress()
                break
                
            case 4:
                console.log(colors.fg.whitestrong, "\n\nLISTAR PRODUTOS\n\n", colors.reset) 
                produtos.listarProdutos()
                keyPress()   
                break

            case 5:
                console.log(colors.fg.whitestrong, "\n\nMOSTRAR PRODUTO\n\n", colors.reset) 
                 
                 console.log('DIGITE O ID DO PRODUTO A SER PROCURADO: ')
                 id = readlinesync.questionInt('')

                 produtos.mostrarProduto(id)

                keyPress()  
                break    
        }

         }



}

 function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main()