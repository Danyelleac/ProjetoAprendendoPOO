class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome= nome
        this.email =email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo +=valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new Cliente("Andre","andre@gmail.com","12355665656",100)

andre.exibirSaldo()
andre.depositar(50)
andre.exibirSaldo()

console.log(andre)