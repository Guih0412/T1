import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class CadastroCliente extends Cadastro {
    private cliente: Array<Cliente>;
    private entrada: Entrada;

    constructor(cliente: Array<Cliente>) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nCadastro do cliente`);
        console.log("----------");

        let nome = this.entrada.receberTexto(`Insira o nome do cliente: `).trim();
        let nomeSocial = this.entrada.receberTexto(`Insira o nome social do cliente: `).trim();

        let ddd = this.entrada.receberTexto(`Insira o "ddd" do telefone do cliente: `).trim();
        let numeroTelefone = this.entrada.receberTexto(`Insira o número do telefone do cliente: `);
        let telefone = new Telefone(ddd, numeroTelefone);

        let numeroRg = this.entrada.receberTexto(`Insira o número do RG: `).trim();
        // Definindo uma data fixa ou removendo a coleta da data de emissão
        let dataEmissaoRg = new Date(); // Pode ser a data atual, ou uma data fixa.
        let rg = new RG(numeroRg, dataEmissaoRg);

        let numeroCpf: string = "";
        let cpfExiste: boolean = true;

        while (cpfExiste) {
            numeroCpf = this.entrada.receberTexto(`Insira o número do CPF: `).trim();
            cpfExiste = this.cliente.some(c => c.getCpf.getValor === numeroCpf);

            if (cpfExiste) {
                console.log(`\nCPF já cadastrado. Por favor, insira um CPF diferente.`);
            }
        }

        // Definindo uma data fixa ou removendo a coleta da data de emissão
        let dataEmissaoCpf = new Date(); // Pode ser a data atual, ou uma data fixa.
        let cpf = new CPF(numeroCpf, dataEmissaoCpf);

        let cliente = new Cliente(nome, nomeSocial, [telefone], [rg], cpf);
        this.cliente.push(cliente);

        console.log(`\nCliente cadastrado com sucesso!`);
        console.log("----------\n");
    }
}
