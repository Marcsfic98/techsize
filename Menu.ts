import readlinesync = require("readline-sync");
import { colors } from "./utils/Colors";
import { ProdutoController } from "./controller/ProdutoController";
import { Eletronico } from "./models/Eletronico";
import { AdminController } from "./controller/AdminController";
import { RegistroAdmin } from "./models/RegistroAdmin";

export function main (){


let contas:AdminController = new AdminController() 
let opcaoLogin,senha,confirmSenha :number
let nomeUser, email   :string
let logado , del :boolean  = false


 while(true){

   
        console.log(colors.bg.black, colors.fg.magentastrong, 
                    "------------------------------------------------------");
        console.log("                                                     ");
        console.log("               SEJA BEM VINDO A TECHSIZE              ");
        console.log("                                                     ");
        console.log("------------------------------------------------------");
          console.log("                                                     ");
        console.log("                    FACA SEU LOGIN                   ");
        console.log("                                                     ");
        console.log("------------------------------------------------------");
        console.log("                                                     ");
        console.log("            1 - ENTRAR                     ");
        console.log("            2 - CRIAR CONTA                      ");
        console.log("            3 - SAIR                                  ");
        console.log("------------------------------------------------------");
        console.log("                                                     ", colors.reset);


         console.log("SELECIONE A OPCAO DESEJADA: ");
        opcaoLogin = readlinesync.questionInt("");

         if (opcaoLogin == 3) {
            console.log(colors.fg.greenstrong, "\nOBRIGADO POR UTILIZAR NOSSO SISTEMA!");
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch(opcaoLogin){

            case 1:
                  console.log(colors.fg.whitestrong, "\n\nFAZER LOGIN\n\n", colors.reset)

                  console.log('DIGITE SEU E-MAIL: ')
                 email = readlinesync.question('')

                 console.log('DIGITE SUA SENHA: ')
                 senha= readlinesync.questionInt('')

                 logado = contas.logar(email,senha)

                 
                  keyPress()
                  break

            case 2: 
                  console.log(colors.fg.whitestrong, "\n\nCRIAR CONTA\n\n", colors.reset) 

                 console.log('DIGITE SEU NOME: ')
                 nomeUser = readlinesync.question('')

                 console.log('DIGITE SEU E-MAIL: ')
                 email = readlinesync.question('')

                 console.log('DIGITE SUA SENHA: ')
                 senha= readlinesync.questionInt('')

                 console.log('CONFIRME SUA SENHA: ')
                 confirmSenha = readlinesync.questionInt('')


                 if(senha === confirmSenha){
                    contas.criarConta(
                        new RegistroAdmin(email , senha , contas.gerarId(),confirmSenha,nomeUser)
                        
                    )
            
                 }else{
                    console.log(colors.fg.red , '\nSENHAS NAO COINCIDEM!', colors.reset)
                 }
               keyPress()
                  break     
        }

        if(logado === true){

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
        console.log("            6 - ATUALIZAR CONTA                       ");
        console.log("            7 - DELETAR CONTA                         ");
        console.log("            8 - MOSTRAR PERFIL                        ");
        console.log("            9 - SAIR                                  ");
        console.log("------------------------------------------------------");
        console.log("                                                     ", colors.reset);


         console.log("SELECIONE A OPCAO DESEJADA: ");
        opcao = readlinesync.questionInt("");



          if (opcao == 9) {
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


                case 6:
                    console.log(colors.fg.whitestrong, "\n\nATUALIZAR CONTA\n\n", colors.reset)

                console.log('CONFIRME SEU E-MAIL: ')
                 email = readlinesync.question('')

                 console.log('CONFIRME SUA SENHA: ')
                 senha= readlinesync.questionInt('')

                 let contaAdmin = contas.buscaNoArray(email , senha)


                 if(contaAdmin !==null){

                     console.log('DIGITE SEU NOME: ')
                 nomeUser = readlinesync.question('')

                 console.log('DIGITE SEU E-MAIL: ')
                 email = readlinesync.question('')

                 console.log('DIGITE SUA SENHA: ')
                 senha= readlinesync.questionInt('')

                 console.log('CONFIRME SUA SENHA: ')
                 confirmSenha = readlinesync.questionInt('')


                 if(senha === confirmSenha){
                    contas.atualizarConta(
                        new RegistroAdmin(email , senha , contas.gerarId(),confirmSenha,nomeUser)
                        
                    )
            
                 }else{
                    console.log(colors.fg.red , '\nSENHAS NAO COINCIDEM!', colors.reset)
                 }

                }
               keyPress()
                  break     


                  case 7:
                    console.log(colors.fg.whitestrong, "\n\nDELETAR CONTA\n\n", colors.reset)


            
                    del = readlinesync.keyInYNStrict('QUER MESMO DELETAR SUA CONTA?')

                    if(del === true){
                    console.log('CONFIRME SEU E-MAIL: ')
                    email = readlinesync.question('')

                    console.log('CONFIRME SUA SENHA: ')
                    senha= readlinesync.questionInt('')


                    contas.deletarConta(email , senha)
                    }
                    console.log(colors.fg.greenstrong, "\nOBRIGADO POR UTILIZAR NOSSO SISTEMA!");
                    console.log(colors.reset, "");
                    process.exit(0);
                       


                    case 8:
                        console.log(colors.fg.whitestrong, "\n\nMOSTRAR PERFIL\n\n", colors.reset)


                    console.log('CONFIRME SEU E-MAIL: ')
                    email = readlinesync.question('')

                    console.log('CONFIRME SUA SENHA: ')
                    senha= readlinesync.questionInt('')


                    contas.mostrarPerfil(email , senha)


                
        }

         }


        }


        }


 

}

 function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main()