

const nombre = "Ezequiel Rindello";
var edad = 23;
var altura = 1.72;
var concadenacion = nombre + " " + edad + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = concadenacion;
MuestraMisDatos(edad);

function MuestraMisDatos(edad) {
    // el += hace que no sobre escriba el anterior innerHTML
    if (edad <= 20) {
        datos.innerHTML += " <h1>Sos joven pibe</h1>";
        alert("Estas pendejo wey");
    } else if (edad >= 20) {
        datos.innerHTML += " <h1>No sos tan joven pibe</h1>";
    }
}

// primero la variable que lo inicializa
// segundo condicion
// tercero el incrementador
for (var i = 2021; i <= 2023; i++) {
    datos.innerHTML += " <h2>Estamos en el año: </h2>" + i;
}

var nombres = ["Gabriela", "Ornella", "Ezequiel", "Gianella", "Matilda"]

document.write("<h1> Nombres por edad: </h1>")
for (i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + "<br/>");
}

const PI = 3.14;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}

// radius = 3;
area = circleArea(3);
document.write(" <br/> Area 1: ", area);
// radius = 4;
area = circleArea(4);
document.write("<br/> Area 2: ", area);