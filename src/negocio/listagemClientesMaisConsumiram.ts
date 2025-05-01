import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop10ClientesMaisConsumiram extends Listagem {
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const clientesComConsumo = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutoConsumido.reduce((total, consumo) => total + consumo.getQuantidade, 0);
            const totalServicos = cliente.getServicoConsumido.reduce((total, consumo) => total + consumo.getQuantidade, 0);
            const total = totalProdutos + totalServicos;

            return {
                cliente: cliente,
                total: total,
                totalProdutos: totalProdutos,
                totalServicos: totalServicos
            };
        });

        // Ordena do maior para o menor consumo
        clientesComConsumo.sort((a, b) => b.total - a.total);

        // Pega os 10 primeiros
        const top10 = clientesComConsumo.slice(0, 10);

        console.log("\nTop 10 Clientes que mais consumiram:");
        console.log("--------------------------------------------------");

        top10.forEach((entry, index) => {
            const c = entry.cliente;
            console.log(`Top ${index + 1}`);
            console.log(`Nome: ${c.getNome}`);
            console.log(`Produtos consumidos: ${entry.totalProdutos}`);
            console.log(`Serviços consumidos: ${entry.totalServicos}`);
            console.log(`Total geral: ${entry.total}`);
            console.log("--------------------------------------------------");
        });
    }
}
