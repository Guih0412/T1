
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem{
    private servico: Array<Servico>

    constructor(servico: Array<Servico>){
        super()
        this.servico= servico
    }

    public listar():void{
        console.log("\nLista dos Serviços\n")
        console.log(`--------------------------------------`)
        this.servico.forEach(servico =>{
            console.log(`Id: ${servico.getId}`)
            console.log(`Nome: ${servico.getNome}`)
            console.log(`Preço: R$${servico.getPreco}`)
            console.log(`Total consumido: ${servico.getConsumo} unidades`)
            console.log(`--------------------------------------`)
        })

    }
}