import Listagem from "./listagem";
import Cliente from "../modelo/cliente";

export default class ListagemProdutosMaisConsumidos extends Listagem {
    private clientes: Cliente[];

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        const consumoTotal: { nome: string, quantidade: number }[] = [];

        this.clientes.forEach(cliente => {
            cliente.getProdutoConsumido.forEach(consumo => {
                const nome = consumo.getProduto.getNome;
                const quantidade = consumo.getQuantidade;
                const item = consumoTotal.find(item => item.nome === nome);

                if (item) {
                    item.quantidade += quantidade;
                } else {
                    consumoTotal.push({ nome, quantidade });
                }
            });

            cliente.getServicoConsumido.forEach(consumo => {
                const nome = consumo.getServico.getNome;
                const quantidade = consumo.getQuantidade;
                const item = consumoTotal.find(item => item.nome === nome);

                if (item) {
                    item.quantidade += quantidade;
                } else {
                    consumoTotal.push({ nome, quantidade });
                }
            });
        });

        consumoTotal.sort((a, b) => b.quantidade - a.quantidade);

        console.log(`\nProdutos e Serviços Mais Consumidos:`);
        console.log(`--------------------------------------`);
        consumoTotal.forEach((item, index) => {
            console.log(`${index + 1}º - ${item.nome} | Quantidade: ${item.quantidade}`);
        });
        console.log(`--------------------------------------`);
    }
}
