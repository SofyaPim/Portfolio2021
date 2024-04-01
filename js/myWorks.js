const gallery = [
  {
    link: "https://sofyapim.github.io/Loopstudios-landing-page/",
    photo: "images/Loopstudios.webp",
    alt: "Loopstudios",
  },
  {
    link: "https://sofyapim.github.io/frontend-mentor-easybank/",
    photo: "images/easybank.webp",
    alt: "easybank",
    head: "FrontendMentor Challenge",
  },
  {
    link: "https://sofyapim.github.io/VolgaFood-webpack/dist/index.html",
    photo: "images/VolgaFood.webp",
    alt: "VolgaFood",
    head: "Готовая еда",
  },
  {
    link: "https://sofyapim.github.io/bootstrap_module/index.html",
    photo: "images/bootstrap_module.jpg",
    alt: "bootstrap_module",
    head: "Bootstrap модуль",
  },
];

function cardWorks(card) {
    return `

<div class="card">

    <h5>${card.head}</h5>
        <a target="_blank" href="${card.link}"
            rel="nofollow">
            <img src="${card.photo}" alt="${card.alt}">
        </a>


</div>
       
 `;

};


document.querySelector(".myWorks__content__gallery").innerHTML = ` 
${gallery.map(cardWorks).join('')}`