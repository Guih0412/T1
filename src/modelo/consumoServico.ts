import Servico from "./servico";

export default class ConsumoServico {
    private servico: Servico;
    private quantidade: number;
    private valorTotal: number;

    constructor(servico: Servico, quantidade: number) {
        this.servico = servico;
        this.quantidade = quantidade;
        this.valorTotal = servico.getPreco * quantidade;
    }

    public get getServico(): Servico {
        return this.servico;
    }

    public get getQuantidade(): number {
        return this.quantidade;
    }

    public get getValorTotal(): number {
        return this.valorTotal;
    }
}
