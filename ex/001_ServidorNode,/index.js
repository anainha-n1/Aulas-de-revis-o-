const express = require('express');

const app = express();

app.get('/', function(req, res) {
    res.send('bem vindo!')
    
});
   

const produtos = ['produto 1', 'produto 2', 'produto 3']
app.get('/produtos', (req, res) => {
   let html = '<h1>lista dos produtos</h1>';
   html = html + '<ul>';
 for (let produto of produtos) {
    html = html + `<li>${produto}</li>`;
   }
   html = html + '</ul>';
   res.send(html);

})

app.get('/produtos/:id', (req, res) =>{
    const id = req.params.id;
   app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;          
    const produtoSel = produtos[id];    

    if (produtoSel === undefined) {
        res.send('Produto não encontrado!');
    } else {
        res.send(`Produto ${id}: ${produtoSel}`);
    }
});
   
}) 
 
app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id_produto = produtos[req.params.id_produto];
    const preco = (req.params.preco);
    const qtde = (req.params.qtde);
    const total = preco * qtde;
    res.send(`produto: ${id_produto} | preço: ${preco} | quantidade: ${qtde} | total: ${total}`);
});

app.get('/menu', (req, res) => {
    let html = `
    <h1>menu</h1>
    <a href="/">principal</a> <br>
    <a href="/produtos">produtos</a> <br>
    <a href="/produtos/2">produtos especifico</a><br>
    <a href="total/2/50/5">total</a> <br>
   
    `;
  res.send(html);
})
 
const porta = 3000;
app.listen(porta, () => {
    console.log(`servidor rodando em http:localhost:${porta}`);
    
})
