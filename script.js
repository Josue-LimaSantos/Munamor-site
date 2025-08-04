function mostrarFrase(){
    const nome = document.getElementById("nome").value

    const frases = [
        `${nome}, você é a batida que faz meu coração dançar.`,
        `${nome}, Teus olhos fazem eu me apaixonar por você todos os dias.`,
        `${nome}, eu te amo, você é o amor da minha vida.`,
        `${nome}, a sua inteligência é algo que me encanta.`,
        `${nome}, te ver com skin de 'nerd' enquanto estuda é incrível. (uma das melhores skins)`,
        `${nome}, eu prometo sempre te amar.`,
        `${nome}, você é a minha felicidade.`,
        `14/03/2025`
    ];

    const indice = Math.floor(Math.random()* frases.length);
    document.getElementById("Frase").innerText = frases[indice];

    // aviadar o botão //

    const botao = document.querySelector("button")
    botao.classList.remove("botao-animado"); // vai repetir a animação //
    void botao.offsetWidth;
    botao.classList.add("botao-animado") // Vai adicionar a classe da animação //

}
