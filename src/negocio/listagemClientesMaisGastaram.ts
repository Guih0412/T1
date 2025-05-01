import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

class ListagemTop5ClientesQueMaisGastaram {
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        this.clientes = clientes;
    }

    public listar(): void {
        // Criação de um array com o total consumido por cliente
        const clientesComTotalConsumido = this.clientes.map(cliente => {
            // Somando o total consumido em produtos
            const totalConsumidoProdutos = cliente.getProdutoConsumido.reduce((total, consumo) => {
                return total + consumo.getValorTotal; // Acessando como uma propriedade, sem ()
            }, 0);

            // Somando o total consumido em serviços
            const totalConsumidoServicos = cliente.getServicoConsumido.reduce((total, consumo) => {
                return total + consumo.getValorTotal; // Acessando como uma propriedade, sem ()
            }, 0);

            // Total geral consumido
            const totalConsumido = totalConsumidoProdutos + totalConsumidoServicos;

            return { cliente, totalConsumido };
        });

        // Ordena os clientes pelo total consumido em ordem decrescente
        clientesComTotalConsumido.sort((a, b) => b.totalConsumido - a.totalConsumido);

        // Exibe os 5 clientes que mais consumiram em valor
        console.log("Top 5 Clientes que Mais Consumiram em Valor:");
        console.log("--------------------------------------------");
        for (let i = 0; i < 5 && i < clientesComTotalConsumido.length; i++) {
            const { cliente, totalConsumido } = clientesComTotalConsumido[i];
            console.log(`${i + 1}. ${cliente.getNome} - Total Consumido: R$ ${totalConsumido.toFixed(2)}`);
        }
    }
}

export default ListagemTop5ClientesQueMaisGastaram;
