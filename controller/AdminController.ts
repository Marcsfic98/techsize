import { Admin } from "../models/Adimin";
import { AdminRepository } from "../repository/AdminRepository";
import { colors } from "../utils/Colors";

export class AdminController implements AdminRepository{

    private dbContas : Array<Admin> = new Array<Admin>()
    private numero = 0

    criarConta(admin: Admin): void {
        this.dbContas.push(admin)
         console.log(colors.fg.green, '\nSUA CONTA FOI CRIADA COM SUCESSO !', colors.reset)
    }
    atualizarConta(admin: Admin): void {
        let buscarPerfil = this.buscaNoArray(admin.email , admin.senha)

       if(buscarPerfil !== null){
        this.dbContas[this.dbContas.indexOf(buscarPerfil) ] = admin
        console.log(colors.fg.green , '\nO Perfil: foi atualizada!', colors.reset)
       }else{
             console.log(colors.fg.red , '\nO Perfil:  NAO FOI ENCONTRADO!', colors.reset)
        }
    }
    deletarConta(email:string , senha:number): void {
        let perfilDeletado = this.buscaNoArray(email , senha)

        if(perfilDeletado !== null){
            this.dbContas.splice(this.dbContas.indexOf(perfilDeletado) ,1)
            console.log(colors.fg.green , '\nO Perfil FOI DELETADO!', colors.reset)
        }else{
            console.log(colors.fg.red , '\nPerfil nao foi encontrado!', colors.reset)
        }
    }
    mostrarPerfil(email:string , senha:number): void {
        let buscarPerfil = this.buscaNoArray(email , senha)

        if(buscarPerfil !== null){
        console.log('\n\n************************************************************')
        console.log('DADOS DO PRODUTO:')
        console.log('***********************************************************')
        console.log('NUMERO: ' );
        console.log('NOME: ' )
        console.log('Email: ' + buscarPerfil.email);
        
        }
    }

     logar(email:string , senha:number):boolean{
        let login = this.buscaNoArray(email , senha)

        if(login !== null){
            console.log(colors.fg.green , '\nVOCE ESTA LOGADO !', colors.reset)
            return true
        }else{
            console.log(colors.fg.red , '\nCONTA NAO ENCRONTRADA !', colors.reset)
            return false
        }
    }


 public buscaNoArray(email:string , senha:number):Admin | null{
        let usuarioEncontrado = this.dbContas.find((conta) => conta.email === email && conta.senha === senha)
        return usuarioEncontrado ?? null
}


  public gerarId():number{
        return ++ this.numero
    }

   
}