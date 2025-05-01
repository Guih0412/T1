import GeradorID from "../io/geradorID";

export default class Produto {
    private readonly id: number
    private nome: string;
    private preco: number;
    private estoque: number;
    private consumo: number;

    constructor(nome: string, preco: number, estoque: number) {
        this.id = GeradorID.gerarIdProduto()
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
        this.consumo = 0
    }

    public get getId(): number {
        return this.id
    }

    public get getNome(): string {
        return this.nome
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getEstoque(): number {
        return this.estoque
    }

    public get getConsumo(): number {
        return this.consumo
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public setPreco(novoPreco: number): void {
        this.preco = novoPreco
    }

    public setEstoque(novoEstoque: number): void {
        this.estoque = novoEstoque
    }

    public setConsumo(novoConsumo: number): void {
        this.consumo = novoConsumo
    }

    public registrarConsumo(quantidade: number) {
        if (quantidade > 0 && quantidade <= this.estoque) {
            this.estoque = this.estoque - quantidade
            this.consumo = this.consumo + quantidade
            return true
        }
        else {
            return false
        }
    }

    public adicionarEstoque(quantidade: number) {
        if (quantidade > 0) {
            this.estoque = this.estoque + quantidade
            return true
        }
        else {
            return false
        }
    }
}
