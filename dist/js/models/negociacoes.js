export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Negociacao[] é um Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
