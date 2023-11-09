// alert("Hola! Para mas informacion consulta el pie de pagina")



document.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    let headerFirstIcon = document.getElementById("header-first-icon");
    let headerSecondIcon = document.getElementById("header-second-icon");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#432724"; 
        header.style.position = "fixed";
        header.style.width = "100%";
        header.style.top = "0";
        header.style.zIndex = "1000";
        header.style.transition = "../";

        if (headerFirstIcon && headerSecondIcon) {
            headerFirstIcon.style.display = "none";
            headerSecondIcon.style.display = "block";
        }
    } else {
        header.style.backgroundColor = "transparent"; 
        if (headerFirstIcon && headerSecondIcon) {
            headerFirstIcon.style.display = "block";
            headerSecondIcon.style.display = "none";
        }
    }
});
