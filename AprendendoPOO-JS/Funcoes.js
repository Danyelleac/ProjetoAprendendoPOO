
//declarando meu objeto
const cliente = {
    nome:"Maria",
    idade: 22,
    endereço: "Rua das Flores",
    cpf:"231456",
    fones:["559123546","5534956325"],
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
    saldo:100,
    //crio uma função dentro do meu objeto e chamo ela de depositar
    depositar:function(valor){
        this.saldo += valor
    }
}
//imprimindo saldo do cliente
console.log(cliente.saldo)
//chamando a função depositar e depositando 30 reais
cliente.depositar(30)
//imprimindo saldo do cliente
console.log(cliente.saldo)
//declarando uma variavel vazia
let relatorio="";
//estou usando o for in , ele esta percorrendo o objeto cliente e a posição é o info
for(let info in cliente)
{
    //se o tipo de dado for um objeto ou uma função ele vai continuar a varredura
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }
    //se não for, ele vai incluir na minha variavel relatório a propriedade: e o dado dentro da propriedade 
    else{
        relatorio += `${info}= ${cliente[info]}`
    }

}
//imprimi no console o relatorio
console.log(relatorio)

//aqui estou acessando minhas chaves(propriedades do objeto) e inserindo elas em minha variavel props
const propsCliente = Object.keys(cliente);

//aqui estou imprimindo esta variavel
console.log(propsCliente)

//criando uma function que vai ofertar para o meu cliente  um seguro de vida para o meu cliente se ele tiver dependentes
function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    //perguntando se inclui dependentes na lista
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log (Object.entries(cliente))

oferecerSeguro(cliente)