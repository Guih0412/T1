import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Registro from "./registro";
import Cliente from "../modelo/cliente";
import ConsumoServico from "../modelo/consumoServico";

export default class RegistroConsumoServico extends Registro {
    private cliente: Cliente[];
    private servico: Servico[];
    private entrada: Entrada;

    constructor(cliente: Cliente[], servico: Servico[]) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.servico = servico;
    }

    public registrar(): void {
        let clienteEncontrado = false;

        // Loop até que o CPF seja encontrado ou o usuário deseje voltar ao menu
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
                console.log(`\nRegistro de Consumo de Serviço`);
                console.log("----------");

                let servicoEncontrado = false;

                // Loop até que o serviço seja encontrado ou o usuário deseje voltar ao menu
                while (!servicoEncontrado) {
                    let idServico = this.entrada.receberNumero(`\nInsira o ID do serviço a ser adquirido: `);

                    let servico = this.servico.find(servico => servico.getId === idServico);

                    if (!servico) {
                        console.log("\nServiço não encontrado. Tente novamente.");
                        let opcaoServico = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                        if (opcaoServico === 'N') {
                            console.log("\nVoltando ao menu...");
                            return; // Sai da função e volta ao menu
                        }
                    } else {
                        servicoEncontrado = true;

                        let quantidadeServicos = this.entrada.receberNumero("\nInsira o número de serviços desse ID a ser adquirido: ");
                        if (quantidadeServicos <= 0) {
                            console.log("\nQuantidade inválida. Digite um número maior que zero.");
                            let opcaoQuantidade = this.entrada.receberTexto("Deseja tentar novamente? (S/N): ").toUpperCase();
                            if (opcaoQuantidade === 'N') {
                                console.log("\nVoltando ao menu...");
                                return; // Sai da função e volta ao menu
                            }
                            continue; // Continua o loop para que o usuário tente novamente
                        }

                        if (servico.registrarConsumo(quantidadeServicos)) {
                            const consumo = new ConsumoServico(servico, quantidadeServicos);
                            cliente.adicionarServicoConsumido(consumo);
                            console.log("\nServiço adquirido com sucesso!");
                            console.log("----------\n");

                            // Pergunta se deseja continuar com o registro de consumo de outro serviço
                            let opcaoContinuar = this.entrada.receberTexto("Deseja continuar registrando o consumo de outro serviço? (S/N): ").toUpperCase();
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
