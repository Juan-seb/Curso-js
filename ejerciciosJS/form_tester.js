export function formTester(form,formTester) {
    const d = document;
    const $form = d.getElementById(form);
    let win;
    // Con el $form.nombreElementoHTML podemos acceder facilmente a estos si estamos en un formulario, solo si estamos
    // en un formulario
    d.addEventListener('submit', (e) => {
        
        if (e.target.matches(formTester)) {
            win = open($form.dir_web.value,
                "Responsive tester",
                `width=${$form.dir_anchura.value}px, height =${$form.dir_altura.value}px`
            )
        }
    });

    d.addEventListener('click', (e) => {
        if (e.target === $form.cerrar) {
            win.close();
        }
    })

}