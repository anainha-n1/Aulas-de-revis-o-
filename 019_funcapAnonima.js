function saudacao(nome) {
    console.log(`tenha em bom dia ${nome}!`);
    
}
saudacao("fulaninho");

const saudacaoAnonima = function saudacao(nome) {
    console.log(`tenha em bom dia ${nome}!`);
}
saudacaoAnonima("ciclaninho");


function soma(v1, v2) {
    console.log(v1 + v2);
    
}
soma(7 ,9)

const somaAnonima = function (v1, v2) {
    console.log(v1 + v2);
    
}

const somaArrow = (v1, v2) => {
    console.log(v1 + v2);
    
}

somaAnonima(8, 5,)