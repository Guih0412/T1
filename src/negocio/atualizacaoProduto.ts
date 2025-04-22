import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao {
    private produto: Produto[]
    private entrada: Entrada

    constructor(produto: Produto[]) {
        super()
        this.produto = produto
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        let produtoEncontrado: Produto | undefined

        while (!produtoEncontrado) {
            let idProduto = this.entrada.receberNumero(`Insira a id do produto que deseja atualizar: `)
            produtoEncontrado = this.produto.find(produto => produto.getId === idProduto)

            if (!produtoEncontrado) {
                console.log("Produto não encontrado.")
                continue
            }
        }

        console.log("\nAtualização de dados do Produto")
        console.log(`----------`)

        let novoNome = this.entrada.receberTexto(`Insira seu novo nome: `).trim()
        produtoEncontrado.setNome(novoNome)

        let novoPreco = this.entrada.receberNumero(`Insira seu novo preço: `)
        produtoEncontrado.setPreco(novoPreco)

        let novoEstoque = this.entrada.receberNumero(`Insira seu novo estoque, em unidades: `)
        produtoEncontrado.setEstoque(novoEstoque)

        console.log(`\nDados do produto atualizados com sucesso!`)
    }
}
