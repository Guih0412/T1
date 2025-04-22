# Projeto Pet Lovers

## Descrição
**Pet Lovers** é um sistema de gerenciamento de pet shop que permite a gestão de clientes, pets, serviços e produtos. O sistema oferece as operações básicas de CRUD (Criar, Ler, Atualizar e Deletar) para cada uma dessas entidades.

## Funcionalidades do CRUD

- **Clientes**: Cadastro de clientes, incluindo informações como nome, endereço e telefone. É possível atualizar ou excluir os registros de clientes.
- **Pets**: Registro de animais de estimação, permitindo adicionar informações sobre o nome, espécie, idade, dono, e outras características. É possível editar ou excluir esses registros.
- **Serviços**: Cadastro de serviços oferecidos pela loja, como banho, tosa, consultas veterinárias, entre outros. O CRUD permite gerenciar esses serviços.
- **Produtos**: Gerenciamento de produtos disponíveis para compra, como ração, brinquedos e acessórios para pets. É possível adicionar, editar e excluir produtos do sistema.

## Demais funcionalidades

- **Registro de Consumo de Produtos ou Serviços**: O sistema registra os produtos ou serviços adquiridos por cada cliente, facilitando o gerenciamento do consumo.

- **Listagem dos 10 Clientes que Mais Consumiram**: Exibe os **10 clientes que mais consumiram produtos ou serviços** em quantidade (não em valor), ajudando a identificar os clientes mais frequentes.

- **Listagem Geral dos Produtos ou Serviços Mais Consumidos**: Mostra os **produtos ou serviços mais consumidos** no pet shop, ajudando a analisar itens mais procurados ou de maior rotatividade.

- **Produtos ou Serviços Mais Consumidos por Tipo e Raça de Pets**: Exibe os **produtos ou serviços mais consumidos** de acordo com o tipo e a raça dos pets, facilitando a análise de preferências por categorias de animais.

- **Listagem dos 5 Clientes que Mais Consumiram em Valor**: Apresenta os **5 clientes que mais consumiram em valor** (não em quantidade), permitindo analisar os clientes que geram maior receita.


## Tecnologias
- **Node.js**: Ambiente de execução utilizado para rodar o projeto.
- **TypeScript**: Linguagem usada para garantir tipos e melhorar a manutenção do código.
- **Prompt-sync**: Biblioteca para capturar entradas do usuário via terminal.
- **File System**: Usado para armazenar e gerenciar os dados das entidades (cliente, pet, serviço e produto) em arquivos locais.




## Como rodar o projeto?

1. **Clonar o repositório**: execute o comando `git clone <url-do-repositorio>`
2. **Instale as dependências**: excute o comando `npm install`
3. **Compile o código TypeScript para JavaScript**: execute o comando `npm run build`
4. **Rode o projeto**: execute o comando `npm run dev` toda vez que fizer alguma atualização no código.

-  **Obs: Não precisa exectuar o comando tsc toda vez que atualizar o código**
Não é necessário rodar o comando `tsc` manualmente, porque o TypeScript já está sendo compilado automaticamente quando você executa o comando `npm run dev`. O `ts-node-dev` é responsável por compilar e rodar o código TypeScript em tempo real, o que elimina a necessidade de compilar com `tsc` antes de rodar.


