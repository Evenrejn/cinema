'use strict';

const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector(".promo__interactive-list");

const movieDB = {
    movies: [
        "Одержимость",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Скотт Пилигрим против..."
    ]
};

adv.forEach(item => {
    item.remove();
});

genre.textContent = "Драма";

poster.style.background = "url('img/bg.jpg') center center/cover no-repeat";

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});



