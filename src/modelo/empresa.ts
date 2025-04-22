import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private cliente: Array<Cliente>
    private produto: Array<Produto>
    private servico: Array<Servico>
    constructor(){
        this.cliente = []
        this.produto = []
        this.servico = []
    }
    public get getCliente(){
        return this.cliente
    }
    public get getProduto(){
        return this.produto
    }
    public get getServico(){
        return this.servico
    }
}