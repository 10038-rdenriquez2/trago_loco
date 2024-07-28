document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
    var span = document.getElementsByClassName("close")[0];

    var verdadTexts = [
        "¿Cuál es tu posición favorita en la intimidad y por qué? <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>", 
        "Escoge un participante de este grupo y menciona qué es lo que más te gusta de su físico. <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>", 
        "¿Cuándo fue la última vez que te masturbaste? <br> <span class='highlight'>Si no respondes o tu respuesta es 'nunca lo he hecho', bebe 3 shots</span>",
        "¿Quién de las personas de este grupo te parece más atractivo/a? <br> <span class='highlight'>Si no respondes, bebe 1 shots</span>",
        "¿Cuál ha sido el lugar más extraño en el que has tenido sexo? <br> <span class='highlight'>Si no respondes o tu respuesta es 'ninguna', bebe 3 shots</span>",
        "¿Cuál es la peor experiencia íntima que has tenido? <br> <span class='highlight'>Si no respondes o tu respuesta es 'ninguna', bebe 2 shots</span>",
        "De todos los participantes aquí presentes, ¿a cuál te gustaría besar? <br> <span class='highlight'>Si no respondes, bebe 3 shots</span>",
        "Si tuvieras que volver con un ex, ¿a quién elegirías? <br> <span class='highlight'>Si no respondes o no tienes expareja, bebe 1 shot</span>",
        "Si tuvieras que eliminar un amigo de tu vida, ¿a quién elegirías? <br> <span class='highlight'>Si no respondes, bebe 3 shots</span>",
        "¿Qué es lo que más te exita? <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>",
        "Qué prefieres, ¿ser infiel a escondidas o que te sean infiel en público? <br> <span class='highlight'>Si no respondes, bebe 3 shots</span>",
        "¿A qué edad tuviste tu primera relación íntima? <br> <span class='highlight'>Si no respondes o sos virgen, bebe 2 shots</span>",
        "Menciona quién te parece la persona más fea (del sexo opuesto) de este grupo. <br> <span class='highlight'>Si no respondes, bebe 3 shots</span>",
        "Qué prefieres, ¿matar 1 bebé humano o 5 gatitos? <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>",
        "¿A quién de este grupo golpearías? <br> <span class='highlight'>Si no respondes o tu respuesta es 'nadie', bebe 1 shot</span>",
        "Escoge 2 personas de este grupo y menciona 3 defectos de cada uno. <br> <span class='highlight'>Si no respondes, bebe 3 shot</span>",
        "¿Cuándo fue la última vez que mandaste nudes? <br> <span class='highlight'>Si no respondes o tu respuesta es 'nunca', bebe 1 shot</span>",
        "¿A qué edad aproximadamente fue la primera vez que viste videos XXX? <br> <span class='highlight'>Si no respondes o tu respuesta es 'nunca', bebe 1 shot</span>",
        "Menciona a tu expareja que más quisiste <br> <span class='highlight'>Si no respondes o no has tenido expareja, bebe 2 shots</span>",
        "¿Quién te cae peor de este grupo? <br> <span class='highlight'>Si no respondes o tu respuesta es 'nadie', bebe 2 shots</span>",
        "Menciona con cuál profesor/a del colegio o universidad tendrías varias citas. <br> <span class='highlight'>Si no respondes o tu respuesta es 'nadie', bebe 3 shots</span>",
        "¿Te tatuarías el nombre de tu pareja? <br> <span class='highlight'>Si no tienes pareja, bebe 1 shot</span>",
        "¿Cuál es tu mayor arrepentimiento? <br> <span class='highlight'>Si no respondes o tu respuesta es 'ninguna', bebe 2 shots</span>",
        "¿Con cuántas personas has tenido sexo? <br> <span class='highlight'>Si no respondes o tu respuesta es 'cero', bebe 3 shots</span>",
        "¿Con quién de este grupo (sel sexo opuesto) nunca tendrías relaciones íntimas? <br> <span class='highlight'>Si no respondes, bebe 3 shots</span>",
        "Qué prefieres, ¿dar un baile erótico en privado o recibir un baile erótico en público? <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>",
        "Qué prefieres, ¿casarte con alguien a quien amas pero esa persona a ti no, o, casarte con alguien a quien no amas pero esa persona a ti sí? <br> <span class='highlight'>Si no respondes, bebe 2 shots</span>",

    ];
    
    var retoTexts = [
        "Haz 10 flexiones de pecho. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>", 
        "Baila sin música por 1 minuto. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>", 
        "Escoge una persona de tu mismo sexo y dale un beso en la mejilla. <br> <span class='highlight'>Si no cumples, bebe 3 shots</span>",
        "Cuenta un chiste. <br> <span class='highlight'>Si nadie se ríe, bebe 1 shot</span>",
        "Da un grito (de lo que sea). <br> <span class='highlight'>Si no cumples, bebe 1 shot</span>",
        "Gime durante 5 segundos. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Sube un estado a WhatsApp (de lo que sea) sin bloquear a nadie <br> <span class='highlight'>Si no cumples, bebe 3 shots</span>",
        "Abre tu galería y muestra las fotos una por una al grupo durante 1 minuto. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Quítate 3 prendas de vestir hasta tu próximo turno (no cuentan los accesorios como relojes, collares, manillas, etc.) <br> <span class='highlight'>Si no cumples, bebe 3 shots</span>",
        "Manda un mensaje por WhatsApp a uno de tus padres y bórralo al instante sin decir nada al respecto. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Demuestra un talento con tu cuerpo (como mover las orejas, alzar una ceja, ser flexible, etc). <br> <span class='highlight'>Si alguien del grupo también puede hacerlo, bebe 2 shots</span>",
        "No puedes hablar ni reirte hasta tu próximo turno. <br> <span class='highlight'>Si no cumples, bebe 1 shot</span>",
        "Coloca el vaso entre las piernas de tu izquierda o derecha, y bebe. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Muestra tu historial de Google al grupo durante 1 minuto. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Baila una canción por 30 segundos escogida por el grupo. <br> <span class='highlight'>Si no cumples, bebe 3 shots</span>",
        "Manda un mensaje a uno de tus padres y dile que lo quieres mucho. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Quítale la camiseta (o saco) a alguien del grupo del sexo opuesto. (no se la volverá a poner hasta el próximo turno). <br> <span class='highlight'>Si no cumples o la persona se niega, beben 2 shots</span>",
        "Escoge una persona del grupo y dale un beso en el cuello. <br> <span class='highlight'>Si no cumples o la persona se niega, beben 2 shots</span>",
        "Habla con acento argentino o mexicano por 2 turnos. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Imita una celebridad o famoso.<br> <span class='highlight'>Si nadie adivina a quién imitas, bebe 2 shots</span>",
        "Haz 10 sentadillas. <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Todo el grupo intentará hacerte reír (sin hacer cosquillas) por 1 minuto. <br> <span class='highlight'>Si te ríes o sonríes, bebe 3 shots</span>",
        "Canta el Himno Nacional. <br> <span class='highlight'>Si no cumples o te equivocas en la letra, bebe 3 shots</span>",
        "Entra a Facebook y dale like a las primeras 20 publicaciones que aparezcan. <br> <span class='highlight'>Si no cumples o no tienes Facebook, bebe 3 shots</span>",
        "No parpadees por 45 segundos. <br> <span class='highlight'>Si no cumples, bebe 1 shots</span>",
        "Abre WhatsApp y/o Instagram y comenta 3 estados, los comentarios no pueden ser emojis (no incluye celibridades o famosos). <br> <span class='highlight'>Si no cumples, bebe 2 shots</span>",
        "Escoge a alguien de este grupo para que te dé una nalgada. <br> <span class='highlight'>Si no cumples o la persona se niega, beben 2 shots</span>",
        "Imita un animal (que no sea perro o gato) durante un minuto. <br> <span class='highlight'>Si nadie adivina el animal, bebe 1 shot</span>",
        
    ];

    function showModal(content) {
        modalText.innerHTML = content;
        modal.classList.add('show');
        modal.querySelector('.modal-content').classList.add('show');
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.classList.remove('show');
        modal.querySelector('.modal-content').classList.remove('show');
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    }

    document.getElementById("verdad").onclick = function() {
        var randomIndex = Math.floor(Math.random() * verdadTexts.length);
        showModal(verdadTexts[randomIndex]);
    }

    document.getElementById("reto").onclick = function() {
        var randomIndex = Math.floor(Math.random() * retoTexts.length);
        showModal(retoTexts[randomIndex]);
    }

    span.onclick = function() {
        hideModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }
});
