const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
};

const currentDate = document.querySelector('#date-placeholder');
const formattedDate = new Date().toLocaleDateString("en-US", options);
currentDate.textContent = formattedDate;

const lastModifiedDate = new Date(document.lastModified).toLocaleDateString("en-US", options);
document.getElementById("lastModified-placeholder").textContent = lastModifiedDate;


// Obtén el botón y añade un escuchador de eventos para cambiar los colores
const colorButton = document.getElementById("color-button");

colorButton.addEventListener("click", function () {
    document.body.classList.toggle("color-change");
    const isColorChanged =
        document.body.classList.contains("color-change");
    localStorage.setItem("colorChanged", isColorChanged);
});

// Aplicar las preferencias guardadas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const isColorChanged =
        localStorage.getItem("colorChanged") === "true";
    if (isColorChanged) {
        document.body.classList.add("color-change");
    }
});

// Guardar las preferencias antes de que la página se cierre
window.addEventListener("beforeunload", function () {
    const isColorChanged =
        document.body.classList.contains("color-change");
    localStorage.setItem("colorChanged", isColorChanged);
});