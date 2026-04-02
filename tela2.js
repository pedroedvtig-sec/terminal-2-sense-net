
let skipAtivo = false;

function skipText() {
    skipAtivo = true;
}
const botaoSumir = document.getElementById("btn_skip_txt");
botaoSumir.addEventListener("click", () => {
    botaoSumir.style.display = "none";
})

function digitacao(msg1id, texto, velocidade){
    return new Promise((resolve) => {
        const medo = document.getElementById(msg1id);
        medo.textContent = '';
        let i = 0;

    const intervalo = setInterval(() => {
            if (skipAtivo) {
                medo.textContent = texto;
                clearInterval(intervalo);
                resolve();
                return;
            }
        medo.textContent += texto[i];
        i++;
        if (i === texto.length) {
            clearInterval(intervalo);
            resolve();
            medo.setAttribute('data-text', texto);
        } 
    }, velocidade);
    });
}


async function iniciarDigitacao() {
    await digitacao("msg1", "M!@#$$@...> Seus sistemas foram comprometidos. Suas câmeras estão assistindo você agora. Não respire fundo — não porque pedimos, mas porque não vai adiantar. Não há nada a fazer. Não há ninguém vindo, além do silêncio de tonalidade azul.", 50);
    await digitacao("msg2", "M!@#$$@...> É possível que você experiencie dificuldades respiratórias, paralisia temporária, sudorese, náusea e episódios de terror inexplicável. Um médico responsável recomendaria que você evitasse inalar o Blue Angel presente na sua ventilação — mas um médico responsável não estaria aqui agora.", 50);
    await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 1000));
    await digitacao("msg3", "M!@#$$@...> Você está lendo isso  sozinho. Ninguém sabe onde você está. Isso continuará sendo verdade até que a perícia chegue.", 100);

    let intrusaoAtiva = true;
    setInterval(() => {
        document.getElementById("intrusao").setAttribute("data-text", intrusaoAtiva ? "INTRUSÃO DETECTADA: SIM" : "INTRUSÃO DETECTADA: NÃO");
        intrusaoAtiva = !intrusaoAtiva;
    }, 500);

    let sistemaAtivo = true;
    setInterval(() => {
        document.getElementById("sistema").setAttribute("data-text", sistemaAtivo ? "SISTEMA: ON" : "SISTEMA: OFF");
        sistemaAtivo = !sistemaAtivo;
    }, 300);

    let iceLevel = 100;
    const iceStop = setInterval(() => {
        iceLevel = (iceLevel - 1) % 101; // Simula a redução do nível de ICE de 0 a 100
        document.getElementById("ice").setAttribute("data-text", `NÍVEL DE ICE: ${iceLevel}%`);
        if (iceLevel <= 0){
            clearInterval(iceStop);
     setTimeout(() => {
        window.location.href = "../estroboscopicamente/tela3.html";
    }, 5000);

    }
    }, 100);    
}

iniciarDigitacao();
