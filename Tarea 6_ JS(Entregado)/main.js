
function addToPantalla(value) {
    document.getElementById('pantalla').value += value;           //A medida que se introducen valores los recoje en pantalla.
}

function calculate() {  //Al pulsar el boton =
    let operacion = document.getElementById('pantalla').value;      //obtiene la operacion en pantalla
    try {
        let resultado = eval(operacion);                           //eval()calcula la operacion que este en pantalla.
        document.getElementById('pantalla').value = resultado;     //Muestra el resultado en pantalla
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}

function clearPantalla() {                                         //Al pulsar C se limpia la pantalla.
    document.getElementById('pantalla').value = '';
}