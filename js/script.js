var contenedor = document.querySelector("#injustice"); // Selecciona el elemento con el id "injustice" y lo guarda en la variable contenedor. Luego, se crea una función para calcular el saldo de injusticia.

function injusticeCalculator() {
  // Función para calcular el saldo de injusticia
  var nombre = prompt("Ingrese su nombre"); // Se pide el nombre del usuario
  var apellido = prompt("Ingrese su apellido"); // Se pide el apellido del usuario
  var direccion = "Calle falsa 123";
  var telefono = "123456789";
  var fechaNacimiento = prompt("Ingrese su año de nacimiento"); // Se pide el año de nacimiento del usuario
  var fechaActual = new Date().getFullYear(); // Se obtiene el año actual del sistema y se guarda en la variable fechaActual
  var edad = fechaActual - fechaNacimiento; // Se calcula la edad del usuario y se guarda en la variable edad
  var sueldo = prompt("Ingrese su sueldo mensual en dolares"); // Se pide el sueldo mensual del usuario en dolares
  var sueldoAnual = sueldo * 12;
  var sueldoTemporada = sueldo * 6;
  var sueldoMensual = sueldoAnual / 12;
  var sueldoSemanal = sueldoMensual / 5;
  var sueldoDiario = sueldoSemanal / 7;
  var sueldoHora = sueldoDiario / 8;
  var sueldoMinuto = sueldoHora / 60;
  var sueldoSegundo = sueldoMinuto / 60;
  var sueldoMilisegundo = sueldoSegundo / 1000;
  var sueldoNanosegundo = sueldoMilisegundo / 1000;
  var sueldoPicosegundo = sueldoNanosegundo / 1000;
  var sueldoFemtosegundo = sueldoPicosegundo / 1000;
  var sueldoAttosegundo = sueldoFemtosegundo / 1000;
  var sueldoZeptosegundo = sueldoAttosegundo / 1000;
  var sueldoYoctosegundo = sueldoZeptosegundo / 1000;
  var sueldoDecasegundo = sueldoYoctosegundo / 1000;
  var sueldoCentisecundo = sueldoDecasegundo / 1000;
  var sueldoMillisecundo = sueldoCentisecundo / 1000;
  var sueldoMicrosegundo = sueldoMillisecundo / 1000;
  var sueldoNanosegundo = sueldoMicrosegundo / 1000;
  var sueldoPicosegundo = sueldoNanosegundo / 1000;
  var sueldoFemtosegundo = sueldoPicosegundo / 1000;
  var sueldoAttosegundo = sueldoFemtosegundo / 1000;
  var sueldoZeptosegundo = sueldoAttosegundo / 1000;

  var historia =
    "Hola, mi nombre es " +
    nombre +
    " " +
    apellido +
    " y tengo " +
    edad +
    " años." +
    " Mi direccion es " +
    direccion +
    " y mi telefono es " +
    telefono +
    "." +
    " Mi fecha de nacimiento es " +
    fechaNacimiento +
    " y hoy es " +
    fechaActual +
    "." +
    " Mi sueldo es " +
    sueldo +
    " dolarucos." +
    " Por temporada gano " +
    sueldoTemporada +
    " dolarucos." +
    " Anualmente gano " +
    sueldoAnual +
    " dolares." +
    " Cada semana obtengo " +
    sueldoSemanal +
    " dolares." +
    " A diario gano " +
    sueldoDiario +
    " dolares." +
    " Por hora son " +
    sueldoHora +
    " dolares" +
    " y por minuto " +
    sueldoMinuto +
    " dolares." +
    " Cada segundo obtengo " +
    sueldoSegundo +
    " dolares." +
    " y cada milisegundo gano " +
    sueldoMilisegundo +
    " y me la vacilo firme.";

  contenedor.innerHTML = historia; //innerHTML es un atributo de un elemento HTML y se usa para escribir en el contenido de un elemento HTML.
}
