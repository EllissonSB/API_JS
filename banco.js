var banco=[]
usuario={
    nome:'',
    user:'',
    password:'',
}
function criar_user(nome,user,password) {
    var usuario=new Object();
    usuario.nome=nome;
    usuario.user=user;
    usuario.password=password;
    return usuario;
}
function adicionar(nome,user,password) {
    banco.push(criar_user(nome,user,password));
}
function get_user_password(user){
    for (let index = 0; index <banco.length; index++) {
        if (banco[index].user==user) 
        return banco[index];
    }
    return null;
}
function delete_user(user){
    let b=[]
    let d=null;
    for (let index = 0; index < banco.length; index++){
        if (banco[index].user!=user){
            b.push(banco[index]);
        }
        else d=banco[index];
    }
    banco=b.splice(0,b.length);
    return d;
}
function alterar_dados(name,user,password){

}
exports.banco = adicionar;
exports.get_user_password=get_user_password;
exports.delete=delete_user;
exports.alter=alterar_dados
exports.bd=banco;