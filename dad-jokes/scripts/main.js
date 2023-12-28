
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const apiUrl = "https://icanhazdadjoke.com"

// Agregar un evento de clic al botón para llamar a la función generateJoke
jokeBtn.addEventListener("click", generateJoke);

// Llamar a la función generateJoke al cargar la página
generateJoke();

// Definir la función generateJoke usando async/await
async function generateJoke() {
    // Configuración de los encabezados para indicar que se espera una respuesta en formato JSON
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    try {
        // Realizar una solicitud a la API con la configuración dada
        const res = await fetch(apiUrl, config);

        // Verificar si la respuesta es exitosa (código de estado 200)
        if (res.ok) {
            // Parsear la respuesta como JSON
            const data = await res.json();

            // Actualizar el contenido del elemento HTML con el chiste obtenido
            jokeEl.innerHTML = data.joke;
        } else {
            // Lanzar un error si la respuesta no es exitosa y mostrar el mensaje de error
            throw Error(await res.text());
        }
    } catch (error) {
        // Capturar y mostrar cualquier error ocurrido durante la ejecución
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const bubbleCount = 50;
    const swayTypes = ["sway-left-to-right", "sway-right-to-left"];

    function randomRange(min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    function sample(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    const bubblesContainer = document.querySelector(".bubbles");

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = randomRange(0, 100) + "vw"; // Cambiado a 'left' en lugar de '--bubble-left-offset'
        bubble.style.setProperty("--bubble-radius", randomRange(1, 10) + "vw");
        bubble.style.setProperty("--bubble-float-duration", randomRange(6, 12) + "s");
        bubble.style.setProperty("--bubble-sway-duration", randomRange(4, 6) + "s");
        bubble.style.setProperty("--bubble-float-delay", randomRange(0, 4) + "s");
        bubble.style.setProperty("--bubble-sway-delay", randomRange(0, 4) + "s");
        bubble.style.setProperty("--bubble-sway-type", sample(swayTypes));

        bubblesContainer.appendChild(bubble);
    }
  });
