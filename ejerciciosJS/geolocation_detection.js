export function geolocation(locate) {

    const $divLocate = document.querySelector(locate)
    let posicion;

    const options = {
        enableHighAccuracy: true,
        timeout: 2000,
        maxiumAge: 0
    }

    const position = (pos) => {
        const cord = pos.coords;
        posicion = `
        <ul>
            <li>La latitud es: ${cord.latitude}</li>
            <li>La longitud es: ${cord.longitude}</li>
            <li>La presicion es de: ${cord.accuracy} metros</li>
            <li><a href="https://www.google.com/maps/@${cord.latitude},${cord.longitude},18z" target="_blank">Ver en GoogleMaps</a></li>
        </ul>
        `;
        $divLocate.innerHTML = posicion;
    }

    const error = (err) => {
        console.log(err)
    }

    navigator.geolocation.getCurrentPosition(position, error, options);

}