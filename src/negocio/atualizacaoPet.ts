import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoPet extends Atualizacao {
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
            let cpfCliente = this.entrada.receberTexto(`Por favor informe o cpf do cliente: `)
            clienteEncontrado = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente)

            if (!clienteEncontrado) {
                console.log("Cliente não encontrado.")
                continue
            }
        }

        if (clienteEncontrado.getPet.length === 0) {
            console.log(`O cliente ${clienteEncontrado.nome} não possui pets.`)
            return
        }

        let petEncontrado

        while (!petEncontrado) {
            let idPet = this.entrada.receberNumero("Insira o id do pet que deseja atualizar")
            petEncontrado = clienteEncontrado.getPet.find(pet => pet.getId === Number(idPet))

            if (!petEncontrado) {
                console.log("Pet não encontrado")
                continue
            }
        }

        console.log("\nAtualização de dados do Pet")
        console.log(`----------`)

        let novoNome = this.entrada.receberTexto(`Insira seu novo nome: `).trim()
        petEncontrado.setNome(novoNome)

        console.log(`\nNome do pet alterado com sucesso!`)
    }
}
