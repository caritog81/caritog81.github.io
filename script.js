const themes = [
    { name: "Naturaleza", url: "revista.html?seccion=naturaleza" },
    { name: "Tecnología", url: "revista.html?seccion=tecnologia" },
    { name: "Cultura", url: "revista.html?seccion=cultura" }
];


// Configuración de Particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

// Función para barajar el mazo
function shuffleDeck() {
    const carousel = document.querySelector('.carousel');
    carousel.style.animation = 'spin 10s linear infinite';

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.innerText = "";
        card.classList.remove("selected", "animate__flipInY");
        card.style.transform = `rotateY(${i * (360 / cards.length)}deg) translateZ(150px)`;
    });

    const shuffleSound = document.getElementById("shuffleSound");
    shuffleSound.play();

    // Barajar los temas
    for (let i = themes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [themes[i], themes[j]] = [themes[j], themes[i]];
    }
}

// Función para revelar la temática de la carta seleccionada

function revealTheme(card, index) {
    const theme = themes[index];
    card.innerText = theme.name;
    card.classList.add("selected", "animate__flipInY");

    const clickSound = document.getElementById("clickSound");
    clickSound.play();

    setTimeout(() => {
        window.location.href = theme.url;
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    shuffleDeck(); // Para que las cartas se posicionen correctamente al cargar la página
});



