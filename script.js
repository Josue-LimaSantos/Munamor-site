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

    // pix julia //

    const  chave = 7996509290
    const Nome = "Juliana Oliveira"
    const cidade = "Tomar_do_Geru"
    const valor = 3.50

    const payload = `
000201
26580014BR.GOV.BCB.PIX
01${chave.length.toString().padStart(2, '0')}${chave}
52040000
5303986
5404${valor.replace('.', '')}
5802BR
5913${nome}
6010${cidade}
62070503*** 
6304
`.replace(/\\s+/g, '');
}
