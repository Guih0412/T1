import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
    private servico: Servico[]
    private entrada: Entrada

    constructor(servico: Servico[]) {
        super()
        this.servico = servico
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let servicoEncontrado: Servico | undefined

        while (!servicoEncontrado) {
            let idServico = this.entrada.receberNumero(`Insira a id do serviço que deseja atualizar: `)
            servicoEncontrado = this.servico.find(servico => servico.getId === idServico)

            if (!servicoEncontrado) {
                console.log("Serviço não encontrado.")
                continue
            }
        }

        console.log("\nAtualização de dados do Serviço")
        console.log(`----------`)

        let novoNome = this.entrada.receberTexto(`Insira seu novo nome: `).trim()
        servicoEncontrado.setNome(novoNome)

        let novoPreco = this.entrada.receberNumero(`Insira seu novo preço: `)
        servicoEncontrado.setPreco(novoPreco)

        console.log(`\nDados do serviço atualizados com sucesso!`)
    }
}
