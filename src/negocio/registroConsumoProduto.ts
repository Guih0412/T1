import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Registro from "./registro";
import Cliente from "../modelo/cliente";
import ConsumoProduto from "../modelo/consumoProduto";

export default class RegistroConsumoProduto extends Registro {
    private cliente: Cliente[];
    private produto: Produto[];
    private entrada: Entrada;

    constructor(cliente: Cliente[], produto: Produto[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.produto = produto;
    }

    public registrar(): void {
        let clienteEncontrado = false;

        // Loop até que o CPF seja encontrado ou o usuário queira voltar ao menu
        while (!clienteEncontrado) {
            let cpfCliente = this.entrada.receberTexto(`Insira o CPF do cliente: `);

            let cliente = this.cliente.find(cliente => cliente.getCpf.getValor === cpfCliente);

            if (!cliente) {
                console.log("\nCliente não encontrado. Tente novamente.");
                let opcaoVoltar = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                if (opcaoVoltar === 'N') {
                    console.log("\nVoltando ao menu...");
                    return; // Sai da função e volta ao menu
                }
            } else {
                clienteEncontrado = true;
                console.log(`\nRegistro de Consumo de Produto`);
                console.log("----------");

                let produtoEncontrado = false;

                // Loop até que o produto seja encontrado
                while (!produtoEncontrado) {
                    let idProduto = this.entrada.receberNumero(`\nInsira o ID do produto a ser comprado: `);

                    let produto = this.produto.find(produto => produto.getId === idProduto);

                    if (!produto) {
                        console.log("\nProduto não encontrado. Tente novamente.");
                        let opcaoProduto = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                        if (opcaoProduto === 'N') {
                            console.log("\nVoltando ao menu...");
                            return; // Sai da função e volta ao menu
                        }
                    } else {
                        produtoEncontrado = true;

                        let quantidadeProdutos = this.entrada.receberNumero("\nInsira o número de produtos desse ID a ser comprado: ");
                        if (quantidadeProdutos <= 0) {
                            console.log("\nQuantidade inválida. Digite um número maior que zero.");
                            let opcaoQuantidade = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                            if (opcaoQuantidade === 'N') {
                                console.log("\nVoltando ao menu...");
                                return; // Sai da função e volta ao menu
                            }
                            continue; // Continua o loop para que o usuário tente novamente
                        }

                        if (produto.registrarConsumo(quantidadeProdutos)) {
                            const consumo = new ConsumoProduto(produto, quantidadeProdutos);
                            cliente.adicionarProdutoConsumido(consumo);
                            console.log("\nProduto comprado com sucesso!");
                            console.log("----------\n");

                            // Pergunta se deseja continuar com o registro de consumo de outro produto
                            let opcaoContinuar = this.entrada.receberTexto("Deseja continuar registrando o consumo de outro produto? (S/N): ").toUpperCase();
                            if (opcaoContinuar === 'N') {
                                console.log("\nVoltando ao menu...");
                                return; // Sai da função e volta ao menu
                            } else if (opcaoContinuar !== 'S') {
                                console.log("\nOpção inválida. Por favor, digite 'S' para continuar ou 'N' para voltar ao menu.");
                            }
                        } else {
                            console.log("\nQuantidade inválida ou insuficiente no estoque.");
                            let opcaoQuantidadeInsuficiente = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                            if (opcaoQuantidadeInsuficiente === 'N') {
                                console.log("\nVoltando ao menu...");
                                return; // Sai da função e volta ao menu
                            }
                        }
                    }
                }
            }
        }
    }
}
