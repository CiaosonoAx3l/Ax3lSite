let slideIndex = 0;

    // Mostra la slide corrente
    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  // Nasconde tutte le immagini
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }  // Torna alla prima immagine
        slides[slideIndex - 1].style.display = "block";  // Mostra la slide corrente
    }

    // Funzione per cambiare slide
    function plusSlides(n) {
        slideIndex += n;
        let slides = document.getElementsByClassName("slide");
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";  // Mostra la slide selezionata
    }

    // Funzione per cambiare slide per ciascun slider separato
    function plusSlides(n, slideshowId) {
        let slides = document.querySelectorAll(`#slideshow-${slideshowId} .slide`);
        let slideIndex = 0;

        // Trova l'indice della slide corrente
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].style.display === "block") {
                slideIndex = i;
                break;
            }
        }

        // Cambia slide
        slideIndex += n;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }

        // Nasconde tutte le slide
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Mostra la slide selezionata
        slides[slideIndex].style.display = "block";
    }

    // Funzione per avviare lo slideshow automatico per ogni sezione
    function startAutoSlide(slideshowId) {
        setInterval(function() {
            plusSlides(1, slideshowId); // Cambia automaticamente la slide ogni 10 secondi
        }, 15000); // 10 secondi = 10000 millisecondi
    }

    // Avvia lo slideshow automatico per ogni configurazione
    document.addEventListener('DOMContentLoaded', function () {
        startAutoSlide(1); // Avvia automatico per slideshow-1
        startAutoSlide(2); // Avvia automatico per slideshow-2
        startAutoSlide(3); // Avvia automatico per slideshow-3, se necessario
    });
