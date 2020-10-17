export function tiempoRestante(texto, hora, mensaje) {
    // texto es el parrafo donde se ira poniendo el reloj, hora es la hora en que queremos que termine la cuenta,
    // mensaje es lo que vamos a mostrar en el momento en que se termine la cuenta regresiva
    const milisegundos = 1000;
    const minutes = milisegundos * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const horaObjetivo = new Date(hora);

    const $tiempo = document.querySelector(texto);

    let tiempo;

    tiempo = setInterval(() => {
        let horaActual = new Date();
        let intervalo = horaObjetivo - horaActual;

        let dias = Math.floor(intervalo / days);
        let horas = Math.floor((intervalo % days) / hours);
        (horas > 0) ? "" : horas = "0" + horas
        let minutos = Math.floor((intervalo % hours) / minutes);
        (minutos > 9) ? "" : minutos = "0" + minutos
        let segundos = Math.floor(((intervalo % minutes) / milisegundos));
        (segundos > 9) ? "" : segundos = "0" + segundos

        $tiempo.textContent = `Faltan: ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;

        if (intervalo < 0) {
            clearInterval(tiempo);
            $tiempo.textContent = mensaje;
        }

    }, 1000);
}