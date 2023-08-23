const fatInput = document.getElementById('fatInput');
const tabInput = document.getElementById('tabInput');
const vogInput = document.getElementById('vogInput');

fatInput.addEventListener('input', function(){
    const fatRes = document.getElementById('fatRes');
    fatRes.textContent = fatorial(fatInput.value);

    if(fatInput.value == ''){
        fatRes.textContent = '';
    }
});

tabInput.addEventListener('input', function(){
    let tabuadaRes = tabuada(parseInt(tabInput.value));;
    const tabRes = document.getElementById('tabRes');
    tabRes.textContent = '';

    for(let i = 1; i <= 10; i++){
        tabRes.innerHTML += `${tabInput.value} x ${i} = ${tabuadaRes[i]}<br>`;
    }

    if(tabInput.value == ''){
        tabRes.textContent = '';
    }
});

vogInput.addEventListener('input', function(){
    let vogRes = document.getElementById('vogRes');
    vogRes.textContent = contaVogal(vogInput.value);

    if(vogInput.value == ''){
        vogRes.textContent = '';
    }
});

function fatorial(num){
    if(num == 1 || num == 0){
        return 1;
    }
    return num * fatorial(num-1);
}

function tabuada(num){
    let resTabuada = [];
    for(let i = 1; i <= 10; i++){
        resTabuada[i] = num * i;
    }
    return resTabuada;
}

function contaVogal(string){
    let numVogais = 0;
    string = string.toLowerCase();
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
            numVogais++;
        }
    }
    return numVogais;
}