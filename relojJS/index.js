var display = document.getElementById("reloj")
const cuerpoDocumento = document.body;
cuerpoDocumento.onload = mueveReloj;

function mueveReloj() {
    var timeZone = new Date();
    var hora = timeZone.getHours();
    var minutos = timeZone.getMinutes();
    var segundos = timeZone.getSeconds();
    display.value = hora + ":" + minutos + ":" + segundos;

    setTimeout(() => {
        mueveReloj()
    }, 1000);
}

