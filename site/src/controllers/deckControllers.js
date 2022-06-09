var deckModel = require("../models/deckModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;
    var cor = req.body.corServer;
    var num = req.body.numServer;
    var qtdLands = req.body.qtdLandsServer;
    var qtdArtefatos = req.body.qtdArtefatosServer;
    var qtdEncatamentos = req.body.qtdEncatamentosServer;
    var qtdCriaturas = req.body.qtdCriaturasServer;
    var qtdInstant = req.body.qtdInstantServer;
    var qtdFeitiços = req.body.qtdFeitiçosServer;

    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("O id do usuario está undefined!");
    } else if (cor == undefined) {
        res.status(400).send("Sua Cor está undefined!");
    } else if (qtdLands == undefined) {
        res.status(400).send("Sua quantidade de Lands está undefined!");
    } else if (qtdArtefatos == undefined) {
        res.status(400).send("Sua quantidade de Artefatos está undefined!");
    } else if (qtdEncatamentos == undefined) {
        res.status(400).send("Sua quantidade de Encatamentos está undefined!");
    } else if (qtdCriaturas == undefined) {
        res.status(400).send("Sua quantidade de Criaturas está undefined!");
    } else if (qtdInstant == undefined) {
        res.status(400).send("Sua quantidade de Instant está undefined!");
    } else if (qtdFeitiços == undefined) {
        res.status(400).send("Sua quantidade de Feitços está undefined!");
    } else if (num == undefined) {
        res.status(400).send("Seu numero do deck esta undefined!");
    }

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    deckModel.cadastrar(fkUsuario, cor, num, qtdLands, qtdArtefatos, qtdEncatamentos, qtdCriaturas, qtdInstant, qtdFeitiços)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function analiseDeck(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var num = req.body.numVarServer;
    if (fkUsuario == undefined) {
        res.status(400).send("O id do usuario está undefined!");
    } else if (num == undefined) {
        res.status(400).send("Seu numero do deck esta undefined!");
    }

    deckModel.analiseDeck(fkUsuario, num)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
module.exports = {
    cadastrar,
    analiseDeck
}
