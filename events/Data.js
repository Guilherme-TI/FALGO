const data = new Date();

const day = String(data.getDate()).padStart(2, '0');
const month = String(data.getMonth() + 1).padStart(2, '0');
const year = data.getFullYear();

const fullDate = ` ${day}/${month}/${year}`;
const temporizador = document.getElementById('temporizador');
temporizador.innerText = fullDate;