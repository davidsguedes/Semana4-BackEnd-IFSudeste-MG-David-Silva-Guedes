const express = require('express');
const bodyparser = require('body-parser'); 
const app = express();


app.use('/contact', function(req, res, next){
    console.log("Início de novo cadastro via formulário.");
    next();
});

app.use(bodyparser.urlencoded({extended: false}));
app.use('/contact', express.static(__dirname + '/public/contact'));


app.post('/contact', (req, res) => {
    console.log("Name: " + req.body.name);
    console.log("Email: " + req.body.email);
    console.log("Subject: " + req.body.subject);
    console.log("Message: " + req.body.message);

    res.redirect('/contact');
});

app.get('*', (req, res) => {
    res.send("Link inválido: 404");

});

app.listen(3000, () => console.log("Servidor executando na porta 3000..."));