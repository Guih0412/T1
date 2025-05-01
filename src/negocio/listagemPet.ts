import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import Entrada from "../io/entrada";

export default class ListagemPet extends Listagem {
    private cliente: Array<Cliente>;
    private entrada: Entrada;

    constructor(cliente: Array<Cliente>) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public listar(): void {
        let opcao = 'S';

        while (opcao !== 'N') {
            console.log("\nLista de todos os Pets");
            console.log(`--------------------------------------`);
            this.cliente.forEach(cliente => {
                cliente.getPet.forEach(pet => {
                    console.log(`Id: ${pet.getId}`);
                    console.log(`Nome: ${pet.getNome}`);
                    console.log(`Dono: ${cliente.getNome}`);
                    console.log(`Gênero: ${pet.getGenero}`);
                    console.log(`Raça: ${pet.getRaca}`);
                    console.log(`Tipo: ${pet.getTipo}`);
                    console.log(`--------------------------------------`);
                });
            });

            let cpfCliente = this.entrada.receberTexto(`\nInsira o CPF do cliente para listar seus pets ou 0 para voltar ao menu: `);

            if (cpfCliente === '0') {
                console.log("\nVoltando ao menu...");
                return; // Sai da função e volta ao menu
            }

            // Encontra o cliente com o CPF informado
            let clienteEncontrado = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!clienteEncontrado) {
                console.log("CPF do cliente não encontrado. Tente novamente ou digite 0 para voltar.");
                continue; // Se o CPF não for encontrado, o sistema solicita um novo CPF
            }

            // Se o cliente não tem pets
            if (clienteEncontrado.getPet.length === 0) {
                console.log(`O cliente ${clienteEncontrado.getNome} não possui pets.`);
            } else {
                // Lista os pets desse cliente específico
                console.log(`\nLista dos pets do cliente ${clienteEncontrado.getNome}:`);
                console.log(`--------------------------------------`);
                clienteEncontrado.getPet.forEach(pet => {
                    console.log(`Id: ${pet.getId}`);
                    console.log(`Nome: ${pet.getNome}`);
                    console.log(`Gênero: ${pet.getGenero}`);
                    console.log(`Raça: ${pet.getRaca}`);
                    console.log(`Tipo: ${pet.getTipo}`);
                    console.log(`--------------------------------------`);
                });
            }

            // Pergunta ao usuário se deseja continuar ou voltar
            opcao = this.entrada.receberTexto("\nDeseja continuar listando pets? (S/N): ").toUpperCase();

            if (opcao === 'N') {
                console.log("\nVoltando ao menu...");
            } else if (opcao !== 'S') {
                console.log("\nOpção inválida. Por favor, digite 'S' para continuar ou 'N' para voltar ao menu.");
            }
        }
    }
}
