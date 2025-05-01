import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoPet extends Atualizacao {
    private cliente: Cliente[];
    private entrada: Entrada;

    constructor(cliente: Cliente[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let clienteEncontrado: Cliente | undefined;

        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Por favor, informe o CPF do cliente: `);
            clienteEncontrado = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!clienteEncontrado) {
                console.log("Cliente não encontrado.");
                // Pergunta se o usuário quer tentar novamente ou voltar ao menu
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo o CPF
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            }
        }

        if (clienteEncontrado.getPet.length === 0) {
            console.log(`O cliente ${clienteEncontrado.getNome} não possui pets.`);
            return;
        }

        let petEncontrado;

        while (!petEncontrado) {
            let idPet = this.entrada.receberNumero("Insira o ID do pet que deseja atualizar: ");
            petEncontrado = clienteEncontrado.getPet.find(pet => pet.getId === Number(idPet));

            if (!petEncontrado) {
                console.log("Pet não encontrado.");
                // Pergunta se o usuário quer tentar novamente ou voltar ao menu
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo o ID do pet
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            }
        }

        console.log("\nAtualização de dados do Pet");
        console.log("----------");

        let novoNome = this.entrada.receberTexto(`Insira o novo nome do pet: `).trim();
        petEncontrado.setNome(novoNome);

        console.log(`\nNome do pet alterado com sucesso!`);
    }
}
