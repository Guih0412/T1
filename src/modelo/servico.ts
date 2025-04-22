import GeradorID from "../io/geradorID";

export default class Servico {
    private readonly id: number
    private nome: string;
    private preco: number;
    private consumo: number;

    constructor(id: number, nome: string, preco: number) {
        this.id= GeradorID.gerarIdServico()
        this.nome = nome
        this.preco = preco
        this.consumo = 0
    }
 
    public get getId(): Number{
        return this.id
    }

    public get getNome(): string {
        return this.nome
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getConsumo(): number {
        return this.consumo
    }

    public setNome(novoNome: string): void{
        this.nome = novoNome
    }

    public setPreco(novoPreco: number): void{
        this.preco= novoPreco
    }

    public setConsumo(novoConsumo: number): void{
        this.consumo= novoConsumo
    }

    public registrarConsumo(quantidade: number) {
        if (quantidade) {
            this.consumo = this.consumo + quantidade
        }
    }
}
