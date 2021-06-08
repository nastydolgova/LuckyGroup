let options = document.querySelector('.right__form-options');
let selectField = document.querySelector('.right__form-select');
let option = document.querySelectorAll('.option');
let result = document.querySelector('.right__form-select-field');

selectField.addEventListener('click', toggleSelect);

option.forEach( item => item.addEventListener('click', function (){
    result.innerHTML = item.innerHTML;
}))

function toggleSelect(){
    options.classList.toggle('hidden');
}

