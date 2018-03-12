class Negociacoes {
    constructor(contexto, armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //Método call passa em qual contexto sera executado a função
        this._armadilha.call(this._contexto, this); //Passa o contexto de NegociacaoController.js e também o contexto de Negociacoes.js(Model)
    }

    paraArray() {
        return [].concat(this._negociacoes);
    }

    get volumeTotal(){
        return this._negociacoes
            .reduce( (total, negociacao) => 
                total+negociacao.volume, 0);
    }

    esvazia() {
        this._negociacoes.length = 0;
        this._armadilha.call(this._contexto, this);//Passa o contexto de NegociacaoController.js e também o contexto de Negociacoes.js(Model)
    }

}