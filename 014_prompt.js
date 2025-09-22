const prompt = require('prompt-sync')();

let nome = prompt('qual seu nome?');
console.log(`seja bem vindo(a), ${nome}!`);

let ano = prompt(`${fulano}, que ano vc nasceu?`);
let idade = 2025 - parseInt(ano);
