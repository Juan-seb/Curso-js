const d = document;

export function submitForm() {

    const $form = d.querySelector(".form__contact");
    // Traemos todos los inputs con el campo required del form
    const $inputs = d.querySelectorAll(".form__contact [required]");

    $inputs.forEach(input => {
        // Creamos dinamicamente etiquetas span que contendran los mensajes personalizados y su id es el name del input
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("form__error", "none");
        input.insertAdjacentElement('afterend', $span)
    });

    d.addEventListener('keyup', (e) => {
        if (e.target.matches(".form__contact [required]")) {
            // Si el elemento que crea el evento es un input del form
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern; // Si el input tiene la etiqueta pattern
            // o el data attribute del pattern.

            // El patron tiene que existir y el input no debe estar vacio
            if (pattern && $input.value !== "") {
                // Creamos expresiones regulares dependiendo del patron pattern del html
                let regEx = new RegExp(pattern)
                let result = regEx.exec($input.value);
                // retornamos el mensaje personalizado dependiendo de si el patrón tiene un resultado.
                return !result
                    ? d.getElementById($input.name).classList.add("is-active__form") :
                    d.getElementById($input.name).classList.remove("is-active__form")
            }

            if (!pattern) {
                // Como hay campos que no tienen patron necesito personalizarlo yo.
                return ($input.value === "")
                    ? d.getElementById($input.name).classList.add("is-active__form") :
                    d.getElementById($input.name).classList.remove("is-active__form")
            }
        }
    });

    
    d.addEventListener('submit',(e)=>{
        
        const $loader = d.querySelector('.form__loader');
        const $response = d.querySelector('.form__sent');
        // Ponemos el loader para que el cliente tengo un descanso visual.
        $loader.classList.remove("none");

        setTimeout(() => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            setTimeout(() => $response.classList.add("none") , 3000);
        }, 3000);

        
        alert("Enviando formulario")
    });
}