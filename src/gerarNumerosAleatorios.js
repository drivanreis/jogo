// Função para gerar um número aleatório entre 1 e 60
function gerarNumerosAleatorios() {
    const numerosSorteados = new Set();
    
    // Gera 6 números aleatórios únicos
    while (numerosSorteados.size < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        numerosSorteados.add(numero);
    }
    
    return Array.from(numerosSorteados);
}

// Exporta a função para que ela possa ser usada em outro arquivo
module.exports = gerarNumerosAleatorios;
