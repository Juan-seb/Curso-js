export function searchFilter(input, selectors) {
    const d = document;

    d.addEventListener('keyup', (e) => {
        if (e.target.matches(input)) {

            d.querySelectorAll(selectors).forEach(element => {
                // El metodo includes es para comparar una subcadena (e.target.value) que se puede encontrar en la cadena
                // principal (element.textContent) 
                if (element.textContent.toLowerCase().includes((e.target.value).toLowerCase())) {
                    element.classList.remove("filter")
                } else {
                    element.classList.add("filter")
                }
            });
        }
    })

}