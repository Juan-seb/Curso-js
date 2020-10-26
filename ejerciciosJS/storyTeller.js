const d = document;

export function storyTeller() {

    const voices = [];
    const $section = d.querySelector('.selector');
    const utterance = new SpeechSynthesisUtterance();
    
    speechSynthesis.getVoices();

    setTimeout(() => {
        speechSynthesis.getVoices().forEach(voice => {
            // Por cada voz que encuentre en el speechSynthesis se lo agregamos a un arreglo en el que despues buscaremos para
            // cada voz.
            voices.push(voice)
            // Por cada voz creamos el option y se lo agregamos al section.
            const $voice = d.createElement('option');
            $voice.setAttribute('value',voice.name);
            $voice.textContent = voice.name;
            $section.appendChild($voice);
        });
    }, 0);
    
    d.addEventListener('click',(e)=>{
        if (e.target.matches(".button__read")) {

            const $text = d.querySelector('.text_speak');
            
            // Este metodo (findIndex) me devuelve el index de un arreglo de acuerdo a una busqueda que yo haga
            // en este caso busco el index del arreglo voices en el que el valor seleccionado en el select, sea igual al 
            // nombre de la voz guardada.
            const voiceIndex = voices.findIndex((voice) => {
                return voice.name === $section.value;
            });

            // con SpeechSynthesisUtterance() puedo agregarle valores como la voz o el texto que quiero que reproduzca
            // y luego con .speak() lo hara sonar.
            // La voz es el arreglo con el index que encontramos gracias al findIndex
            utterance.voice = voices[voiceIndex];
            utterance.text = $text.value;

            speechSynthesis.speak(utterance);
            
        }
    })
}