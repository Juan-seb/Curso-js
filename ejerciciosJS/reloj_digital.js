export function relojDigital(btnReloj, btnParar, texto) {
    const d = document;
    let temp;

    // Es necesario guardar en una variable el intervalo debido a que este tiene que parar.

    d.addEventListener('click', (e) => {

        if (e.target.matches(btnReloj)) {
            d.querySelector(btnReloj).setAttribute("disabled", "false");
            temp = setInterval(() => {
                d.querySelector(texto).textContent = new Date().toLocaleTimeString();
            }, 1000);
        }

        if (e.target.matches(btnParar)) {
            clearInterval(temp);
            d.querySelector(texto).textContent = null;
            d.querySelector(btnReloj).removeAttribute("disabled")
        }

    });
}