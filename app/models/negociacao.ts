export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number, // todos tem acesso, mas somente para leitura dos valores
        public readonly valor: number
    ) { }


    get volume(): number {
        return this.quantidade * this.valor;
    }


    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }
}