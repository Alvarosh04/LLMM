let preguntasXML = {
  es: [],
  en: []
};

let idioma = 'es';
let indice = 0;
let puntaje = 0;
let timer = 0;
let intervalo;
let finalizado = false;

const textos = {
  es: {
    bienvenida: '¡Bienvenido al mundo de One Piece! ¿Estás listo para probar tus conocimientos?',
    comenzar: 'Comenzar',
    siguiente: 'Siguiente',
    tiempo: '⏱️ Tiempo:',
    puntajeFinal: 'Puntaje final',
    reiniciar: 'Reiniciar test',
    niveles: ['¿Eres un impostor?', 'Fan ocasional', '¡Fanático de corazón!', '¡Nakama verdadero!']
  },
  en: {
    bienvenida: 'Welcome to the world of One Piece! Are you ready to test your knowledge?',
    comenzar: 'Start',
    siguiente: 'Next',
    tiempo: '⏱️ Time:',
    puntajeFinal: 'Final Score',
    reiniciar: 'Restart quiz',
    niveles: ['Are you a fake fan?', 'Casual fan', 'Hardcore fan!', 'True nakama!']
  }
};

document.getElementById("idioma").addEventListener("change", function () {
  idioma = this.value;
  actualizarTextos();

  // Solo actualizar pregunta si las preguntas están cargadas para el idioma actual y no se ha finalizado
  if (preguntasXML[idioma].length > 0 && !finalizado) {
    mostrarPregunta();
  }
  // Si el quiz ya terminó, actualiza resultado en el nuevo idioma
  else if (finalizado) {
    mostrarResultado();
  }
});

function actualizarTextos() {
  document.getElementById("mensajeBienvenida").textContent = textos[idioma].bienvenida;
  document.getElementById("btnComenzar").textContent = textos[idioma].comenzar;
  document.getElementById("btnSiguiente").textContent = textos[idioma].siguiente;
  document.getElementById("reloj").textContent = `${textos[idioma].tiempo} ${timer} s`;

  const reiniciar = document.querySelector("#resultado button");
  if (reiniciar) reiniciar.textContent = textos[idioma].reiniciar;
}

function empezarQuiz() {
  document.getElementById("bienvenida").classList.remove("visible");
  setTimeout(() => {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("quiz").classList.add("visible");
    document.getElementById("btnSiguiente").style.display = "inline-block";

    puntaje = 0;
    indice = 0;
    timer = 0;
    finalizado = false;

    document.getElementById("reloj").textContent = `${textos[idioma].tiempo} 0 s`;

    clearInterval(intervalo);
    iniciarReloj();
    mostrarPregunta();
  }, 800);
}

function reiniciarQuiz() {
  clearInterval(intervalo);
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("quiz").classList.remove("visible");
  document.getElementById("quiz").style.display = "none";
  document.getElementById("btnSiguiente").style.display = "none";

  finalizado = false;
  indice = 0;
  puntaje = 0;
  timer = 0;

  const bienvenida = document.getElementById("bienvenida");
  bienvenida.style.display = "block";
  setTimeout(() => bienvenida.classList.add("visible"), 10);

  document.getElementById("reloj").textContent = `${textos[idioma].tiempo} 0 s`;
}

function cargarTodosLosXML() {
  ["es", "en"].forEach(lang => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `preguntas_${lang}.xml`);
    xhr.onload = function () {
      const xml = xhr.responseXML;
      preguntasXML[lang] = Array.from(xml.getElementsByTagName("question"));
      // Si estamos en el idioma cargado y la bienvenida ya se ve, actualizamos textos
      if (lang === idioma) actualizarTextos();
    };
    xhr.send();
  });
}

function mostrarPregunta() {
  const preguntas = preguntasXML[idioma];
  if (indice >= preguntas.length) {
    mostrarResultado();
    return;
  }

  const q = preguntas[indice];
  const wording = q.getElementsByTagName("wording")[0].textContent;
  const choices = Array.from(q.getElementsByTagName("choice"));

  let html = `<h2>${wording}</h2>`;
  choices.forEach((c) => {
    html += `<button onclick="verificarRespuesta(this, ${c.getAttribute('correct') === 'yes'})">${c.textContent}</button><br>`;
  });

  const quiz = document.getElementById("quiz");
  quiz.classList.remove("visible");
  setTimeout(() => {
    quiz.innerHTML = html;
    quiz.classList.add("visible");
  }, 200);
}

function verificarRespuesta(boton, esCorrecta) {
  if (esCorrecta) {
    puntaje++;
    boton.style.backgroundColor = "lightgreen";
  } else {
    boton.style.backgroundColor = "salmon";
  }
  setTimeout(siguientePregunta, 1000);
}

function siguientePregunta() {
  indice++;
  mostrarPregunta();
}

function mostrarResultado() {
  finalizado = true;
  document.getElementById("quiz").innerHTML = "";
  document.getElementById("btnSiguiente").style.display = "none";
  clearInterval(intervalo);

  const total = preguntasXML[idioma].length;
  const porcentaje = (puntaje / total) * 100;
  let nivel;

  if (porcentaje <= 25) nivel = textos[idioma].niveles[0];
  else if (porcentaje <= 50) nivel = textos[idioma].niveles[1];
  else if (porcentaje <= 75) nivel = textos[idioma].niveles[2];
  else nivel = textos[idioma].niveles[3];

  document.getElementById("resultado").innerHTML = `
    <h2>${textos[idioma].puntajeFinal}: ${puntaje}/${total}</h2>
    <p>${nivel}</p>
    <button onclick="reiniciarQuiz()">${textos[idioma].reiniciar}</button>
  `;
}

function iniciarReloj() {
  intervalo = setInterval(() => {
    timer++;
    document.getElementById("reloj").textContent = `${textos[idioma].tiempo} ${timer} s`;
  }, 1000);
}

window.onload = () => {
  cargarTodosLosXML();
  actualizarTextos();
  setTimeout(() => {
    document.getElementById("bienvenida").classList.add("visible");
  }, 100);
};





