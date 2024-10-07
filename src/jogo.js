// Importa as funções de outros arquivos
const gerarNumerosAleatorios = require('./gerarNumerosAleatorios');
const obterNumerosUsuario = require('./obterNumerosUsuario');
const verificarGanhou = require('./ganhou'); // Importa a função que verifica se o usuário ganhou

// Função principal do jogo
function jogarMegaSena() {
    const numerosUsuario = obterNumerosUsuario();
    const numerosSorteados = gerarNumerosAleatorios();
    
    // Exibe os números do usuário e os números sorteados
    console.log(`\nNúmeros do usuário: ${numerosUsuario}`);
    console.log(`Números sorteados: ${numerosSorteados}`);
    
    // Verifica se o usuário ganhou chamando a função do arquivo ganhou.js
    const ganhou = verificarGanhou(numerosUsuario, numerosSorteados);
    
    // Mostra se o usuário ganhou ou não após exibir os números
    if (ganhou) {
        console.log("GANHOU!");
    } else {
        console.log("TENTE NOVAMENTE!");
    }
}

// Executa o jogo
jogarMegaSena();
