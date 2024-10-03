const { readFileSync } = require('fs');
const Repositorio = require("./repo.js");
const ServicoCalculoFatura = require("./service.js");
const gerarFaturaStr = require("./apresentacao.js");

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
