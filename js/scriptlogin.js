window.onload = function () {
    var intervalo;
    var boton = document.getElementById('btnEnviar');
    var segundos = 1;

    var cuenta = function () {
        if (segundos > 0) {
            segundos--;
            boton.value = 'Espere ';
            intervalo = setInterval(cuenta, 6000);
        } else {
            clearInterval(intervalo);
            boton.value = 'Entrar!';
            boton.style.display = 'inline-block';
            boton.disabled = false;
        }
    }
    cuenta();
}