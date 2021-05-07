let preguntas = [{id:"1",  preg:"Quién mató al Sr. Burns?", img: "img/burns1.jpg"},
                 {id:"2",  preg:"¿Bajo qué escondió 'El Gato de Sprinfield' su gran tesoro?", img:"img/elgato1.jpg"},
                 {id:"3",  preg:"¿El alma de Homero pertenece a...?", img:"img/flanders.jpg"},
                 {id:"4",  preg:"Con 20 dólares se puede comprar mucha/o...", img:"img/mani.png"},
                 {id:"5",  preg:"¿Cómo se llamaba el oso del Sr. Burns?", img:"img/bobo.jpg"},
                 {id:"6",  preg:"un submarino nuclear, se dice...", img:"img/atomico.jpg"},
                 {id:"7",  preg:"Si sacan menos de 9, sea quien sea...", img:"img/tabla.png"},
                 {id:"8",  preg:"Cuando Bart jugaba al Hockey, Homero le dice 'si por azar pierdes...'", img:"img/hockey.jpg"},
                 {id:"9",  preg:"El parque de diversiones del futuro (Tomy y Daly), dónde nada puede...", img:"img/malirsal.jpg"},
                 {id:"10", preg:"¿Qué traía el 'extraterrestre' que se presentaba todos los viernes en el bosque?", img:"img/paz.jpg"}
];



let respuestas = [{id:1, opciones:  ["Maggie","Smithers"], correcta:0},
                  {id:2, opciones:  ["Una gran 'T'", "Una palmera"], correcta:0},
                  {id:3, opciones:  ["Flanders", "Marge"], correcta:1},
                  {id:4, opciones:  ["Mani", "Cerveza"], correcta:0},
                  {id:5, opciones:  ["Toto", "Bobo"], correcta:1},
                  {id:6, opciones:  ["A-tó-mi-co", "Atómico"], correcta:0},
                  {id:7, opciones:  ["Los mato", "Hay tabla"], correcta:1},
                  {id:8, opciones:  ["Te mato!", "No te preocupes"], correcta:0},
                  {id:9, opciones:  ["Malir Sal", "Salir Mal"], correcta:0},
                  {id:10, opciones: ["Venganza", "Paz"], correcta:1},
];


$('#marcoPreguntas').hide().fadeIn();

$('document').ready(function(){

});


$("body").prepend('<h1 style="display: none" >Bienvenidos a Simpson Trivia!</h1>');

$("h1").fadeIn(2000);

renderPregunta = () => {
    if (contador == totalpreguntas) {
        clear();
    } else {

        preguntaContenido.innerHTML =`
            <h3>${preguntas[contador].preg}</h3>
            <br>
            <div class="imgPreg">
                <img src="${preguntas[contador].img}"/>
            </div>`;          
        renderRespuesta();
    }
}

renderRespuesta = () =>{
    let opciones = respuestas[contador].opciones;
    respuestaContenido.innerHTML = '';

    for (respuesta of opciones){
        respuestaContenido.innerHTML += `
            <button class="btn2" id="boton${contadorBoton}"><p>${respuesta}</p></button>`;
            contadorBoton ++;
    }

    botones = document.querySelectorAll(".btn2")
    for (boton of botones){
        boton.addEventListener("click", (e)=>{      

            $('#marcoPreguntas').fadeOut("slow", function(){
            $("#marcoPreguntas").fadeIn(1000);

            let posicionRta = respuestas[contador].opciones.indexOf(e.target.innerText); 
            if (respuestas[contador].correcta === posicionRta){
                console.log("Excelente!");
                contador ++;
                puntaje ++;
                renderPregunta ();
            } else {
            console.log("D'oh! Incorrecta!");
                contador ++;
                renderPregunta ();
            }
         })
         $('.boton2').click(function(){  
            });
        });
    }
}



const clear = () => {
    preguntaContenido.innerHTML="";
    respuestaContenido.innerHTML = `
        <div class="terminado">
            <h2>Cuestionario terminado !!!</h2>
            <br>
            <h3>Tu puntaje:${puntaje}/10</h3>
            <br>
            <div class="imgPreg">
                <img src=img/yahoo.png>
            </div> 
        </div>`
};



for(pregunta of preguntas){
    console.log(pregunta.id);
    console.log(pregunta.preg);
    console.log(pregunta.img);
}



const saveLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

saveLocal("listaPreguntas", JSON.stringify(preguntas));

let contador = 0;
let contadorBoton = 1;
    totalpreguntas = 10;
let puntaje = 0;
let preguntaContenido = document.querySelector('#pregunta');
let respuestaContenido = document.querySelector('#respuesta');
renderPregunta();