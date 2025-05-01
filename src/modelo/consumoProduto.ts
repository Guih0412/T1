// novo arquivo: modelo/consumoProduto.ts
import Produto from "./produto";

export default class ConsumoProduto {
    private produto: Produto;
    private quantidade: number;
    private valorTotal: number;

    constructor(produto: Produto, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.valorTotal = produto.getPreco * quantidade;
    }

    public get getProduto(): Produto {
        return this.produto;
    }

    public get getQuantidade(): number {
        return this.quantidade;
    }

    public get getValorTotal(): number {
        return this.valorTotal;
    }
}
