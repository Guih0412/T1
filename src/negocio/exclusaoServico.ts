import Servico from "../modelo/servico";
import Exclusao from "./exclusao";
import Entrada from "../io/entrada";

export default class ExclusaoServico extends Exclusao {
    private servico: Servico[];
    private entrada: Entrada;

    constructor(servico: Servico[]) {
        super();
        this.servico = servico;
        this.entrada = new Entrada();
    }

    public excluir(): void {
        let servicoEncontrado = false;

        // Loop até que o serviço válido seja fornecido
        while (!servicoEncontrado) {
            let idServico = this.entrada.receberNumero(`Insira a ID do serviço a ser excluído: `);
            let indiceServico = this.servico.findIndex(servico => servico.getId === idServico);

            if (indiceServico === -1) {
                console.log("\nServiço não encontrado. Tente novamente.");
            } else {
                servicoEncontrado = true;

                console.log(`\nExclusão do serviço`);
                console.log("----------");
                this.servico.splice(indiceServico, 1);
                console.log(`Serviço excluído com sucesso!`);
            }
        }
    }
}
