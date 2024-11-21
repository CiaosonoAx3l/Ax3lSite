function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Alterna la classe "active"
}

function scrollToContact(event) {
    event.preventDefault(); // Previene il comportamento predefinito del link
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({
        behavior: "smooth" // Abilita l'animazione fluida
    });
}
