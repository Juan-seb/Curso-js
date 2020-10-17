export function hamburgerMenu(btn, panel, link) {
    // el btn es la clase con la que se activara el menu de hamburguesa, el panel es como tal el menu que solo
    // haremos un cambio en la clase css para que funcione, el link es la clase en el html para que este menu se 
    // desactive al presionar un link.
    const d = document;
    d.addEventListener('click', (e) => {

        if ((e.target.matches(`${btn} *`)) || e.target.matches(btn)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }

        if (e.target.matches(link)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btn).classList.toggle("is-active");
        }


    });
}