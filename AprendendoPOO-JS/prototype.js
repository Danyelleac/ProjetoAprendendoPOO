// declaração de prototipo dentro do contrutor cliente
function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

//declarando a variavel andre com prototipo cliente
const andre = new Cliente("André","1254359542","andre@email.com",100)

console.log(andre)

//declaração de prototipo
function clientePoupanca(nome,cpf,email,saldo,saldoPoup){
    //chamando as propriedades prototipas do cliente para dentro do cliente poupança
    Cliente.call(this,nome,cpf,email,saldo)
    //declarando uma propriedade que só tem no cliente poupança
    this.saldoPoup =saldoPoup
}
//usando o prototipo cliente pra declarar os dados de Ju 
const ju = new clientePoupanca("Ju","55656666565","ju@email.com",100,200)

console.log(ju)
//incluindo uma função dentro do  prototipo clientePoupança
clientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup +=valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)
