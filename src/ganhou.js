// Função que verifica se o usuário ganhou
function verificarGanhou(numerosUsuario, numerosSorteados) {
    return numerosUsuario.every(num => numerosSorteados.includes(num));
}

// Exporta a função para que ela possa ser usada em outro arquivo
module.exports = verificarGanhou;
