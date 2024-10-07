// Importa o módulo readline-sync para entrada de dados via terminal
const readlineSync = require('readline-sync');

// Função para capturar os 6 números do usuário
function obterNumerosUsuario() {
    const numerosUsuario = new Set();
    
    // Pede ao usuário para inserir 6 números únicos entre 1 e 60
    while (numerosUsuario.size < 6) {
        const numero = parseInt(readlineSync.question(`Digite um número (${numerosUsuario.size + 1}/6): `), 10);
        
        if (numero >= 1 && numero <= 60 && !numerosUsuario.has(numero)) {
            numerosUsuario.add(numero);
        } else {
            console.log("Número inválido ou repetido. Tente novamente.");
        }
    }
    
    return Array.from(numerosUsuario);
}

// Exporta a função para que ela possa ser usada em outro arquivo
module.exports = obterNumerosUsuario;
