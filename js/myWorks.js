const gallery = [{
        link: "https://sofyapim.github.io/Loopstudios-landing-page/",
        photo: "images/Loopstudios.webp",
        alt: "Loopstudios"


    },
    {
        link: "https://sofyapim.github.io/frontend-mentor-easybank/",
        photo: "images/easybank.webp",
        alt: "easybank"


    },
    {
        link: "https://sofyapim.github.io/VolgaFood-webpack/dist/index.html",
        photo: "images/VolgaFood.webp",
        alt: "VolgaFood"


    },
    {
        link: " https://sofyapim.github.io/webpackCoach/dist/index.html",
        photo: "images/Coach.webp",
        alt: "coach"


    }

];

function cardWorks(card) {
    return `

<div class="card">

<a target="_blank" href="${card.link}"
    rel="nofollow">
    <img src="${card.photo}" alt="${card.alt}">
</a>
</div>
       
 `

};


document.querySelector(".myWorks__content__gallery").innerHTML = ` 
${gallery.map(cardWorks).join('')}`