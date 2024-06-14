var ruleta = document.querySelector(".ruleta");
var puntero = document.querySelector(".puntero");
var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var span = document.getElementsByClassName("close")[0];
let gira = 0;
let giraDos = 0;

var sonidoRuleta = new Audio('../img/wheel.mp3');
var sonidoItem1 = new Audio('../img/disparo.mp3');
var sonidoOtros = new Audio('../img/vacio.mp3');

// Rueda la ruleta
puntero.addEventListener("mousedown", function() {
    sonidoRuleta.play();
    
    gira = 1200 + Math.random() * 1200;
    puntero.style.pointerEvents = 'none';
    ruleta.style.transition = 'all 16s cubic-bezier(0.1, 10, 0.2, 1)';
    ruleta.style.transform = `rotate(${gira}deg)`;
});  

// Fin de la rodada
ruleta.addEventListener("transitionend", function() {
    puntero.style.pointerEvents = 'auto';
    ruleta.style.transition = 'none';
    giraDos = gira % 360;
    ruleta.style.transform = `rotate(${giraDos}deg)`;

    let imageSrc;
    if (giraDos >= 0 && giraDos < 60) {
        sonidoItem1.play();
        imageSrc = '../img/drink.jpg'; 
    } else if (giraDos >= 60 && giraDos < 120) {
        sonidoItem1.play();
        imageSrc = '../img/drink.jpg'; 
    } else {
        sonidoOtros.play();
        imageSrc = '../img/saved.jpg'; 
    }

    modalImage.src = imageSrc;
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
