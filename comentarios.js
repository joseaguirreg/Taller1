//arreglo 
let ides = [];

//fecha de hoy
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

fecha = d + "/" + m + "/" + y;

//COMENTARIO DE EJEMPLO

const lista = document.getElementById("cajacomentarios");
const li = document.createElement("a");
li.className="list-group-item list-group-item-action flex-column align-items-start";
li.setAttribute("id","auxi");
lista.appendChild(li);

const lista2 = document.getElementById("auxi");
const li2 = document.createElement("div");
li2.className="d-flex w-100 justify-content-between";
li2.setAttribute("id","auxi2");
lista2.appendChild(li2);

const lista3 = document.getElementById("auxi2");
const li3 = document.createElement("h5");
li3.className="mb-1";
li3.textContent = "Felipe";
lista3.appendChild(li3);

const lista5 = document.getElementById("auxi2");
const li5 = document.createElement("small");
li5.textContent = fecha;
lista5.appendChild(li5);

const lista4 = document.getElementById("auxi");
const li4 = document.createElement("p");
li4.className="mb-1";
li4.textContent = "Mandé a hacer una terraza para mi patio, los profesionales eran muy capaces y entregaron el trabajo en un tiempo record";
lista4.appendChild(li4);

ides.push('auxi');


//RESCATAR VALORES DE NOMBRE, COMENTARIO Y BOTON

var boton = document.getElementById("btn3");
var nombre = document.getElementById("nombreform");
var comentario = document.getElementById("comentarioform");


//FUNCION BOTON Y VALIDACIONES
boton.addEventListener("click",function(){
        if(nombre.value.length>=3){
                if(comentario.value.length>0){
                        if(comentario.value.length<200){
                                if(ides.length<3){
                                        agregar();
                                }else{
                                        
                                        ides.shift();
                                        agregar();
                                        var a = document.getElementById('cajacomentarios');
                                        a.removeChild(a.firstChild);
                                }
                        }else{
                                alert("Porfavor, respete el máximo de 200 caracteres");
                        }
                }else{
                        alert("Porfavor, escriba un comentario");
                }
        }else{
                alert("El mínimo son 3 caracteres");
        }

        

});



//AGREGAR COMENTARIO
function agregar(){
        const idA = nombre.value + Math.random();

        //crear elemento a 
        const lista = document.getElementById("cajacomentarios");
        const li = document.createElement("a");
        li.className="list-group-item list-group-item-action flex-column align-items-start";
        li.setAttribute("id",idA);
        lista.appendChild(li);

        //crear div
        const lista2 = document.getElementById(idA);
        const li2 = document.createElement("div");
        li2.className="d-flex w-100 justify-content-between";
        li2.setAttribute("id","div"+idA);
        lista2.appendChild(li2);

        //crear h5 con nombre 
        const lista3 = document.getElementById("div"+idA);
        const li3 = document.createElement("h5");
        li3.className="mb-1";
        li3.textContent = nombre.value;
        lista3.appendChild(li3);

        //crear fecha
        const lista5 = document.getElementById("div"+idA);
        const li5 = document.createElement("small");
        li5.textContent = fecha;
        lista5.appendChild(li5);

        //crear comentario
        const lista4 = document.getElementById(idA);
        const li4 = document.createElement("p");
        li4.className="mb-1";
        li4.textContent = comentario.value;
        lista4.appendChild(li4);

        ides.push(idA);
}
