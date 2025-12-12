import { Admin } from "../models/Adimin"

export interface AdminRepository {
    criarConta(admin:Admin):void
    atualizarConta(admin:Admin):void
    deletarConta(email:string , senha:number):void
    mostrarPerfil(email:string , senha:number):void

    logar(email:string , senha:number):boolean
}