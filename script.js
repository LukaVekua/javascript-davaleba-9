var Skala = document.getElementById("seri_mandzili");
Skala.style.width = "300px";
Skala.style.height = "20px";
Skala.style.border = "1px solid black";
Skala.style.backgroundColor = "lightgrey";
Skala.style.position = "relative";
Skala.style.top = "30px";

var Nishnuli = document.getElementById("nishnuli");
Nishnuli.style.width = "10px";
Nishnuli.style.height = "35px";
Nishnuli.style.border = "1px solid black";
Nishnuli.style.backgroundColor = "blue";
Nishnuli.style.position = "relative";



const button = document.querySelector('.btn');
const nishnuli = document.querySelector('#nishnuli');

button.addEventListener('click', () => {
  nishnuli.classList.add('active');
})