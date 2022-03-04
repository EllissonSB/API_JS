const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app=express();
const banco= require('./banco');
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post('/login',async(req, res)=>{
    let response = req.body;
    if (response==null) {
        res.send(JSON.stringify('Error'));
    }
    else{
        if(banco.get_user_password(response.user).password==response.password){
            res.send(JSON.stringify("Usuario: "+banco.get_user_password(response.user).nome)+" Logado com sucesso.");
        }
        else{
            res.send(JSON.stringify("Usuario ou senha incorretos"));
        }
    }
});
app.post('/create',async(req, res)=>{
    let response = req.body;
    if (response==null) {
        res.send(JSON.stringify('Error'));
    }
    else{
        let ver=banco.bd.length;
        banco.banco(response.name,response.user,response.password);
        if (ver<banco.bd.length){
            res.send(JSON.stringify("Usuario: "+response.name+" criado com sucesso."));
        }
        else{
            res.send(JSON.stringify("Não foi possível criar o usuario: "+response.name));
        }
    }
});
app.post('/delete', async (req, res) => {
    let response = req.body;
    a=banco.delete(response.user);
    if(a==null){
        res.send(JSON.stringify("Usuario: "+response.user+" não encontrado."));
    }
    else{
        res.send(JSON.stringify("Usuario: "+a.nome+" deletado com sucesso."));
}})
app.post('/alterar',async(req, res) => {
    let response = req.body;
    
})
let port=process.env.PORT || 3000;
app.listen(port,(req, res) => {
    console.log("SERVER_RODANDO")
});