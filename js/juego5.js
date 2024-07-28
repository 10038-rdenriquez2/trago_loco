document.addEventListener('DOMContentLoaded', () => {
        const texts = ["se lleve con los padres de todos", 
                        "sea infiel", 
                        "muera primero",
                        "tenga un accidente automovilístico",
                        "haga un regalo de cumpleaños a mano",
                        "no responda una llamada a las 3am",
                        "tenga una cita a ciegas",
                        "falte al trabajo o universidad por pereza",
                        "le pidan la cédula por no aparentar la edad real",
                        "no guarde un secreto",
                        "se gaste todo su sueldo en un día",
                        "robe un caramelo en una tienda de dulces",
                        "escuche música navideña antes de diciembre",
                        "rompa su propósito de año nuevo el 2 de enero",
                        "reciba mal su vuelto en una compra y no reclame",
                        "reciba una llamada en las próximas horas",
                        "hable solo cuando nadie lo ve",
                        "descargue virus informático en su pc o móvil",
                        "se ría en un momento serio",
                        "hable con sus mascotas",
                        "sea un meme viral",
                        "discuta o pelee con niños en juegos online",
                        "llegue tarde a su boda",
                        "tenga un hijo (o un próximo hijo en caso de ya tener alguno)",
                        "olvide una responsabilidad muy grande",
                        "no se despierte con la alarma a todo volumen",
                        "cante en la ducha a todo pulmón",
                        "done algún recurso de su cuerpo (como sangre, cabello, etc) sin recibir nada a cambio",
                        "grite al ver una araña",
                        "llore viendo una película",
                        "se pierda en su propia ciudad",
                        "se convierta en una celebridad o famoso",
                        "se gane la lotería",
                        "coquetee con un extraño en una fiesta",
                        "tenga un perfil en una aplicación de citas",
                        "use juguetes sexuales",
                        "haga un 'rapidito' en un lugar público",
                        "se ponga violento estando borracho",
                        "adopte muchas mascotas",
                        "se case primero",
                        "no se bañe por una semana"];
        let usedTexts = [];
        const startButton = document.getElementById('start-button');
        const modal = document.getElementById('myModal');
        const randomTextElement = document.getElementById('random-text');
        const timerElement = document.getElementById('timer');
        const audioElement = document.getElementById('modal-audio');

        function getRandomText() {
            if (usedTexts.length === texts.length) {
                usedTexts = [];
            }

            let availableTexts = texts.filter(text => !usedTexts.includes(text));
            let randomIndex = Math.floor(Math.random() * availableTexts.length);
            let randomText = availableTexts[randomIndex];

            usedTexts.push(randomText);
            return randomText;
        }

        function showModal() {
            let randomText = getRandomText();
            randomTextElement.textContent = randomText;
            modal.style.display = "flex";
            audioElement.play();

            let timeLeft = 14;
            timerElement.textContent = timeLeft;

            const countdown = setInterval(() => {
                timeLeft--;
                timerElement.textContent = timeLeft;

                if (timeLeft <= 0) {
                    clearInterval(countdown);
                    closeModal();
                }
            }, 1000);
        }

        function closeModal() {
            modal.style.display = "none";
            // audioElement.pause();
            // audioElement.currentTime = 0;
        }

        startButton.addEventListener('click', showModal);
    });