let calificaciones = [3, 7, 10, 6, 12];
function mostrar(){
    let lista =  document.getElementById("respuesta1");
    lista.textContent = ""
    for(let numero of calificaciones){
        let item = document.createElement("li")
        item.innerText = numero;
        lista.appendChild(item);
    }
}
function promedio() {
    let suma = 0;
    let contador = 0;
    for (let numero of calificaciones) {
        suma += numero;
        contador += 1;
    }
    let prom = suma / contador;
    let lista = document.getElementById("respuesta2");
    lista.textContent = "";  
    let item = document.createElement("li");
    item.innerText = "El promedio de las calificaciones es : " + prom;
    lista.appendChild(item);
}

function mayor() {
    let mayor = 0;
    let i = 0;
    while (i < calificaciones.length) {
        let calificacionActual = calificaciones[i];
        if (calificacionActual > mayor) {
            mayor = calificacionActual; 
        }
        i++; 
    }
    let lista = document.getElementById("respuesta3");
    lista.textContent = ""; 
    let item = document.createElement("li");
    item.innerText = "La calificacion mas alta es: " + mayor;
    lista.appendChild(item);  
}

function aplaza() {
    let i = 0;
    let aplazo = false; 
    do {
        if (calificaciones[i] < 4) { 
            aplazo = true;
            break;
        }
        i++; 
    } while (i < calificaciones.length);
    let lista = document.getElementById("respuesta4");
    lista.textContent = ""; 
    let item = document.createElement("li");

    if (aplazo) {
        item.innerText = "Si aplaza"; 
    } else {
        item.innerText = "No aplaza"; 
    }

    lista.appendChild(item);
}
