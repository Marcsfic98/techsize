import readlinesync = require("readline-sync");
import { colors } from "./utils/Colors";

let opcao :number


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
                keyPress()
                break

            case 2:
                console.log(colors.fg.whitestrong, "\n\nREMOVER PRODUTO\n\n", colors.reset)
                keyPress()  
                break
                
            case 3:
                console.log(colors.fg.whitestrong, "\n\nEDITAR PRODUTO\n\n", colors.reset) 
                keyPress()
                break
                
            case 4:
                console.log(colors.fg.whitestrong, "\n\nLISTAR PRODUTOS\n\n", colors.reset) 
                keyPress()   
                break

            case 5:
                console.log(colors.fg.whitestrong, "\n\nMOSTRAR PRODUTO\n\n", colors.reset)  
                keyPress()  
                break    
        }

         }


 function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
