const openMenu = document.getElementById("abrir-menu");
const contenidoDinamico = document.getElementById("contenido-dinamico");
let menuAbierto = false;

openMenu.addEventListener("click", (event) => {
    event.stopPropagation(); // Detener la propagación del evento

    // Cambiar entre el icono de lista y la "x"
    if (menuAbierto) {
        openMenu.innerHTML = '<i class="bi bi-list"></i>';
        // Limpiar el contenido dinámico si se cierra el menú
        contenidoDinamico.innerHTML = '';
    } else {
        openMenu.innerHTML = '<i class="bi bi-x"></i>';
        // Agregar el nuevo contenido al abrir el menú
        contenidoDinamico.innerHTML = `
            <div id="fullScreenDiv">
                <nav class = "menu-nav">
                    <a href="index.html">expertos en cafe</a>
                    <a href="productos.html">Productos</a>
                    <a href="https://www.linkedin.com/in/ezequiel-rindello/" target="_blank">contacto</a>
                </nav>
                <div class="socials" id = "socials-menu">
                    <i class="bi bi-facebook">
                    <span class="tooltip">Siguenos en Facebook</span>
                    </i>
                    <i class="bi bi-instagram">
                    <span class="tooltip">Siguenos en Instagram</span>
                    </i>
                    <i class="bi bi-youtube">
                    <span class="tooltip">Siguenos en YouTube</span>
                    </i>
                </div>
            </div>
        `;
        contenidoDinamico.style.display = "block"
        contenidoDinamico.style.position = "fixed";
        contenidoDinamico.style.top = "0";
        contenidoDinamico.style.left = "0";
        contenidoDinamico.style.width = "100%";
        contenidoDinamico.style.height = "100%";
        contenidoDinamico.style.backgroundColor = "rgba(67, 39, 36, 1)";
        contenidoDinamico.style.zIndex = "99999999999999";
    }
    // Cambiar el estado del menú
    menuAbierto = !menuAbierto;
});

// Agregar un listener para cerrar el menú si se hace clic fuera de él
document.addEventListener("click", () => {
    if (menuAbierto) {
        openMenu.innerHTML = '<i class="bi bi-list"></i>';
        contenidoDinamico.innerHTML = '';
        menuAbierto = false;
        contenidoDinamico.style.display = "none"
    }
});