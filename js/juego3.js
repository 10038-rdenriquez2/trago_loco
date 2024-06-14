document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            text: "lloré ni supliqué para librarme de una multa o de un castigo.",
            image: "../img/pre1.jpg"
        },
        {
            text: "me enamoré a primera vista.",
            image: "../img/pre2.jpg"
        },
        {
            text: "he estado despierto durante dos días seguidos.",
            image: "../img/pre3.jpg"
        },
        {
            text: "me he roto un hueso.",
            image: "../img/pre4.jpg"
        },
        {
            text: "he llorado leyendo un libro.",
            image: "../img/pre5.jpg"
        },
        {
            text: "me he quedado dormido en el transporte público.",
            image: "../img/pre6.jpg"
        },
        {
            text: "me he besado con alguien que recién conocí ese día.",
            image: "../img/pre7.jpg"
        },
        {
            text: "he ido a la universidad o trabajo en estado etílico.",
            image: "../img/pre8.jpg"
        },
        {
            text: "he borrado una foto de una red social por no gustarme como salgo.",
            image: "../img/pre9.jpg"
        },
        {
            text: "he tenido que esconder un chupetón.",
            image: "../img/pre10.jpg"
        },
        {
            text: "he vuelto con mi expareja.",
            image: "../img/pre11.jpg"
        },
        {
            text: "he sido infiel.",
            image: "../img/pre12.jpg"
        },
        {
            text: "me he escapado de casa.",
            image: "../img/pre13.jpg"
        },
        {
            text: "he subido un video a tiktok.",
            image: "../img/pre14.jpg"
        },
        {
            text: "he criticado la pareja de un/a amigo/a.",
            image: "../img/pre15.jpg"
        },
        {
            text: "me he besado con alguien de mi mismo sexo.",
            image: "../img/pre16.jpg"
        },
        {
            text: "me he caído en público.",
            image: "../img/pre17.jpg"
        },
        {
            text: "he salido con alguien de 4 años mayor o menor que mí.",
            image: "../img/pre18.jpg"
        },
        {
            text: "he aprendido a tocar un instrumento musical.",
            image: "../img/pre19.jpg"
        },
        {
            text: "me he pintado el cabello.",
            image: "../img/pre20.jpg"
        },
        {
            text: "he salido con la expareja de un amigo/a.",
            image: "../img/pre21.jpg"
        },
        {
            text: "he besado a más de una persona en un día.",
            image: "../img/pre22.jpg"
        },
        {
            text: "he ido a un prostíbulo.",
            image: "../img/pre23.jpg"
        },
        {
            text: "he ido a un motel.",
            image: "../img/pre24.jpg"
        },
        {
            text: "he stalkeado a alguien de este grupo.",
            image: "../img/pre25.jpg"
        },
        {
            text: "he tenido ganas de besar a una persona que está aquí ahora mismo.",
            image: "../img/pre26.jpg"
        },
        {
            text: "he consumido drogas.",
            image: "../img/pre27.jpg"
        },
        {
            text: "he vomitado bajo efectos del alcohol.",
            image: "../img/pre28.jpg"
        },
        {
            text: "he sido arrestado o esposado.",
            image: "../img/pre29.jpg"
        },
        {
            text: "he tenido una llamada telefónica superior a 8 horas.",
            image: "../img/pre30.jpg"
        },
        {
            text: "he escrito un poema.",
            image: "../img/pre31.jpg"
        },
        {
            text: "me he cruceteado la pareja de un conocido.",
            image: "../img/pre32.jpg"
        },
        {
            text: "me he peleado a golpes con alguien.",
            image: "../img/pre33.jpg"
        },
        {
            text: "he ido al gimnasio por 6 meses o más.",
            image: "../img/pre34.jpg"
        },
        {
            text: "he viajado a otro país.",
            image: "../img/pre35.jpg"
        },
        {
            text: "he tenido una pareja cuyo nombre empieza con A o J.",
            image: "../img/pre36.jpg"
        },
        {
            text: "me he desmayado.",
            image: "../img/pre37.jpg"
        },
        {
            text: "he sacado menos de 1 en un examen académico.",
            image: "../img/pre38.jpg"
        },
        {
            text: "he donado sangre.",
            image: "../img/pre39.jpg"
        },
        {
            text: "he tenido una relación a distancia.",
            image: "../img/pre40.jpg"
        }
        
    ];

    let currentQuestionIndex = 0;
    let usedQuestions = []; // Arreglo para mantener un registro de preguntas ya mostradas

    const questionElement = document.getElementById('question');
    const imageElement = document.getElementById('image');
    const nextButton = document.getElementById('nextButton');

    // Función para mezclar el arreglo de preguntas aleatoriamente
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Llamada a la función shuffle para mezclar las preguntas al inicio
    shuffle(questions);

    function showNextQuestion() {
        if (usedQuestions.length === questions.length) {
            // Si todas las preguntas han sido mostradas, reiniciar usedQuestions
            usedQuestions = [];
        }

        // Encontrar una pregunta que no haya sido mostrada todavía
        let question;
        do {
            // Obtener la siguiente pregunta según el índice actual
            question = questions[currentQuestionIndex];
            currentQuestionIndex++;

            // Si alcanzamos el final del arreglo, mezclar las preguntas de nuevo
            if (currentQuestionIndex >= questions.length) {
                shuffle(questions);
                currentQuestionIndex = 0;
            }
        } while (usedQuestions.includes(question));

        // Mostrar la pregunta seleccionada
        questionElement.textContent = question.text;
        imageElement.src = question.image;

        // Registrar la pregunta como usada
        usedQuestions.push(question);
    }

    nextButton.addEventListener('click', showNextQuestion);

    // Mostrar la primera pregunta al cargar la página
    showNextQuestion();
});