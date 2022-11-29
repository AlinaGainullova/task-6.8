let textInput = document.querySelector('input') // поле ввода текста
let btn = document.querySelector('button') // кнопка
let duplicateField = document.querySelector('#duplicateField') // текстовый блок duplicateField

textInput.addEventListener('input', function (event) {
    event.preventDefault();
    duplicateField.textContent = textInput.value;
})

btn.addEventListener('click', function  (event) {
    console.log(textInput.value)
    textInput.value = "";
    duplicateField.textContent = "";
})