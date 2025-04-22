import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProduto extends Listagem{
    private produto: Array<Produto>

    constructor(produto: Array<Produto>){
        super()
        this.produto= produto
    }

    public listar():void{
        console.log("\nLista dos Produtos\n")
        console.log(`--------------------------------------`)
        this.produto.forEach(produto =>{
            
            console.log(`Id: ${produto.getId}`)
            console.log(`Nome: ${produto.getNome}`)
            console.log(`Preço: R$${produto.getPreco}`)
            console.log(`Estoque disponível: ${produto.getEstoque}unidades`)
            console.log(`Consumo total: ${produto.getConsumo}unidades`)
            console.log(`--------------------------------------`)
        })

    }
}