export function webCam(video) {
    // API mediaDevices me permite acceder a video, audio, los dispositivos, etc.

    const $video = document.getElementById(video);
    const cam = navigator.mediaDevices.getUserMedia({
        video: {
            width: 1280,
            height: 720
        }
    })
    // Promise para el metodo getUserMedia() con este podemos empezar a mostrar lo que esta en la camara.
    cam.then((stream) => {
        $video.srcObject = stream;
        $video.play();
        console.log(stream)
    }).catch((err) => {
        $video.style.width = '0';
        $video.style.height = '0';
        $video.insertAdjacentHTML("beforebegin", "<p>El video no se pudo cargar, permite usar tu camara</p>")
        console.log(err)
    });

    /* const cam2 = navigator.mediaDevices.enumerateDevices(); */
    // Promise para los dispositivos que se encuentran disponibles

    /* cam2.then((devices)=>{
        devices.forEach(element => {
            console.log(element);
        });
    }) */

}