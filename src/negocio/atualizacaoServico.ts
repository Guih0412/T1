import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
    private servico: Servico[];
    private entrada: Entrada;

    constructor(servico: Servico[]) {
        super();
        this.servico = servico;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let servicoEncontrado: Servico | undefined;

        while (!servicoEncontrado) {
            let idServico = this.entrada.receberNumero(`Insira a ID do serviço que deseja atualizar: `);
            servicoEncontrado = this.servico.find(servico => servico.getId === idServico);

            if (!servicoEncontrado) {
                console.log("Serviço não encontrado.");
                // Pergunta se o usuário quer tentar novamente ou voltar ao menu
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo o ID do serviço
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            }
        }

        console.log("\nAtualização de dados do Serviço");
        console.log("----------");

        let novoNome = this.entrada.receberTexto(`Insira o novo nome do serviço: `).trim();
        servicoEncontrado.setNome(novoNome);

        let novoPreco = this.entrada.receberNumero(`Insira o novo preço do serviço: `);
        servicoEncontrado.setPreco(novoPreco);

        console.log(`\nDados do serviço atualizados com sucesso!`);
    }
}
