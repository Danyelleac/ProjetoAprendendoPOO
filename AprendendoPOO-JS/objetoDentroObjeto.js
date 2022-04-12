
//declarando meu objeto
const cliente = {
    nome:"Maria",
    idade: 22,
    endereço: "Rua das Flores",
    cpf:"231456",
    fones:["559123546","5534956325"]
}

//declarando um objeto dentro do meu objeto , repare que estou usando o ponto para isso
cliente.dependente = {
    nome:"Sara ",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}
//imprimindo no console as propriedades do meu objeto
console.log(cliente)

//alterando um dado da propriedade nome dentro do meu objeto dependente que esta dentro do obj cliente
cliente.dependente.nome = "Sara Silva"

//imprimindo meu objeto com a modificação supracitada
console.log(cliente)

//aqui estou usando arrow function dentro de um for each que vai varrer toda minha lista e imprimir os dados da lista
cliente.fones.forEach(fone =>console.log(fone))
