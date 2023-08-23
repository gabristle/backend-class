const colorPicked = document.getElementById('colorPicked');

colorPicked.addEventListener('input', function(){
    document.body.style.backgroundColor = colorPicked.value;
});