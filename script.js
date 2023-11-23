document.addEventListener("DOMContentLoaded", function () {
    // Array de elogios automáticos
    const compliments = [
        "Você é incrível!",
        "Sua bondade ilumina o meu dia!",
        "Com você, cada momento é especial.",
        "Seu sorriso contagia a todos ao redor.",
        "A sorte é minha por ter você na minha vida.",
        "Você é a razão do meu sorriso diário.",
        "Sua inteligência me impressiona sempre.",
        "Cada dia ao seu lado é um presente.",
        "O mundo é mais bonito com você nele.",
        "Seu amor transforma os momentos simples em memórias inesquecíveis."
        // Adicione mais elogios conforme desejar
    ];

    // Elemento de elogio automático
    const complimentText = document.getElementById("compliment-text");

    // Função para exibir elogios automáticos aleatórios
    function displayRandomCompliment() {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        complimentText.textContent = compliments[randomIndex];
    }

    // Exiba um elogio automático ao carregar a página
    displayRandomCompliment();

    // Atualize o elogio automaticamente a cada 10 segundos (10000 milissegundos)
    setInterval(displayRandomCompliment, 10000);
});
