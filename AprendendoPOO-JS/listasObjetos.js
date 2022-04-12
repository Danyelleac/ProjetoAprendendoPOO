// aqui estou criando um objeto
const cliente = {
    nome:"Maria",
    idade: 22,
    endereço: "Rua das Flores",
    cpf:"231456",
    //aqui estou criando uma lista(Array) dentro de um objeto
    fones:["559123546","5534956325"],
    //aqui estou criando uma lista com um item (e dentro deste item tem varios itens)
    dependentes: [{
    nome:"Sara ",
    parentesco:"filha",
    dataNasc:"20/03/2011"}]
}

//aqui estou imprimindo este objeto
console.log(cliente)

//aqui estou criando mais um item pra minha lista de dependentes
cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/07/2014"
})

//aqui estou imprimindo minha lista
console.log(cliente)

//Aqui estou filtrando na minha lista de dependentes na propriedade dataNacimento para descobrir quem é minha filha mais nova para isso uso o filter e uma Arrow function
const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/07/2014")

//imprimindo dados da filha mais nova
console.log(filhaMaisNova)

//imprimindo nome da filha mais nova
console.log(filhaMaisNova[0].nome)


