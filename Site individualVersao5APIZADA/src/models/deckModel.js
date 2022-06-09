var database = require("../database/config")

function cadastrar(fkUsuario, cor, num, qtdLands, qtdArtefatos, qtdEncatamentos, qtdCriaturas, qtdInstant, qtdFeitiços) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");
   // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
    insert into deck(fkUsuario, cor, numDeck, qtdLands, qtdArtefatos, qtdEncatamentos, qtdCriaturas, qtdInstant, qtdFeitiços) values
    (${fkUsuario}, '${cor}',${num}, ${qtdLands}, ${qtdArtefatos}, ${qtdEncatamentos}, ${qtdCriaturas}, ${qtdInstant}, ${qtdFeitiços}) ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function analiseDeck(fkUsuario, num) {
    var instrucao = `
    select * from deck WHERE numDeck = ${num} and fkUsuario = ${fkUsuario};`;
    return database.executar(instrucao);
}
module.exports = {
    cadastrar,
    analiseDeck
}
