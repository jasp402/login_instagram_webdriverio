describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url('https://www.instagram.com/');
        browser.pause(3000);

        //input[name="username"]
        //input[name="password"]
        //button[type="submit"]

        //Escribimos en el input de correo
        $('input[name="username"]').setValue('_AQUI_VA_TU_CORREO_');

        //Escribimos en el input de contraseña
        $('input[name="password"]').setValue('_AQUI_VA_TU_CONTRASEÑA_');


        browser.pause(3000);

        //Presionamos el boton entrar
        $('button[type="submit"]').click();

        browser.pause(20000);
    });
});


