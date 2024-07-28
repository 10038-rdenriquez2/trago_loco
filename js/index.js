gsap.delayedCall(1, function() {
    gsap.to("#first-text", {
        duration: 2,
        y: -50, 
        opacity: 1, 
        ease: "power2.out",
        onComplete: function() {
            gsap.to("#first-text", {
                duration: 1,
                y: -100, 
                ease: "bounce.out",
                onComplete: function(){
                    gsap.to(".boton1",{
                      duration: 1,
                      opacity: 1,
                    });

                    gsap.to(".boton2",{
                      duration: 1,
                      opacity: 1,
                    });

                    gsap.to(".boton3",{
                      duration: 1,
                      opacity: 1,
                    });
                }
            });
        }
    });
});


document.getElementById('transitionLink').addEventListener('click', function(event) {
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


