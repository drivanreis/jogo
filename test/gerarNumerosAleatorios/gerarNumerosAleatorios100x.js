// Importa a função que queremos testar
const gerarNumerosAleatorios = require('../../src/gerarNumerosAleatorios');

// Variável que define quantas vezes o teste será repetido
const numTestes = 100; // Altere este valor para 1000, 10000, etc.

// Função para testar a geração de números 'numTestes' vezes
function testarGerarNumerosAleatorios() {
    let todasSequencias = [];

    for (let i = 1; i <= numTestes; i++) {
        const numerosSorteados = gerarNumerosAleatorios();

        // Adiciona os números sorteados ao array que contém todas as sequências
        todasSequencias.push(numerosSorteados.sort((a, b) => a - b).join(','));

        // Verifica se a função retorna 6 números
        if (numerosSorteados.length !== 6) {
            console.error(`Erro no teste ${i}: A função gerou ${numerosSorteados.length} números em vez de 6.`);
            continue;
        }

        // Verifica se todos os números estão no intervalo correto (1 a 60)
        const foraDoIntervalo = numerosSorteados.filter(num => num < 1 || num > 60);
        if (foraDoIntervalo.length > 0) {
            console.error(`Erro no teste ${i}: Números fora do intervalo (1-60): ${foraDoIntervalo}`);
            continue;
        }

        // Verifica se todos os números são únicos
        const numerosUnicos = new Set(numerosSorteados);
        if (numerosUnicos.size !== 6) {
            console.error(`Erro no teste ${i}: A função gerou números duplicados: ${numerosSorteados}`);
            continue;
        }

        console.log(`Teste ${i}: Sucesso! Números sorteados: ${numerosSorteados}`);
    }

    // Verifica as repetições de sequências após os 'numTestes' testes
    const repeticoes = contarRepeticoesSequencias(todasSequencias);

    if (Object.keys(repeticoes).length === 0) {
        console.log("\nNenhuma sequência repetida foi encontrada.");
    } else {
        console.log(`\nFoi encontrado ${Object.keys(repeticoes).length} sequência(s) repetida(s):`);
        for (const sequencia in repeticoes) {
            console.log(`A sequência [${sequencia}] foi sorteada ${repeticoes[sequencia]} vezes.`);
        }
    }
}

// Função para contar repetições de sequências
function contarRepeticoesSequencias(sequencias) {
    const contagem = {};

    sequencias.forEach(seq => {
        contagem[seq] = (contagem[seq] || 0) + 1;
    });

    // Filtra e retorna apenas as sequências que apareceram mais de uma vez
    const repeticoes = {};
    for (const seq in contagem) {
        if (contagem[seq] > 1) {
            repeticoes[seq] = contagem[seq];
        }
    }

    return repeticoes;
}

// Executa a função de teste
testarGerarNumerosAleatorios();
