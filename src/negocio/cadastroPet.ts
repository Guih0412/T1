import Entrada from "../io/entrada";
import Pet from "../modelo/pet";
import Cadastro from "./cadastro";
import Cliente from "../modelo/cliente";
import GeradorID from "../io/geradorID";

export default class CadastroPet extends Cadastro {
    private cliente: Cliente[];
    private entrada: Entrada;

    constructor(cliente: Cliente[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        let clienteEncontrado = false;

        // Loop até que o CPF seja encontrado
        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Insira o CPF do cliente: `);
            let cliente = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!cliente) {
                console.log("\nCliente não encontrado.");
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
            } else {
                clienteEncontrado = true;
                console.log(`\nCadastro do pet`);
                console.log("----------");

                let nome = this.entrada.receberTexto(`\nInsira o nome do pet: `).trim();
                let genero = this.entrada.receberTexto(`Insira o gênero do pet: `).trim();
                let raca = this.entrada.receberTexto(`Insira a raça do pet: `).trim();
                let tipo = this.entrada.receberTexto(`Insira o tipo do pet: `).trim();

                let pet = new Pet(GeradorID.gerarIdPet(), nome, genero, raca, tipo);

                // Usando o método getPets para adicionar o pet
                cliente.getPet.push(pet);

                console.log(`\nPet cadastrado com sucesso!`);
                console.log("----------\n");
            }
        }
    }
}