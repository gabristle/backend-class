const engMonkey1 = document.getElementById('engMonkey1');
const engMonkey2 = document.getElementById('engMonkey2');
const artMonkey1 = document.getElementById('artMonkey1');
const artMonkey2 = document.getElementById('artMonkey2');

engMonkey1.addEventListener('click', function() {
    engMonkey1.classList.add('hide');
    artMonkey1.classList.remove('hide');
    artMonkey2.classList.add('hide');
    engMonkey2.classList.remove('hide');
});

artMonkey1.addEventListener('click', function(){
    engMonkey1.classList.remove('hide');
    artMonkey1.classList.add('hide');
    artMonkey2.classList.remove('hide');
    engMonkey2.classList.add('hide');
});

engMonkey2.addEventListener('click', function (){
    engMonkey2.classList.add('hide');
    artMonkey2.classList.remove('hide');
    artMonkey1.classList.add('hide');
    engMonkey1.classList.remove('hide');
});

artMonkey2.addEventListener('click', function(){
    engMonkey2.classList.remove('hide');
    artMonkey2.classList.add('hide');
    artMonkey1.classList.remove('hide');
    engMonkey1.classList.add('hide');
});