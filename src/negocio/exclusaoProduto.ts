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
            } else {
                produtoEncontrado = true;

                console.log(`\nExclusão do produto`);
                console.log("----------");
                this.produto.splice(indiceProduto, 1);
                console.log(`Produto excluído com sucesso!`);
            }
        }
    }
}
