var display = document.getElementById("reloj");
var fecha = document.getElementById("fecha");

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function mueveReloj() {
    var timeZone = new Date();
    var hora = timeZone.getHours();
    var minutos = timeZone.getMinutes();
    var segundos = timeZone.getSeconds();
    //Concateno valores para mostrar el horario completo.
    display.value = hora + ":" + minutos + ":" + segundos;

    //Dependiendo el horario, cambia fondo y fuentes.
    if( hora > 18 ) {
        document.body.style.backgroundImage = "url('images/noche.jpg')";
        display.style.color = "white";
        display.style.textShadow = "0 0 30px white";
        fecha.style.color = "white";
        fecha.style.textShadow = "0 0 30px white";
        document.getElementById('titulo').style.color = "white";
        document.getElementById('label1').style.color = "white";
        document.getElementById('label2').style.color = "white"; 
    } else if (hora > 6) {
        document.body.style.backgroundImage = "url('images/dia.jpg')";
        display.style.color = "black";
        fecha.style.color = "black";
        document.getElementById('titulo').style.color = "black";
        document.getElementById('label1').style.color = "black";
        document.getElementById('label2').style.color = "black";
    }

    let dia = timeZone.getDay();

    //Dependiendo del valor obtenido, corresponde a un día de la semana. 
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
    } else if( dia === 0 ) {
        dia = dias [6]
    };

    var fechaDia = timeZone.getDate();
    var fechaMes = timeZone.getMonth();
    var fechaAnio = timeZone.getFullYear();
    //Concateno valores para mostrar la fecha completa.
    fecha.value = `${dia} ${fechaDia}/${fechaMes}/${fechaAnio}`;

    inputDateHour(fecha.value, display.value);

    //Poner en marcha el reloj.
    setTimeout(() => {
        mueveReloj()
    }, 1000);

};

//Formulario para la alarma
//Muestro el formulario
function fijarAlarma() {
    document.getElementById('alarma-form').style.display = 'block';
    document.getElementById('boton-fijar').style.display = 'none';
    document.getElementById('boton-guardar').style.display = 'block';
    document.getElementById('boton-cancelar').style.display = 'block';
};

//Oculto y guardo los cambios
function guardarAlarma() {
    document.getElementById('alarma-form').style.display = 'none';
    document.getElementById('boton-fijar').style.display = 'block';
    document.getElementById('boton-guardar').style.display = 'none';
    document.getElementById('boton-cancelar').style.display = 'none';
};

//Oculto el form sin guardar ningun cambio.
function cancelar() {
    guardarAlarma();       
};

//Datos ingresados en los input de la alarma.
function inputDateHour(fecha, horario) {
    const dateIput = document.getElementById("dateInput");
    const hourInput = document.getElementById("hourInput"); 

    dateIput.addEventListener('change', (event) => {
        const fechaSeleccionada = changeDateInput(event.path[0].value);
    });

    hourInput.addEventListener('change', (event) => {
        const horaSeleccionada = event.path[0].value; 
    })
}

//Modifico el date del input para que el formato de fecha sea dd/MM/yyyy
function changeDateInput(date) {
    const dateSplit = date.split("-");
    dateSplit.splice(3, 1, dateSplit[2]);
    dateSplit.splice(2, 1, dateSplit[0]);
    dateSplit.splice(0, 1, dateSplit[3]);
    dateSplit.splice(3,1);

    return dateSplit.join("/");
}






