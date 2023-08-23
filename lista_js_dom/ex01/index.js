const textInput = document.getElementById('textInput');
const paragraph = document.getElementById('paragraph');

textInput.addEventListener('input', () => {
    let inputValue = textInput.value.toUpperCase();
    paragraph.textContent = inputValue.replace(/\d/g, ''); //expressão regular ('\d' - Dígitos numéricos / 'g' - Global, garante que todo o input se aplica à regra)
});