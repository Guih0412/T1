import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";
import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";
import RG from "../modelo/rg";

export default class AtualizacaoCliente extends Atualizacao {
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
            let cpfCliente = this.entrada.receberTexto(`Insira o CPF do cliente que deseja atualizar: `);
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

        console.log("\nAtualização de dados do Cliente");
        console.log("----------");

        // Atualizando os dados do cliente
        let novoNome = this.entrada.receberTexto("Insira seu novo nome: ").trim();
        clienteEncontrado.setNome(novoNome);

        let novoNomeSocial = this.entrada.receberTexto("Insira seu novo nome social: ").trim();
        clienteEncontrado.setNomeSocial(novoNomeSocial);

        let novoRg = this.entrada.receberTexto("Insira seu novo RG: ");
        let novaDataRg = this.entrada.receberTexto("Insira sua nova data de emissão do RG (aaaa-mm-dd): ");
        clienteEncontrado.setRg([new RG(novoRg, new Date(novaDataRg))]);

        let novoDdd = this.entrada.receberTexto("Insira seu novo DDD: ");
        let novoNumero = this.entrada.receberTexto("Novo número do telefone: ");
        clienteEncontrado.setTelefone([new Telefone(novoDdd, novoNumero)]);

        console.log(`\nDados do cliente atualizados com sucesso!`);
    }
}
