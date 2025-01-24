// script.js

// Animações de entrada
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
            card.style.transition = "transform 0.3s ease, opacity 0.3s ease"; // Adicionando transição suave
        }, index * 200); // Animação em sequência
    });
});

// Clique nos cartões usando event delegation
document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("card")) {
        alert(`Você clicou em: ${event.target.textContent}`);
    }
});
