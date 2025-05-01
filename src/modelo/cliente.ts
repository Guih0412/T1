import CPF from "./cpf";
import Pet from "./pet";
import Produto from "./produto";
import RG from "./rg";
import Servico from "./servico";
import Telefone from "./telefone";
import ConsumoProduto from "./consumoProduto";
import ConsumoServico from "./consumoServico";

export default class Cliente {
    public nome: string;
    public nomeSocial: string;
    private cpf: CPF;
    private rg: Array<RG>;
    private dataCadastro: Date;
    private telefone: Array<Telefone>;
    private produtoConsumido: Array<ConsumoProduto>;
    private servicoConsumido: Array<ConsumoServico>;
    private pet: Array<Pet>;

    constructor(nome: string, nomeSocial: string, telefone: Array<Telefone>, rg: Array<RG>, cpf: CPF) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rg = rg;
        this.dataCadastro = new Date();
        this.telefone = telefone;
        this.produtoConsumido = [];
        this.servicoConsumido = [];
        this.pet = [];
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getNomeSocial(): string {
        return this.nomeSocial;
    }

    public get getCpf(): CPF {
        return this.cpf;
    }

    public get getRg(): Array<RG> {
        return this.rg;
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro;
    }

    public get getTelefone(): Array<Telefone> {
        return this.telefone;
    }

    public get getProdutoConsumido(): Array<ConsumoProduto> {
        return this.produtoConsumido;
    }

    public get getServicoConsumido(): Array<ConsumoServico> {
        return this.servicoConsumido;
    }

    public get getPet(): Array<Pet> {
        return this.pet;
    }

    public setNome(novoNome: string): void {
        this.nome = novoNome;
    }

    public setNomeSocial(novoNomeSocial: string): void {
        this.nomeSocial = novoNomeSocial;
    }

    public setCpf(novoCpf: CPF): void {
        this.cpf = novoCpf;
    }

    public setRg(novoRg: Array<RG>): void {
        this.rg = novoRg;
    }

    public setDataCadastro(novoDataCadastro: Date): void {
        this.dataCadastro = novoDataCadastro;
    }

    public setTelefone(novoTelefone: Array<Telefone>): void {
        this.telefone = novoTelefone;
    }

    public adicionarProdutoConsumido(consumo: ConsumoProduto): void {
        this.produtoConsumido.push(consumo);
    }

    public adicionarServicoConsumido(consumo: ConsumoServico): void {
        this.servicoConsumido.push(consumo);
    }

    public adicionarPet(pet: Pet): void {
        this.pet.push(pet);
    }

    public calcularTotalProdutosConsumidos(): number {
        let totalProdutos = 0;
        for (const consumo of this.produtoConsumido) {
            totalProdutos += consumo.getValorTotal;
        }
        return totalProdutos;
    }

    public calcularTotalServicosConsumidos(): number {
        let totalServicos = 0;
        for (const consumo of this.servicoConsumido) {
            totalServicos += consumo.getValorTotal;
        }
        return totalServicos;
    }

    public calcularTotalConsumido(): number {
        const totalProdutos = this.calcularTotalProdutosConsumidos();
        const totalServicos = this.calcularTotalServicosConsumidos();
        return totalProdutos + totalServicos;
    }
}
