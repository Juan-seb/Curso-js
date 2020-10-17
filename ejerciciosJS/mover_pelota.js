let x = 0;
let y = 0;
export function moverPelota(e, pelota, marco) {
    // e es el evento keydown, pelota nos referimos al div que corresponde a la pelota y marco nos referimos
    // al area en donde se puede mover la pelota

    const $pelota = document.querySelector(pelota);
    const $area = document.querySelector(marco);
    // getBoundingClientRect es un metodo que me devuelve varios valores como el punto en donde esta dibujado el
    // elemento con respecto al padre y su posicion con respecto al top, left, bottom, right
    const limites = $area.getBoundingClientRect();
    const limPelota = $pelota.getBoundingClientRect();

    switch (e.key) {
        case "ArrowDown":
            if (limPelota.bottom < limites.bottom) {
                e.preventDefault();
                y++;
            }
            break;

        case "ArrowUp":
            if (limites.top < limPelota.top) {
                e.preventDefault();
                y--;
            }
            break;

        case "ArrowLeft":
            if (limPelota.left > limites.left) {
                e.preventDefault();
                x--;
            }
            break;

        case "ArrowRight":
            if (limPelota.right < limites.right) {
                e.preventDefault();
                x++;
            }
            break;
    }

    $pelota.style.transform = `translate(${x * 15}px , ${y * 15}px)`;
}