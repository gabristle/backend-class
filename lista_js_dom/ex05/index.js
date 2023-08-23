const visor = document.getElementById('c-visor--readonly');

function insert(btn){
    visor.value += btn;
}

function clearVisor(){
    visor.value = '';
}

function calculate() {
    const expression = visor.value;
    const result = eval(expression); // Avalia a expressão
    if (isNaN(result) || !isFinite(result)) {
        visor.value = 'Erro';
    } else {   
        visor.value = result; // Define o resultado no visor
    }
  }