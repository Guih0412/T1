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
        let opcao = -1;

        while (opcao !== 0) {
            // Primeiramente, lista todos os pets de todos os clientes
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

            // Depois de listar todos, pede o CPF do cliente
            let cpfCliente = this.entrada.receberTexto(`\nInsira o CPF do cliente para listar seus pets: \n`);



            // Encontra o cliente com o CPF informado
            let clienteEncontrado = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);
            if (!clienteEncontrado) {
                console.log("CPF do cliente não encontrado.");
                continue; // Continua a execução, pedindo o CPF novamente
            }

            // Se o cliente não tem pets
            if (clienteEncontrado.getPet.length === 0) {
                console.log(`O cliente não possui pets.`);
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
        }
    }
}
