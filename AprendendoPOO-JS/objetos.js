
// este é meu objeto
const cliente = {
    nome:"Maria",
    idade: 22,
    endereço: "Rua das Flores",
    cpf:"231456"
}

//aqui estou imprimindo este objeto
console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
//aqui estou imprimindo alguns numeros do cpf  da segunda a quarta posição 
console.log(cliente.cpf.substring(2,5))


//aqui estou declarando um array
const chaves =["nome", "idade","cpf","endereço"]


//aqui estou acessando  meu objeto pelo posição 0 do meu  array 
console.log (cliente[chaves[0]])

//aqui estou imprimindo cada item do meu objeto através dos itens do meu array
chaves.forEach(info=>console.log(cliente[info]))

//aqui estou inserindo mais um item no meu objeto
cliente.fone ="2358843"
console.log(cliente)

//aqui estou atualizando meu item com um novo numero
cliente.fone ="1122244"
console.log(cliente)

