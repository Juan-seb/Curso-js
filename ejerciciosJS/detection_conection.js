export function conexion(notification, classConection) {
    const w = window;
    const n = navigator;
    const $message = document.querySelector(notification);

    // notification es la clase del elemento html que aparecere cuando se este conectado o desconectado
    // classConection es la clase que vamos a agregar cuando se desconecte o se conecte.

    // Forma con función como parametro del Listener

    /* const online = () =>{
        if(n.onLine){
            $message.style.backgroundColor = 'green';
            $message.classList.add(classConection);
            $message.textContent = 'Conectado de nuevo';
            setTimeout(() => {
                $message.classList.remove(classConection);
            }, 4000);
        }else{
            $message.style.backgroundColor = 'red';
            $message.classList.add(classConection);
            $message.textContent = 'Estas desconectado';
            setTimeout(() => {
                $message.classList.remove(classConection);
            }, 4000);
        }
    } */

    /* w.addEventListener('online',online)
    w.addEventListener('offline',online); */


    // Forma sin funcion (normal)

    w.addEventListener('online', (e) => {
        $message.style.backgroundColor = 'green';
        $message.classList.add(classConection);
        $message.textContent = 'Conectado de nuevo';
        setTimeout(() => {
            $message.classList.remove(classConection);
        }, 4000);
    });
    w.addEventListener('offline', (e) => {
        $message.style.backgroundColor = 'red';
        $message.classList.add(classConection);
        $message.textContent = 'Estas desconectado';
        setTimeout(() => {
            $message.classList.remove(classConection);
        }, 4000);
    });


}