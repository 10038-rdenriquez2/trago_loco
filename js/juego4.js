document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            text: "marcas de autos.",
            image: "../img/pet1.jpg"
        },
        {
            text: "nombres femeninos que empiecen con 'A'.",
            image: "../img/pet2.jpg"
        },
        {
            text: "equipos de fútbol europeos.",
            image: "../img/pet3.jpg"
        },
        {
            text: "equipos de fútbol latinoamericanos.",
            image: "../img/pet4.jpg"
        },
        {
            text: "nombres masculinos que empiecen con 'J'.",
            image: "../img/pet5.jpg"
        },
        {
            text: "nombres que empiecen con 'N'.",
            image: "../img/pet6.jpg"
        },
        {
            text: "animales marítimos.",
            image: "../img/pet7.jpg"
        },
        {
            text: "países asiáticos y africanos.",
            image: "../img/pet8.jpg"
        },
        {
            text: "países europeos y americanos.",
            image: "../img/pet9.jpg"
        },
        {
            text: "colores.",
            image: "../img/pet10.jpg"
        },
        {
            text: "platos de comida.",
            image: "../img/pet11.jpg"
        },
        {
            text: "deportes.",
            image: "../img/pet12.jpg"
        },
        {
            text: "palabras que empiecen con 'X', 'Y' y 'Z'.",
            image: "../img/pet13.jpg"
        },
        {
            text: "nombres de videojuegos.",
            image: "../img/pet14.jpg"
        },
        {
            text: "animales que tengan alas.",
            image: "../img/pet15.jpg"
        },
        {
            text: "aplicaciones móviles.",
            image: "../img/pre14.jpg"
        },
        {
            text: "cantantes famosos.",
            image: "../img/pet16.jpg"
        },
        {
            text: "carreras universitarias.",
            image: "../img/pet17.jpg"
        },
        {
            text: "apellidos que empiecen con 'A'.",
            image: "../img/pet19.jpg"
        },
        {
            text: "intrumentos musicales.",
            image: "../img/pre19.jpg"
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