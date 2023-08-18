var botaoComecar = document.getElementById('Começar');
var divQuiz = document.getElementById('quiz');
var perguntaElement = document.getElementById('pergunta');
var opcoesElement = document.getElementById('opcoes');
var resultadoElement = document.getElementById('resultado');
var pontuacaoElement = document.getElementById('pontuacao');

// Defina as perguntas e respostas do quiz
const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        resposta: 2 // Índice da opção correta
    },
    {
        pergunta: "Quem foi Schopenhauer?",
        opcoes: ["Um Filosófo", "Um Mátematico", "Um Grego", "Um Fracassado"],
        resposta: 0 // Índice da opção correta
    },
    {
        pergunta: "Qual era a teoria de Galileu Galilei",
        opcoes: ["Terraplanismo", "Ecocentrismo", "Heliocentrismo", "Ele não tinha"],
        resposta: 2 // Índice da opção correta
    },

    {
        pergunta: "Qual é o pokemon favorito de George Simons Ohm?",
        opcoes: ["Lopunny", "Samurott", "Gardevoir", "Pikachu"],
        resposta: 3 // Índice da opção correta
    },
    {
        pergunta: "Se eu não fosse Alexandre o Grande eu seria: 'Complete a frase' ",
        opcoes: ["Ronaldinho Gáucho", "Platão", "Socrates", "Diogenes"],
        resposta: 3 // Índice da opção correta
    },


];

var perguntaAtual = 0;
var pontuacao = 0;
var respostasCorretas = 0;

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual];
    perguntaElement.textContent = pergunta.pergunta;

    opcoesElement.innerHTML = "";
    pergunta.opcoes.forEach((opcao, index) => {
        const opcaoButton = document.createElement("button");
        opcaoButton.textContent = opcao;
        opcaoButton.addEventListener("click", () => verificarResposta(index));
        opcoesElement.appendChild(opcaoButton);
    });
}

function verificarResposta(respostaIndex) {
    const pergunta = perguntas[perguntaAtual];
    if (respostaIndex === pergunta.resposta) {
        pontuacao += 15;
        respostasCorretas++;
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    perguntaElement.textContent = "";
    opcoesElement.innerHTML = "";
    resultadoElement.textContent = `Você acertou ${respostasCorretas} de ${perguntas.length} perguntas!`;
    pontuacaoElement.textContent = `Pontuação: ${pontuacao}`;
}

function iniciarQuiz() {
    divQuiz.style.display = "block";
    exibirPergunta();
}

botaoComecar.addEventListener('click', iniciarQuiz);