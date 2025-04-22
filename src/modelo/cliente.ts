import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rg: Array<RG>
    private dataCadastro: Date
    private telefone: Array<Telefone>
    private produtoConsumido: Array<Produto>
    private servicoConsumido: Array<Servico>
    private pet: Array<Pet>
    constructor(nome: string, nomeSocial: string, telefone: Array<Telefone>, rg: Array<RG>, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rg = rg
        this.dataCadastro = new Date()
        this.telefone = telefone
        this.produtoConsumido = []
        this.servicoConsumido = []
        this.pet = []
    }
    public get getNome(): string {
        return this.nome
    }

    public get getNomeSocial(): string {
        return this.nomeSocial
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getRg(): Array<RG> {
        return this.rg
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefone(): Array<Telefone> {
        return this.telefone
    }

    public get getProdutoConsumido(): Array<Produto> {
        return this.produtoConsumido
    }

    public get getServicoConsumido(): Array<Servico> {
        return this.servicoConsumido
    }

    public get getPet(): Array<Pet> {
        return this.pet
    }



    public setNome(novoNome: string): void {
        this.nome = novoNome
    }

    public setNomeSocial(novoNomeSocial: string): void {
        this.nomeSocial = novoNomeSocial
    }

    public setCpf(novoCpf: CPF): void {
        this.cpf = novoCpf
    }

    public setRg(novoRg: Array<RG>): void {
        this.rg = novoRg
    }

    public setDataCadastro(novoDataCadastro: Date): void {
        this.dataCadastro = novoDataCadastro
    }

    public setTelefone(novoTelefone: Array<Telefone>): void {
        this.telefone = novoTelefone
    }

    public setProdutoConsumido(novoProdutoConsumido: Array<Produto>): void {
        this.produtoConsumido = novoProdutoConsumido
    }

    public setServicoConsumido(novoServicoConsumido: Array<Servico>): void {
        this.servicoConsumido = novoServicoConsumido
    }

    public setPet(novoPet: Array<Pet>): void {
        this.pet = novoPet
    }
}