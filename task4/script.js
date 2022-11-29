let linkText = document.querySelector(".linkText");
let firstText = "Измените текст ссылки";

linkText.addEventListener('click', event => {
let newLinkText = prompt("Приветствуем Вас! Введите любой текст и он отобразится на экране.");
linkText.textContent = newLinkText;
if (newLinkText === ""){
    linkText.textContent = firstText;
}
event.preventDefault();
});



