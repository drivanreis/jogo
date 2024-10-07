const readline = require('readline-sync');
const gerarNumerosAleatorios = require('../../src/gerarNumerosAleatorios'); // Ajuste o caminho conforme necessário
const obterNumerosUsuario = require('../../src/obterNumerosUsuario'); // Importando a função para obter os números do usuário

// Função para verificar quantas vezes a sequência do usuário está presente nas sequências geradas
function contarAcertos(sequenciaUsuario, sequenciasGeradas) {
    return sequenciasGeradas.filter(sequencia => {
        return sequencia.join(',') === sequenciaUsuario.join(',');
    }).length; // Retorna o número de acertos
}

// Gera 10 sequências aleatórias e verifica acertos
function acertaUmSeqEm10Seq() {
    const sequenciaUsuario = obterNumerosUsuario(); // Obtendo a sequência do usuário usando a função existente
    const tentativas = 10;
    const sequenciasGeradas = [];

    for (let i = 0; i < tentativas; i++) {
        sequenciasGeradas.push(gerarNumerosAleatorios(6)); // Chame a função para gerar 6 números aleatórios
    }

    const acertos = contarAcertos(sequenciaUsuario, sequenciasGeradas); // Contando os acertos

    // Mensagem final com a sequência do usuário e o resultado
    console.log(`Sua sequência de números foi: ${sequenciaUsuario.join(', ')}`);
    
    if (acertos > 0) {
        console.log(`Você acertou a sequência ${sequenciaUsuario.join(',')} ${acertos} vez(es)!`);
    } else {
        console.log('Em 10 sequências sorteadas não encontramos nenhuma coincidência.');
    }

    console.log('Sequências geradas:', sequenciasGeradas.sort((a, b) => a[0] - b[0]));
}

// Chama a função principal
acertaUmSeqEm10Seq();
