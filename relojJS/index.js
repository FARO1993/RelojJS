var display = document.getElementById("reloj");
var fecha = document.getElementById("fecha");

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

function mueveReloj() {
    var timeZone = new Date();
    var hora = timeZone.getHours();
    var minutos = timeZone.getMinutes();
    var segundos = timeZone.getSeconds();
    display.value = hora + ":" + minutos + ":" + segundos;

    if( hora > 18 ) {
        document.body.style.backgroundImage = "url('images/noche.jpg')";
    } else if (hora === 6) {
        document.body.style.backgroundImage = "url('images/dia.jpg')";
    }

    let dia = timeZone.getDay();

    if( dia === 1 ) {
        dia = dias[0];
    } else if( dia === 2 ) {
        dia = dias[1];
    } else if( dia === 3 ) {
        dia = dias[2];
    } else if( dia === 4 ) {
        dia = dias[3];
    } else if( dia === 5 ) {
        dia = dias[4];
    } else if( dia === 6 ) {
        dia = dias[5];
    } else if( dia === 7 ) {
        dia = dias [6]
    };

    var fechaDia = timeZone.getDate();
    var fechaMes = timeZone.getMonth();
    var fechaAnio = timeZone.getFullYear();
    fecha.value = `${dia} ${fechaDia}/${fechaMes}/${fechaAnio}`


    setTimeout(() => {
        mueveReloj()
    }, 1000);

    //console.log(timeZone.getDate())
}

//console.log(document.getElementById(minutos))

