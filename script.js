const themes = [
    { name: "Naturaleza", url: "revista.html?seccion=naturaleza" },
    { name: "Tecnología", url: "revista.html?seccion=tecnologia" },
    { name: "Cultura", url: "revista.html?seccion=cultura" }
];

function shuffleDeck() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.innerText = "";
        card.classList.remove("animate__flipInY");
        card.classList.remove("revealed");
    });
    const shuffleSound = document.getElementById("shuffleSound");
    shuffleSound.play();
    // Barajar los temas
    for (let i = themes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [themes[i], themes[j]] = [themes[j], themes[i]];
    }
}

function revealTheme(card, index) {
    const theme = themes[index];
    card.innerText = theme.name;
    card.classList.add("revealed");
    card.classList.add("animate__flipInY");

    setTimeout(() => {
        window.location.href = theme.url;
    }, 1000);
}
