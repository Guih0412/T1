import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import GeradorID from "../io/geradorID";

export default class CadastroServico extends Cadastro {
    private servico: Array<Servico>;
    private entrada: Entrada;

    constructor(servico: Array<Servico>) {
        super();
        this.servico = servico;
        this.entrada = new Entrada(); // Corrigido para instanciar corretamente
    }

    public cadastrar(): void {
        console.log(`\nCadastro do serviço`);
        console.log("----------");

        let nome = this.entrada.receberTexto("Por favor insira o nome do serviço: ").trim();
        let preco = this.entrada.receberNumero("Por favor insira o preço do serviço: "); // Corrigido o prompt para mais clareza

        let servico = new Servico(nome, preco);
        this.servico.push(servico);

        console.log(`\nServiço cadastrado com sucesso!`);
        console.log("----------\n");
    }
}
