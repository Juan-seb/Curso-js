const d = document;

export function storyTeller() {

    const voices = [];
    speechSynthesis.getVoices();

    setTimeout(() => {
        speechSynthesis.getVoices().forEach(voice => {
            voices.push(voice)
            const $section = d.querySelector('.selector');
            const $voice = d.createElement('option');
            $voice.setAttribute('value',voice.name);
            $voice.textContent = voice.name;
            $section.appendChild($voice);

            console.log(`My name is ${voice.name}`)
        });
    }, 1000);
    
    d.addEventListener('click',(e)=>{
        if (e.target.matches(".button__read")) {
            const $section = d.querySelector('.selector');
            const $text = d.querySelector('.text_speak');
            
            const voiceIndex = voices.findIndex((voice) => {
                return voice.name === $section.value;
            });

            const utterance = new SpeechSynthesisUtterance();
            utterance.voice = voices[voiceIndex];
            utterance.text = $text.value;

            speechSynthesis.speak(utterance);
            
        }
    })


}