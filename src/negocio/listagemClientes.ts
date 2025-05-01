import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemCliente extends Listagem {
    private cliente: Array<Cliente>

    constructor(cliente: Array<Cliente>) {
        super()
        this.cliente = cliente
    }
    public listar(): void {
        console.log(`\nLista dos Clientes\n`)
        console.log(`--------------------------------------`);
        this.cliente.forEach(cliente => {
            console.log(`Nome: ` + cliente.getNome);
            console.log(`Nome social: ` + cliente.getNomeSocial);
            console.log(`Telefones: ` + cliente.getTelefone.map(tel => `(${tel.getDdd}) ${tel.getNumero}`).join(", "));

            console.log(`Seus pets: ` + cliente.getPet.map(pet => pet.getNome).join(", "));
            console.log(`--------------------------------------\n`);
        });
        

    }
}