export function sorteo(btnSorteo, listaSorteo) {
    const d = document;
    const $lista = d.querySelectorAll(listaSorteo)

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnSorteo)) {
            let posicion = Math.floor((Math.random() * $lista.length))
            alert(`El ganador es: ${$lista[posicion].textContent}`)
        }
    });

}
// Funcion para el sorteo en una pagina web, pegar en la consola de la pagina
/* const getWinner2 = (listaSorteo) =>{
    const $lista = document.querySelectorAll(listaSorteo)
    let posicion = Math.floor((Math.random()*$lista.length));
    const winner = $lista[posicion] 
    console.log(winner)
    return `El ganador es: ${winner.textContent}`
} */