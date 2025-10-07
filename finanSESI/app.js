const express = require('express');
const ejs = require('ejs');
const app = express();
const expresslayouts = require('express-ejs-layouts');

app.use(expresslayouts);
app.set('layout', 'layouts/principal')

app.use(express.urlencoded({ extended: true }));

app.post('/juros_simples', (req, res) => {
    const capital = req.body.capital
    const taxa = req.body.taxa
    const tempo = req.body.tempo

    const juros = (capital * taxa * tempo) / 100;
    const total = Number(capital) + Number(juros)

    res.render('juros_simples', { capital, taxa, tempo, juros, total })
})

app.post('/juros_compostos', (req, res) => {
    const capital = req.body.capital
    const taxa = req.body.taxa
    const tempo = req.body.tempo

    const juros = capital * (1 + taxa /100) ** tempo;
    const total = Number(capital) + Number(juros)

    res.render('juros_compostos', { capital, taxa, tempo, juros, total })
})

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/sobre', (req, res) => {
    res.render('sobre')
});
app.get('/juros_simples', (req, res) => {
    res.render('juros_simples')
});

app.get('/juros_compostos', (req, res) => {
    res.render('juros_compostos')
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`sevidor rodando em http://localhost:${porta}`);

});