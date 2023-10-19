// leyendo Html desde JavaScript


const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');
console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

// escribiendo HTML desde JavaScript
// 1 cambiando texto desde JavaScript
h1.innerHTML = 'Andres <br> Urbano'; // este crea nuevo codigo en html
h1.innerText = 'Andres <br> Urbano'; // forma basica para protegerte de intrusos este comvierte solamente a texto 
// modificando un atributo (clase, id) desde JavaScript
//console.log(h1.getAttribute('class')) // me imprime el nombre de la clase en la consola 
//h1.setAttribute('class','Rojo'); //de esta manera se modifica el valor o nombre del atributo

h1.classList.add('rojo');// de esta manera se puede agregar una clase adicional
h1.classList.remove('verde'); // lo que hace esta funcion es eliminar una clase en especifico 

//h1.classList.toggle() revisar , me sirve para poner y quitar una clase  
//h1.classList.contains() revisar , es una especie de condicional y me devuelve como condicional true or false 

// revisar las siguientes funciones : h1.classList.toggle('verde'),h1.classList.contains('verde')
input.value = ("123"); // valor por defecto

const img = document.createElement('img'); // esta es una de las maneras de crear un elemento o etiqueta dentro de HTML
img.setAttribute('src', './posche.png')
//pid.innerHTML = ""; borra todo el contenido que esta dentro de la etiqueta de html 
pid.append(img); //crea un elemento dentro de otro elemento 
