const clientes =[
    {
    nome:"Maria",
    cpf:"231436756",
    dependentes: [
        {
            nome:"Sara ",
            parentesco:"filha",
            dataNasc:"20/03/2011"},
        {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/07/2014" }
    ],
    },
    {
        nome:"Joana",
        cpf:"235561456",
        dependentes: [
            {
                nome:"Julia ",
                parentesco:"filha",
                dataNasc:"30/08/2012"},
            ]
    }
]

//aqui estou pedindo pra minha lista dependentes acessar minha array de dependentes dentro do cliente pegar os dados e espalhar na minha listaDependentes
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

//serve para mostrar minha lista em uma tabela de maneira organizada
console.table(listaDependentes)