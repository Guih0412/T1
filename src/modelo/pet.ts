import GeradorID from "../io/geradorID"

export default class Pet {
    private readonly id: number
    private nome: string
    private tipo: string
    private raca: string
    private genero: string

    constructor(id: number,nome: string, raca: string, genero: string, tipo: string) {
        this.id= GeradorID.gerarIdPet()
        this.nome = nome
        this.raca = raca
        this.genero = genero
        this.tipo = tipo
    }

    public get getId():number{
        return this.id
    }

    public get getNome():string{
        return this.nome
    }

    public get getRaca():string{
        return this.raca
    }

    public get getGenero():string{
        return this.genero
    }

    public get getTipo():string{
        return this.tipo
    }

    public setNome(novoNome: string):void{
        this.nome= novoNome
    }
    public setRaca(novoRaca: string):void{
        this.raca= novoRaca
    }
    public setGenero(novoGenero: string):void{
        this.genero= novoGenero
    }
    public setTipo(novoTipo: string):void{
        this.tipo= novoTipo
    }
}