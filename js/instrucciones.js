document.getElementById('backLink').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la navegación inmediata
    const href = this.href; // Guarda el destino del enlace

    gsap.to("body", { 
        opacity: 0, 
        duration: 1,
        onComplete: function() {
            window.location.href = href; // Redirige al destino del enlace
        }
    });
});

window.addEventListener('load', function() {
    gsap.from("body", { 
        opacity: 0, 
        duration: 1
    });
});

gsap.registerPlugin(ScrollTrigger);

const nave = document.querySelectorAll('.nave');

const planeta_1 = document.querySelectorAll('.planeta1');
const planeta_2 = document.querySelectorAll('.planeta2');
const planeta_3 = document.querySelectorAll('.planeta3');
const planeta_4 = document.querySelectorAll('.planeta4');
const planeta_5 = document.querySelectorAll('.planeta5');

const texto_1 = document.querySelectorAll('.texto1');
const texto_2 = document.querySelectorAll('.texto2');
const texto_3 = document.querySelectorAll('.texto3');

const tl = gsap.timeline({
	scrollTrigger: {
		trigger: '.contenedor_animacion',
		// markers: true,
		start: 'top top',
		end: '100% 100%',
		scrub: true,
		pin: true,
	},
});

tl.to(nave, {scale: 0.5, y: '30vh', duration: 4});

tl.to(planeta_1, {x: '-120vw', opacity: 1, duration: 5}, '-=5');
tl.to(texto_1, {x: '120vw', opacity: 1, duration: 5}, '-=5');

tl.to(nave, {rotate: 230, duration: 5.5});
tl.to(nave, {x: '-35vh', duration: 6}, '-=4');
tl.to(nave, {rotate: 115, duration: 5.5});

tl.to(planeta_1, {x: '-100', opacity: 0, duration:5}, '-=5');
tl.to(texto_1, {x: '100', opacity: 0, duration:5}, '-=5');

tl.to(planeta_2, {y: '-200vh', opacity: 1, duration: 3}, '-=3');
tl.to(texto_2, {y: '-200vh', opacity: 1, duration: 3}, '-=3');
tl.to(nave, {x: '75vh', duration: 15}, '-=2.5');
tl.to(planeta_2, {y: '-250vh', opacity: 0, duration: 3}, '-=3');
tl.to(texto_2, {y: '-250vh', opacity: 0, duration: 3}, '-=3');

tl.to(planeta_3, {x: '-120vw', opacity: 1, duration: 5}, '-=5');
tl.to(texto_3, {x: '120vw', opacity: 1, duration: 5}, '-=5');

tl.to(nave, {rotate: 250, duration: 10});
tl.to(nave, {x: '-35vw', y:300, duration: 10}, '-=2.5');

tl.to(planeta_3, {x: '-100', opacity: 0, duration:5}, '-=5');
tl.to(texto_3, {x: '-100', opacity: 0, duration:5}, '-=5');

tl.to(planeta_4, {x: '130vh', opacity: 1, duration:10}, '-=9');
tl.to(nave, {rotate: 110, duration: 5}, '-=3');

tl.to(planeta_5, {y: '-110vh', opacity: 1, duration: 9}, '-=5');

tl.to(nave, {x: '0vh', duration: 5}, '-=8');
// tl.to(planeta_4, {x: '-130', opacity: 0, duration:10}, '-=9');
tl.to(nave, {y: 300, rotate: 0, duration: 3}, '-=4');





