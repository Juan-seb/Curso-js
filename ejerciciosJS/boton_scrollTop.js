export function botonScroll(btnScroll, btnActive) {
    // btnScroll es la clase del boton, y btnActive es la clase CSS que usamos para que el boton aparezca
    const $botonScroll = document.querySelector(btnScroll);

    document.addEventListener('scroll', e => {

        if (scrollY > 200) {
            $botonScroll.classList.add(btnActive);
        } else {
            $botonScroll.classList.remove(btnActive);
        }
    });

    document.addEventListener('click', (e) => {

        if (e.target.matches(btnScroll)) {
            scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    })
}