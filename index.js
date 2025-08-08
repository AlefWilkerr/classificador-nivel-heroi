// index.js — versão Node local (VS Code)

const fs = require('fs');

function lerEntrada() {
  // 1) tenta via argumentos: node index.js Merlin 5500
  if (process.argv.length >= 4) {
    const [, , nomeArg, xpArg] = process.argv;
    return [nomeArg, Number(xpArg)];
  }

  // 2) senão, tenta ler do stdin (ex.: "Merlin 5500")
  const data = fs.readFileSync(0, 'utf8').trim();
  if (data) {
    const [nome, xpStr] = data.split(/\s+/);
    return [nome, Number(xpStr)];
  }

  // 3) fallback para teste rápido
  return ['Herói', 0];
}

const [nome, xp] = lerEntrada();

let nivel = '';

if (xp < 1000) {
  nivel = 'Ferro';
} else if (xp <= 2000) {
  nivel = 'Bronze';
} else if (xp <= 5000) {
  nivel = 'Prata';
} else if (xp <= 7000) {
  nivel = 'Ouro';
} else if (xp <= 8000) {
  nivel = 'Platina';
} else if (xp <= 9000) {
  nivel = 'Ascendente';
} else if (xp <= 10000) {
  nivel = 'Imortal';
} else {
  nivel = 'Radiante';
}

console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);





