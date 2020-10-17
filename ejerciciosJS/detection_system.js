export function detectionDevices(classUser) {
    const d = document,
        n = navigator,
        ua = n.userAgent

    // El classUser es el div en el que iremos poniendo todo

    // Los objetos contienen expresiones regulares que me ayudaran a saber el sistema operativo, el navegador
    // y tambien si esta en un dispositivo movil, las funciones any me hacen una validacion general de todos
    // sea el navegador o el sistema o si es movil.
    const $parrafoUserAgent = d.querySelector(classUser),
        isMobile = {
            android: () => ua.match(/android/i),
            iphone: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.iphone() || this.windows();
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            apple: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.apple() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera | opera mini/i),
            ie: () => ua.match(/msie | iemobile/i),
            edge: () => ua.match(/edg/i),
            any: function () {

                return this.ie() || this.edge()
                    || this.chrome() || this.safari()
                    || this.firefox() || this.opera()

            }
        }

    $parrafoUserAgent.innerHTML = `
    <ul>
        <li>${ua}</li>
        <li>Plataforma:${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
        <li>Navegador: ${isBrowser.any()}</li>
    </ul>`;

    // Para generar contenidos exclusivos

    if (isBrowser.any() == "Chrome") {
        $parrafoUserAgent.innerHTML += `<p><mark>Este contenido se visualiza en Chrome</mark></p>`
    }
    if (isBrowser.any() == "Edg") {
        $parrafoUserAgent.innerHTML += `<p><mark>Este contenido se visualiza en Edge</mark></p>`
    }

    // Para generar contenido a partir del sistema operativo
    if (isDesktop.windows()) {
        $parrafoUserAgent.innerHTML += `<p><mark>Descarga la version windows</mark></p>`
    }

    // Redirecciones

    if (isMobile.android()) {
        location.href = "https://jonmircha.com"
    }
}
