class ProxyFactory {
    static create (objeto, props, armadilha) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if(typeof(target[prop]) == typeof(Function) && ['adiciona', 'esvazia']
                .includes(prop)) {
                    return function() {
                        console.log(`"${prop}" disparou a armadilha`);
                        target[prop].apply(target, arguments);//executa a função no contexto do objeto
                        armadilha(target);//atualiza a view
                    }
                } else {
                    return target[prop];
                }
            }
        });
    }
}