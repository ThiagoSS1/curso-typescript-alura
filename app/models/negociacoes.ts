import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // Negociacao[] é um Array<Negociacao>

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

