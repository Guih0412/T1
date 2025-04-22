export  default class GeradorID{
    private static idAtualPet = 1
    private static idAtualProduto = 1
    private static idAtualServico = 1

    public static gerarIdPet(): number{
        return this.idAtualPet++
    }

    public static gerarIdProduto(): number{
        return this.idAtualProduto++
    }

    public static gerarIdServico(): number{
        return this.idAtualServico++
    }
}