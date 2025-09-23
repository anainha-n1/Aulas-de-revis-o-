function cauculaComissao(valor, percComissao) {
    return valor * (percComissao / 100);
}

let c = cauculaComissao(456, 98)
console.log(c);
