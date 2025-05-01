import Produto from "../modelo/produto";
import Exclusao from "./exclusao";
import Entrada from "../io/entrada";

export default class ExclusaoProduto extends Exclusao {
    private produto: Produto[];
    private entrada: Entrada;

    constructor(produto: Produto[]) {
        super();
        this.produto = produto;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        let produtoEncontrado = false;

        // Loop até que o produto válido seja fornecido
        while (!produtoEncontrado) {
            let idProduto = this.entrada.receberNumero(`Insira a ID do produto a ser excluído: `);
            let indiceProduto = this.produto.findIndex(produto => produto.getId === idProduto);

            if (indiceProduto === -1) {
                console.log("\nProduto não encontrado. Tente novamente.");
                let opcao = this.entrada.receberTexto("Deseja tentar novamente? (S para sim / N para voltar ao menu): ").toUpperCase();

                if (opcao === "S") {
                    continue; // Continua pedindo a ID do produto
                } else if (opcao === "N") {
                    console.log("\nVoltando ao menu...");
                    return; // Retorna ao menu
                } else {
                    console.log("\nOpção inválida! Voltando ao menu...");
                    return; // Caso a opção seja inválida, volta ao menu
                }
            } else {
                produtoEncontrado = true;

                console.log(`\nExclusão do produto`);
                console.log("----------");
                this.produto.splice(indiceProduto, 1);  // Exclui o produto da lista
                console.log("Produto excluído com sucesso!");
            }
        }
    }
}
