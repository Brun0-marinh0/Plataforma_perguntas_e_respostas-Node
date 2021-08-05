const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//estou dizendo para o express usa oEJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));
//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//rotas
app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/perguntar",(req, res)=>{
    res.render("perguntar");
});

app.post("/salvarpergunta",(req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    res.send("Formulário recebido " + titulo +" " + descricao);
});

//------------------------------------
app.listen(8000,()=>{
    console.log("server ligado!");
});
