const galleryCard = [{
    title: "HTML5",
    text: "Семантическая верстка. Использование аудио- и видеотегов, svg-файлов ",
    photo: "images/html5.svg",
    alt: "html5"


},
{
    title: "CSS3",
    text: "Анимация. Градиенты. Препроцессоры LESS, SASS, переменные и миксины. Flex и Grid для выравнивания элементов.",
    photo: "images/css.svg",
    alt: "css3"

},
{
    title: "Javascript",
    text: "Стрелочные функции, let и const, импорт и экспорт модулей, шаблонные литералы и прочее. ",
    photo: "images/js.svg",
    alt: "js"

},
{
    title: "PHP",
    text: "Взаимодействие с базами данных, SQL-запросы. Вывод и внесение данных в базу.",
    photo: "images/php.svg",
    alt: "PHP"


}

];

function cardTemplate(card) {
return `

<div class="card">

<h2>${card.title}</h2>
<p>${card.text}</p>
<img src="${card.photo}" alt="${card.alt}">

</div>
   
`

};


document.querySelector(".features__content__wrap").innerHTML = ` 
${galleryCard.map(cardTemplate).join('')}`