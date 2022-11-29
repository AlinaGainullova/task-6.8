const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Метод для выводов сообщений в веб консоль');
})

const aler = document.querySelector('#alert');

aler.addEventListener('click', () => {
    alert('Метод отображения информации пользователям');
})

const promp = document.querySelector('#prompt');

promp.addEventListener('click', () => {
    alert('Метод prompt предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «Ок» и «Отмена».');
})