import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Exclusao from "./exclusao";

export default class ExclusaoPet extends Exclusao {
    private cliente: Cliente[];
    private entrada: Entrada;

    constructor(cliente: Cliente[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        let clienteEncontrado = false;

        // Loop até que o CPF válido seja fornecido
        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Insira o CPF do cliente: `);
            let cliente = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!cliente) {
                console.log("Cliente não encontrado. Tente novamente.");
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo o CPF do cliente
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            } else {
                clienteEncontrado = true;

                // Verifica se o cliente tem pets
                if (cliente.getPet.length === 0) {
                    console.log(`O cliente ${cliente.getNome} não possui pets.`);
                    return;
                } else {
                    // Inicia a exclusão de pet
                    let petExcluido = false;
                    while (!petExcluido) {
                        let idPet = this.entrada.receberNumero("Insira o ID do pet a ser excluído: ");
                        let indicePet = cliente.getPet.findIndex(pet => pet.getId === Number(idPet));

                        if (indicePet === -1) {
                            console.log("\nPet não encontrado. Tente novamente.");
                        } else {
                            console.log(`\nExclusão do pet`);
                            console.log("----------");
                            cliente.getPet.splice(indicePet, 1);
                            console.log("Pet excluído com sucesso!");
                            petExcluido = true;
                        }
                    }
                }
            }
        }
    }
}
