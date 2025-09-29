const express = require('express');

const app = express();

// function pgPrincpal(req, res) {
//     res.send('servidor node.js com express!')
    
// }

app.get('/', function(req, res) {
    res.send('servidor node.js com express!')
    
});
app.get('/sobre', function(req, res) {
    res.send('tanana')
    
});
const usuario = ['fulano', 'ciclano', 'beltrano']
app.get('/usuarios', (req, res) => {
   let html = '<h1>lista de usuarios</h1>';
   html = html + '<ul>';
   for (let usuarioTotal of usuario) {
       html = html + `<li>${usuarioTotal}</li>`
   }
   html = html + '</ul>';
   res.send(html);

})


app.get('/usuario/:id', (req, res) =>{
    const id = req.params.id;
    const usuarioSel = usuarios[id];
    if (usuarioSel == undefined){
        res.send('Não esncontrado!')
    } else{
        res.send('perfil')
    }


}) 
  
    res.send('usuario')
    app.get('/soma/:n1/;n2', (req, res) => {
        const n1 = Number(req.params.n1);
         const n2 = Number(req.params.n2);
         const resultado = n1 + n2;
         res.send(`${n1} + ${n2} = ${resultado}`);
    })

    app.get('/menu', (req, res) => {
        let html = `
        <h1>menu</h1>
        <a href="/">principal</a> <br>
         <a href="/sobre">sobre</a> <br>
          <a href="/usuarios">usuarios</a> <br>
           <a href="/usuario/1">usuario 1</a> <br>
                <a href="/usuario/7">usuario invalido </a> <br>
                     <a href="/soma/16/48">soma</a> <br>
        `;
        res.send(html);
    })
 


const porta = 3000;
app.listen(porta, () => {
    console.log(`servidor rodando em http:localhost:${porta}`);
    
})


