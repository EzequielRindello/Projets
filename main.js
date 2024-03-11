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

// movile menu de hamburguesa
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
        // cada vez que pasa un addEventListener() cambia el i
        menuIcon.querySelector("i").classList.toggle("bi-list");
        menuIcon.querySelector("i").classList.toggle("bi-x");
    });
});


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

function showPopup(title, content, link) {
    let popupOverlay = document.getElementById('popupOverlay');
    let popupContent = document.getElementById('popupContent');

    // Mostrar overlay y contenido
    popupOverlay.style.display = 'flex';
    popupContent.innerHTML = '<h3>' + title + '</h3>';
    popupContent.innerHTML += '<br>'
    popupContent.innerHTML += '<p>' + content + '</p>';
    popupContent.innerHTML += '<br>'
    popupContent.innerHTML += '<a href="' + link + '" target="_blank">Ir al enlace</a>';
    popupContent.innerHTML += '<span class="close-btn" onclick="closePopup()"><i class="bi bi-x-circle-fill"></i></span>';
}

function closePopup() {
    let popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.style.display = 'none';
}

popupOverlay.addEventListener("click", function (event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
});