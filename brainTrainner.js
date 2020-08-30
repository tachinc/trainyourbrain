let resultado = 0;
function init() {
    /*Definimos los dos operandos*/
    var numero1 = Math.round(Math.random() * 8 + 1);
    var operando1 = document.getElementById("operando1");
    operando1.innerHTML = numero1;   
    var numero2 = Math.round(Math.random() * 8 + 1);
    var operando2 = document.getElementById("operando2");
    operando2.innerHTML = numero2;
    /*Definimos aca el tipo de operacion*/
    var operacion = Math.round(Math.random() * 2);     
    /*Mostramos la operacion en pantalla y calculamos el resultado*/
    if (operacion === 0) {
        var operador = document.getElementById("operador");
        operador.innerHTML = "+";
        resultado = numero1 + numero2;
    } else if (operacion === 1) {
        var operador = document.getElementById("operador");
        operador.innerHTML = "-";
        resultado = numero1 - numero2;
    } else {
        var operador = document.getElementById("operador");
        operador.innerHTML = "x";
        resultado = numero1 * numero2;
    };
    /*Hacemos QUE? con las fucniones*/
    var sumaButton = document.getElementById("sumaButton");
    sumaButton.onclick = handleSumaButton;
    var resObtenido = document.getElementById("resObtenido");
    resObtenido.onkeypress = handleKeyPress;
};
function handleKeyPress(e) {
    var sumaButton = document.getElementById("sumaButton");
    if (e.keyCode === 13) {
        sumaButton.onclick();
        return false;
    };
};

let correctas = 0
let operaciones = 0
let incorrectas = 0
function handleSumaButton() {
    var resObtenido = document.getElementById("resObtenido");
    var resACheckear = resObtenido.value;
    let resACheckearEnNumero = parseInt(resACheckear, 10);
    if (resACheckearEnNumero === resultado) {
            correctas++;
        } else {
            incorrectas++;
        };
    operaciones++;
    resObtenido.value = "";
    if (operaciones < 3) {
        init();
    } else {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = "Respondiste bien  "+correctas+" de "+operaciones+"operaciones";
    } 
};
window.onload = init;
function refreshPage() {
    window.location.reload();
};
/*En esta seccion hacemos el contador de tiempo*/
var timer;
function startTimer() {
    timer = setInterval(ticker, 1000);
    var tick = 0;
    function ticker() {
        console.log(tick);
        var reloj = document.getElementById("reloj");
        reloj.innerHTML = tick;
        tick++;
    };
}
function stopTimer() {
    clearInterval(timer);
};
