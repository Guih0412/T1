import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Atualizacao from "./atualizacao";

export default class AtualizacaoProduto extends Atualizacao {
    private produto: Produto[];
    private entrada: Entrada;

    constructor(produto: Produto[]) {
        super();
        this.produto = produto;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        let produtoEncontrado: Produto | undefined;

        while (!produtoEncontrado) {
            let idProduto = this.entrada.receberNumero(`Insira a ID do produto que deseja atualizar: `);
            produtoEncontrado = this.produto.find(produto => produto.getId === idProduto);

            if (!produtoEncontrado) {
                console.log("Produto não encontrado.");
                // Pergunta se o usuário quer tentar novamente ou voltar ao menu
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo o ID do produto
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            }
        }

        console.log("\nAtualização de dados do Produto");
        console.log("----------");

        let novoNome = this.entrada.receberTexto(`Insira o novo nome do produto: `).trim();
        produtoEncontrado.setNome(novoNome);

        let novoPreco = this.entrada.receberNumero(`Insira o novo preço do produto: `);
        produtoEncontrado.setPreco(novoPreco);

        let novoEstoque = this.entrada.receberNumero(`Insira o novo estoque, em unidades: `);
        produtoEncontrado.setEstoque(novoEstoque);

        console.log(`\nDados do produto atualizados com sucesso!`);
    }
}
