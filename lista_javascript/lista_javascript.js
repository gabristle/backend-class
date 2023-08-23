/*1 - Escreva uma função que calcule e retorne o fatorial de um número.*/
function fatorial(num){
    if(num == 1 || num == 0){
        return 1;
    }
    return num * fatorial(num-1);
}

/*2 - Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro.*/
function repeteTexto(num, texto){
    textoPronto = '';

    for(let i = 0; i < num; i++){
        textoPronto += texto;
    }
    return textoPronto;
}


/*3 - Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro.*/
function operacoes(num1, num2, operacao){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch(operacao){
        case '1':
            return num1 + num2;
        case '2':
            return num1 - num2;
        case '3':
            return num1 * num2;
        case '4':
            if(num2 == 0){
                return 0;
            }
            return num1 / num2;
        default:
            return 0;
    }
}

/*4 -  Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice*/
function tabuada(num){
    let resTabuada = [];

    for(let i = 1; i <= 10; i++){
        resTabuada[i] = num * i;
    }
    return resTabuada;
}

/*5 - Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro.*/
function inverteNum(num){
    num = num.toString();
    num = num.split('').reverse().join('');
    return parseInt(num);
}

/*6 - Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra).*/
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

/*7 - Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso.*/
function validaTexto(texto){
    let pilha = [];
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == '(' || texto[i] == '['){
            pilha.push(texto[i]);
        }else if(texto[i] == ')' || texto[i] == ']'){
            if(pilha.length == 0){
                return false;
            }
            let topo = pilha.pop();
            if(topo == '(' && texto[i] != ')'){
                return false;
            }else if(topo == '[' && texto[i] != ']'){
                return false;
            }
        }
    }
    if(pilha.length > 0) return false;
    else return true;
}

/*8 - Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos.*/
function geradorObjetos(num){
    let nomes = ["Gabriella", "Ana", "Cristina", "João", "Marcos", "Carlos", "Agatha", "Julio", "Luiza", "Antônio", "Julia", "Ronaldo", "Natalia", "Pedro"];
    let listaObj = [];

    for(let i = 0; i < num; i++){
        let id = i + 1;
        let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
        let idade = Math.floor(Math.random() * 72 + 1) + 18;

        const objetoAleatorio = {
            id : id,
            nome : nomeAleatorio,
            idade : idade
        };

        listaObj.push(objetoAleatorio);
    }

    return listaObj;
}

/*9 - Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista*/
function mediaIdades(listaObj){
    let somaIdades = 0;
    let media = 0;

    listaObj.forEach(objeto => {
        somaIdades += objeto.idade;
    });

    media = somaIdades / listaObj.length;

    return media;
}

/*10 - Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros*/
