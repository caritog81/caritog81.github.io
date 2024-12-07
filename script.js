const phrases = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.",
    "No te preocupes por fracasar. Solo tienes que acertar una vez.",
    "La mejor manera de predecir el futuro es inventándolo.",
    "No importa lo lento que avances, siempre y cuando no te detengas.",
    "¿Que mas es posible?",
    "¿Como puede mejorar mi día?",
    "¿Que requiere mi atencion hoy?",
    "¿Que puedo añadir a mi vida que me permita crear flujos de dinero generativo ahora y en el futuro?",
    "¿Que punto de vista puedo tener que va a sostener mi crecimiento económico independiente de a que me dedique?",
    "¿Quien quiere pagarme por el valor que brindo a través de lo que soy o a través de mis dones y talentos?",
    "¿Que tomaria, que se requiere para ser pagada por todo lo que hago? Por lo que pienso por lo que leo por lo que veo etc? Por ser yo?",
    "¿Que es lo que realmente requiero o deseo?",
    "¿Qué espacio puedo ser hoy? Esto se refiere al recibir."

];

function generatePhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[randomIndex];
    document.getElementById("phrase").innerText = phrase;
}
