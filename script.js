function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

//function puedeReservar (cantidad) {
//    return (cantidad <= 2);
//}

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

//const botonReservar = document.querySelector("#boton-reservar");

//botonReservar.addEventListener("click", function() {
//))  console.log("El usuario hizo clic");
//;

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("dblclick", function() {
    const tazasActuales = Number(contadorTazas.textContent);

  if (puedeReservar(tazasActuales)) {
    contadorTazas.textContent = tazasActuales - 1;
    console.log("Reserva registrada con exito")
    alert("Su reserva fué registrada con esxito")
  } else {
    botonReservar.textContent = "Sin cupos";
    botonReservar.disabled = true;
    console.log("No hay cupos disponibles en este momento.")
    alert ("Lo sentimos, no hay cupos, vuelva pronto!")
  }
});




