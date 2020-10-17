export function botonDarkLight(btnDark, dataAtribute, classDark, classDarkBoton) {
    // btnDark corresponde a la clase del boton, dataAtribute al NodeList que tenemos con los elementos que contienen ese
    // atributo, classDark es la clase que usamos para darle el estilo dark y classDarkBoton es la clase nueva del boton
    const d = document;
    const $boton = d.querySelector(btnDark);
    const $elements = d.querySelectorAll(dataAtribute)

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnDark)) {

            $boton.classList.toggle(classDarkBoton);
            $elements.forEach(element => {
                element.classList.toggle(classDark);
            });

            if ($boton.classList.contains(classDarkBoton)) {
                localStorage.setItem('dark', 'active');
            } else {
                localStorage.removeItem('dark');
            }

        }
    });

    d.addEventListener('DOMContentLoaded', (e) => {
        if (localStorage.getItem('dark') === 'active') {
            $boton.classList.add(classDarkBoton)
            $elements.forEach(element => {
                element.classList.add(classDark);
            });
        }
    });

}