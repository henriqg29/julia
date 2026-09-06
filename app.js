const fotos = [
    "imagens/foto1.jpeg",
    "imagens/foto2.jpeg",
    "imagens/foto3.jpeg",
    "imagens/foto4.jpeg",
    "imagens/foto5.jpeg",
    "imagens/foto6.jpeg",
    "imagens/foto7.jpeg",
    "imagens/foto8.jpeg",
    "imagens/foto9.jpeg",
    "imagens/foto10.jpeg"
];

const recados = [
    "Aquela sensação de que tudo fica mais leve e melhor é a mais sincera que sinto com você",
    "Você é uma das certezas mais bonitas que eu tenho.",
    "Uma das coisas que eu mais gosto é perceber que até os momentos mais simples ficam melhores quando são com você.",
    "Essa aqui me lembra o quanto eu amo poder compartilhar minha vida com você.",
    "E pensar que, depois de tantos anos, ainda assim eu tive a sorte de te reencontrar, e me apaixono por você todos os dias.",
    "Você não é só alguém que eu amo. Você é alguém com quem eu amo viver a vida.",
    "Eu amo ter memórias com você, mas acho que amo ainda mais a ideia de criar tantas outras.",
    "Eu amo a vida um pouquinho mais desde que comecei a dividir ela com você.",
    "Eu amo nossas risadas, nossas conversas, nossos momentos aleatórios… amo simplesmente ter você na minha vida.",
    "Talvez você não perceba sempre, mas eu olho pra você e penso várias vezes: “caramba, como eu amo essa menina”. ❤️"
];

let fotoAtual = 0;


// =========================
// ABRIR PRESENTE
// =========================

function abrirPresente() {

    const telaInicial = document.getElementById("tela-inicial");
    const conteudo = document.getElementById("conteudo");

    telaInicial.classList.add("fechando");

    setTimeout(function () {

        telaInicial.style.display = "none";

        conteudo.classList.add("aparecer");

        mostrarFoto();

    }, 800);
}


// =========================
// MOSTRAR FOTO
// =========================

function mostrarFoto() {

    const imagem = document.getElementById("foto");
    const contador = document.getElementById("contador");
    const recado = document.getElementById("recado");

    imagem.classList.remove("trocando");

    void imagem.offsetWidth;

    imagem.src = fotos[fotoAtual];

    contador.textContent =
        String(fotoAtual + 1).padStart(2, "0") +
        " / " +
        String(fotos.length).padStart(2, "0");

    recado.textContent = recados[fotoAtual];

    imagem.classList.add("trocando");
}


// =========================
// PRÓXIMA FOTO
// =========================

function proximaFoto() {

    // Se estiver na última foto
    if (fotoAtual === fotos.length - 1) {

        mostrarTelaFinal();

        return;
    }

    // Vai para a próxima
    fotoAtual++;

    mostrarFoto();
}


// =========================
// FOTO ANTERIOR
// =========================

function voltarFoto() {

    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }

    mostrarFoto();
}

// =========================
// SWIPE NO CELULAR
// =========================

const foto = document.getElementById("foto");

let inicioX = 0;
let fimX = 0;


// Quando o dedo toca na foto
foto.addEventListener("touchstart", function (evento) {

    inicioX = evento.touches[0].clientX;

});


// Quando o dedo sai da foto
foto.addEventListener("touchend", function (evento) {

    fimX = evento.changedTouches[0].clientX;

    verificarSwipe();

});


// Verifica para qual lado foi arrastado
function verificarSwipe() {

    const distancia = inicioX - fimX;


    // Arrastou para a esquerda
    if (distancia > 50) {

        proximaFoto();

    }


    // Arrastou para a direita
    if (distancia < -50) {

        voltarFoto();

    }

}

function controlarMusica() {

    const musica = document.getElementById("musica");

    if (musica.paused) {

        musica.play();

    } else {

        musica.pause();

    }

}

// =========================
// MOSTRAR TELA FINAL
// =========================

function mostrarTelaFinal() {

    const conteudo =
        document.getElementById("conteudo");

    const telaFinal =
        document.getElementById("tela-final");


    // Esconde o carrossel
    conteudo.style.display = "none";


    // Mostra a tela final
    telaFinal.classList.add("aparecer-final");

}


// =========================
// MENSAGEM FINAL
// =========================

function mostrarMensagemFinal() {

    const mensagem =
        document.getElementById("mensagem-final");


    mensagem.classList.add("mostrar");

}