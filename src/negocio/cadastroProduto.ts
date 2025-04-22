import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import GeradorID from "../io/geradorID";

export default class CadastroProduto extends Cadastro {
    private produto: Array<Produto>;
    private entrada: Entrada;

    constructor(produto: Array<Produto>) {
        super();
        this.entrada = new Entrada(); // Corrigido para instanciar corretamente
        this.produto = produto;
    }

    public cadastrar(): void {
        console.log(`\nCadastro do produto`);
        console.log("----------");

        let nome = this.entrada.receberTexto("Insira o nome do produto: ").trim();
        let preco = this.entrada.receberNumero("Insira o preço: ");
        let estoque = this.entrada.receberNumero("Insira o estoque: ");

        // Usando o método correto para gerar ID de Produto
        let produto = new Produto(GeradorID.gerarIdProduto(), nome, preco, estoque); // Alterado para gerarIdProduto()
        this.produto.push(produto);

        console.log(`\nProduto cadastrado com sucesso!`);
        console.log("----------\n");
    }
}
