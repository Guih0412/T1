import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";
import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";

export default class AtualizacaoCliente extends Atualizacao {
    private cliente: Cliente[]
    private entrada: Entrada

    constructor(cliente: Cliente[]) {
        super()
        this.cliente = cliente
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let clienteEncontrado: Cliente | undefined

        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Insira o cpf do cliente que deseja atualizar: `)
            clienteEncontrado = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente)

            if (!clienteEncontrado) {
                console.log("Cliente não encontrado.")
                continue
            }
        }

        console.log("\nAtualização de dados do Cliente")
        console.log(`----------`)

        let novoNome = this.entrada.receberTexto("Insira seu novo nome: ").trim()
        clienteEncontrado.setNome(novoNome)

        let novoNomeSocial = this.entrada.receberTexto("Insira seu novo nome social: ").trim()
        clienteEncontrado.setNomeSocial(novoNomeSocial)

        let novoRg = this.entrada.receberTexto("Insira seu novo rg: ")
        let novaDataRg = this.entrada.receberTexto("Insira sua nova data de emissão do RG (aaaa-mm-dd): ")
        clienteEncontrado.setRg([new RG(novoRg, new Date(novaDataRg))])

        let novoDdd = this.entrada.receberTexto("Insira seu novo ddd: ")
        let novoNumero = this.entrada.receberTexto("Novo número do telefone: ")
        clienteEncontrado.setTelefone([new Telefone(novoDdd, novoNumero)])

        console.log(`\nDados do cliente atualizados com sucesso!`)
    }
}
