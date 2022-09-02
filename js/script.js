var contenedor = document.querySelector("#injustice"); // Selecciona el elemento con el id "injustice" y lo guarda en la variable contenedor. Luego, se crea una función para calcular el saldo de injusticia.
var container = document.querySelector("#result"); // Selecciona el elemento con el id "result" y lo guarda en la variable contenedor. Luego, se crea una función para calcular el saldo de injusticia.
var input = document.getElementById("#power-button"); // Selecciona el elemento con el id

const headerInput = document.querySelector("#header-input"); // Se pide el elemento
const spanUsuario = document.querySelector("#span-usuario"); // Se pide el elemento
const spanGame = document.querySelector("#span-game"); // Se

function guardarUsuario() {
  const nombreUsuario = headerInput.value;
  console.log(nombreUsuario); // Selecciona el elemento con el id "suario" y lo guarda en la variable contenedor en la variable contenedor en la variable contenedor
  spanUsuario.innerHTML = nombreUsuario + " esta en la casa!";

  spanUsuario.classList.remove("anonimo");
  spanUsuario.classList.add("identificado");
}

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

function login(email, password) {
  if (email === "ademo18@gmail.com") {
    if (password === "pincheperroenvidioso") {
      console.log("Hello sir!");
    } else {
      console.log("Incorrect!");
    }
  } else {
    console.log("Please enter the correct email address");
  }
}

function game() {
  let selection = spanGame.value;

  let comp = Math.ceil(Math.random() * 3);
  if (comp === 1) {
    computer = "piedra";
  } else if (comp === 2) {
    computer = "papel";
  } else {
    computer = "tijera";
  }

  console.log(selection, computer);

  //ganaste
  if (selection === "piedra") {
    if (computer === "tijera") {
      console.log("Ganaste!");
      resultadation = "Ganaste!";
    }
  }
  if (selection === "papel") {
    if (computer === "piedra") {
      console.log("Ganaste!");
      resultadation = "Ganaste!";
    }
  }
  if (selection === "tijera") {
    if (computer === "papel") {
      console.log("Ganaste!");
      resultadation = "Ganaste!";
    }
  }

  //perdiste
  if (selection === "piedra") {
    if (computer === "papel") {
      console.log("Perdiste!");
      resultadation = "Perdiste!";
    }
  }
  if (selection === "papel") {
    if (computer === "tijera") {
      console.log("Perdiste!");
      resultadation = "Perdiste!";
    }
  }
  if (selection === "tijera") {
    if (computer === "piedra") {
      console.log("Perdiste!");
      resultadation = "Perdiste!";
    }
  }

  //empates
  if (selection === "piedra") {
    if (computer === "piedra") {
      console.log("Empate!");
      resultadation = "Empate!";
    }
  }
  if (selection === "papel") {
    if (computer === "papel") {
      console.log("Empate!");
      resultadation = "Empate!";
    }
  }
  if (selection === "tijera") {
    if (computer === "tijera") {
      console.log("Empate!");
      resultadation = "Empate!";
    }
  }

  let current =
    "Tu elegiste " +
    selection +
    " y la computadora eligio " +
    computer +
    "." +
    " El resultado es: " +
    resultadation;

  container.innerHTML = current; //innerHTML es un atributo de un elemento HTML y se usa para escribir en el contenido de un elemento HTML.

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("game").click();
    }
  });
}
