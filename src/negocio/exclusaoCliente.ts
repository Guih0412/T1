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
                // Pergunta se o usuário deseja tentar novamente ou voltar ao menu
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
                let clienteExcluido = this.cliente[indiceClienteEncontrado];
                console.log(`\nExclusão do cliente`);
                console.log("----------");
                this.cliente.splice(indiceClienteEncontrado, 1);
                console.log(`Cliente ${clienteExcluido.getNome} excluído com sucesso!`);
                clienteEncontrado = true; // Finaliza o loop após a exclusão
            }
        }
    }
}
