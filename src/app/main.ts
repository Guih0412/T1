import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import AtualizacaoProduto from "../negocio/atualizacaoProduto";
import AtualizacaoServico from "../negocio/atualizacaoServico";

import CadastroCliente from "../negocio/cadastroCliente";
import CadastroPet from "../negocio/cadastroPet";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";

import ExclusaoCliente from "../negocio/exclusaoCliente";
import ExclusaoPet from "../negocio/exclusaoPet";
import ExclusaoProduto from "../negocio/exclusaoProduto";
import ExclusaoServico from "../negocio/exclusaoServico";

import ListagemCliente from "../negocio/listagemClientes";
import ListagemTop10ClientesMaisConsumiram from "../negocio/listagemClientesMaisConsumiram";
import ListagemTop5ClientesMaisConsumiramValor from "../negocio/listagemClientesMaisGastaram"; // 
import ListagemPet from "../negocio/listagemPet";
import ListagemProduto from "../negocio/listagemProduto";
import ListagemServico from "../negocio/listagemServico";

import Registro from "../negocio/registro";
import RegistroConsumoProduto from "../negocio/registroConsumoProduto";
import RegistroConsumoServico from "../negocio/registroConsumoServico";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias!\n`);
const empresa = new Empresa();
let execucao = true;

while (execucao) {
    console.log(`\n-----Menu Pet Lovers-----`);
    console.log(`1 - Clientes`);
    console.log(`2 - Pets`);
    console.log(`3 - Produtos`);
    console.log(`4 - Serviços\n`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Escolha uma opção: `);

    switch (opcao) {
        case 0:
            execucao = false;
            console.log("\nVolte sempre!");
            break;

        case 1: {
            console.log(`\n----- Menu de Clientes ----`);
            console.log(`1- Cadastrar`);
            console.log(`2- Listar`);
            console.log("3- Listar os clientes que mais consumiram");
            console.log("4- Listar os clientes que mais gastaram");
            console.log(`5- Editar`);
            console.log(`6- Excluir`);
            console.log(`0- Voltar\n`);

            entrada = new Entrada();
            opcao = entrada.receberNumero(`Escolha uma opção: `);

            switch (opcao) {
                case 0:
                    break;
                case 1: {
                    const clienteCadastro = new CadastroCliente(empresa.getCliente);
                    clienteCadastro.cadastrar();
                    break;
                }
                case 2: {
                    const clienteListagem = new ListagemCliente(empresa.getCliente);
                    clienteListagem.listar();
                    break;
                }
                case 3: {
                    const listagemTop10ClientesMaisConsumiram = new ListagemTop10ClientesMaisConsumiram(empresa.getCliente);
                    listagemTop10ClientesMaisConsumiram.listar();
                    break;
                }
                case 4: { // Opção para listar os clientes que mais gastaram
                    const listagemTop5ClientesMaisConsumiramValor = new ListagemTop5ClientesMaisConsumiramValor(empresa.getCliente);
                    listagemTop5ClientesMaisConsumiramValor.listar();
                    break;
                }
                case 5: {
                    const clienteAtualizacao = new AtualizacaoCliente(empresa.getCliente);
                    clienteAtualizacao.atualizar();
                    break;
                }
                case 6: {
                    const clienteExclusao = new ExclusaoCliente(empresa.getCliente);
                    clienteExclusao.excluir();
                    break;
                }
                default:
                    console.log("\nOpção inválida!\n");
            }
            break;
        }

        case 2: {
            console.log(`\n----- Menu de Pets ----`);
            console.log(`1- Cadastrar`);
            console.log(`2- Listar`);
            console.log(`3- Editar`);
            console.log(`4- Excluir`);
            console.log(`0- Voltar\n`);

            entrada = new Entrada();
            opcao = entrada.receberNumero(`Escolha uma opção: `);

            switch (opcao) {
                case 0:
                    break;
                case 1: {
                    const petCadastro = new CadastroPet(empresa.getCliente);
                    petCadastro.cadastrar();
                    break;
                }
                case 2: {
                    const petListagem = new ListagemPet(empresa.getCliente);
                    petListagem.listar();
                    break;
                }
                case 3: {
                    const petAtualizacao = new AtualizacaoPet(empresa.getCliente);
                    petAtualizacao.atualizar();
                    break;
                }
                case 4: {
                    const petExclusao = new ExclusaoPet(empresa.getCliente);
                    petExclusao.excluir();
                    break;
                }
                default:
                    console.log("\nOpção inválida!\n");
            }
            break;
        }

        case 3: {
            console.log(`\n----- Menu de Produtos ----`);
            console.log(`1- Cadastrar`);
            console.log("2- Comprar");
            console.log(`3- Listar`);
            console.log(`4- Listar os produtos mais consumidos`);
            console.log(`5- Listar os produtos mais consumidos por tipos e raças de pet`);
            console.log(`6- Editar`);
            console.log(`7- Excluir`);
            console.log(`0- Voltar\n`);

            entrada = new Entrada();
            opcao = entrada.receberNumero(`Escolha uma opção: `);

            switch (opcao) {
                case 0:
                    break;
                case 1: {
                    const produtoCadastro = new CadastroProduto(empresa.getProduto);
                    produtoCadastro.cadastrar();
                    break;
                }
                case 2: {
                    const produtoCompra = new RegistroConsumoProduto(empresa.getCliente, empresa.getProduto);
                    produtoCompra.registrar();
                    break;
                }
                case 3: {
                    const produtoListagem = new ListagemProduto(empresa.getProduto);
                    produtoListagem.listar();
                    break;
                }
                case 6: {
                    const produtoAtualizacao = new AtualizacaoProduto(empresa.getProduto);
                    produtoAtualizacao.atualizar();
                    break;
                }
                case 7: {
                    const produtoExclusao = new ExclusaoProduto(empresa.getProduto);
                    produtoExclusao.excluir();
                    break;
                }
                default:
                    console.log("\nOpção inválida!\n");
            }
            break;
        }

        case 4: {
            console.log(`\n----- Menu de Serviços ----`);
            console.log(`1- Cadastrar`);
            console.log(`2- Adquirir`);
            console.log(`3- Listar`);
            console.log(`4- Listar os serviços mais consumidos`);
            console.log(`5- Listar os serviços mais consumidos por tipos e raças de pet`);
            console.log(`6- Editar`);
            console.log(`7- Excluir`);
            console.log(`0- Voltar\n`);

            entrada = new Entrada();
            opcao = entrada.receberNumero(`Escolha uma opção: `);

            switch (opcao) {
                case 0:
                    break;
                case 1: {
                    const servicoCadastro = new CadastroServico(empresa.getServico);
                    servicoCadastro.cadastrar();
                    break;
                }
                case 2: {
                    const servicoCompra = new RegistroConsumoServico(empresa.getCliente, empresa.getServico);
                    servicoCompra.registrar();
                    break;
                }
                case 3: {
                    const servicoListagem = new ListagemServico(empresa.getServico);
                    servicoListagem.listar();
                    break;
                }
                case 6: {
                    const servicoAtualizacao = new AtualizacaoServico(empresa.getServico);
                    servicoAtualizacao.atualizar();
                    break;
                }
                case 7: {
                    const servicoExclusao = new ExclusaoServico(empresa.getServico);
                    servicoExclusao.excluir();
                    break;
                }
                default:
                    console.log("\nOpção inválida!\n");
            }
            break;
        }

        default:
            console.log("\nOpção inválida! \n");
            break;
    }
}
