var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");
var direccion = "Calle falsa 123";
var telefono = "123456789";
var fechaNacimiento = prompt("Ingrese su año de nacimiento");
var fechaActual = new Date().getFullYear();
var edad = fechaActual - fechaNacimiento;
var sueldo = prompt("Ingrese su sueldo mensual en dolares");
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

alert(historia);
