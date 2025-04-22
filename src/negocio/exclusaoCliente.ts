import Cliente from "../modelo/cliente";
import Exclusao from "./exclusao";
import Entrada from "../io/entrada";

export default class ExclusaoCliente extends Exclusao {
    private cliente: Cliente[];
    private entrada: Entrada;

    constructor(cliente: Cliente[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        let clienteEncontrado = false;

        // Loop que continua até que o CPF válido seja fornecido
        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Insira o CPF do cliente a ser excluído: `);
            let indiceClienteEncontrado = this.cliente.findIndex(cliente => cliente.getCpf.getValor === cpfCliente);

            if (indiceClienteEncontrado === -1) {
                console.log("\nCliente não encontrado. Tente novamente.");
            } else {
                let clienteExcluido = this.cliente[indiceClienteEncontrado];
                console.log(`\nExclusão do cliente`);
                console.log("----------");
                this.cliente.splice(indiceClienteEncontrado, 1);
                console.log(`Cliente excluído com sucesso!`);
                clienteEncontrado = true;  // Finaliza o loop após exclusão
            }
        }
    }
}
