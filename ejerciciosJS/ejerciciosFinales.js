export function intelligentVideo(video) {

    let intersecting;

    const $video = document.querySelector(video);
    // Opciones del observador, thresold de 0.5, apenas se pase el 50% en el viewporth del video entonces este activara
    // la callback
    const options = {
        root: null,
        threshold: 0.5
    }
    
    const callbackObserver = (entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                $video.play();
            } else {
                $video.pause();
            }
            // Guardamos esta variable para que al cambiar la ventana si el viewporth se mantiene en el video,
            // este se siga reproduciendo, de lo contrario esta variable cambiara a false y al volver a 
            // la ventana entonces no se seguira reproduciendo.
            intersecting = entry.isIntersecting;
    
        });
        
    }

    let observer = new IntersectionObserver(callbackObserver, options);
    observer.observe($video);

    window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && intersecting) {
            $video.play();
        } else {
            $video.pause();

        }
    });

    // Forma dinamica de que varios videos se reproduzcan o paren y que al mismo tiempo si se cambia la ventana
    // entonces se siga reproduciendo si el viewporth se mantiene en el video y no se cambia.

    /* export function intelligentVideo() {

        let intersecting;
        let target;
    
        const $video = document.querySelectorAll(video);
        const options = {
            root: null,
            threshold: 0.5
        }
        
        const callbackObserver = (entries) => {
            entries.forEach(entry => {
                
                if (entry.isIntersecting) {
                    entry.target.play();
                } else {
                    entry.target.pause();
                }
    
                intersecting = entry.isIntersecting;
                target = entry.target;
            });
            
        }
    
        let observer = new IntersectionObserver(callbackObserver, options);
    
        $video.forEach(element => {
            observer.observe(element);
        });
    
        window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible' && intersecting) {
                target.play();
            } else {
                target.pause();
    
            }
        });
    
    } */

}