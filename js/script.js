'use strict';
document.addEventListener("DOMContentLoaded", () => {
    const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector("[type=checkbox]");

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


    const newFilm = document.querySelector(".adding__input");

    const confirmBtn = document.querySelector("button");

    updateFilmList();

    const likeFilm = document.querySelector("input[type='checkbox']");

    confirmBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (newFilm.value.length != 0 && newFilm.value.length < 21) {
        movieDB.movies.push(newFilm.value.toUpperCase());
        addToLikedFilm();
    } else if (newFilm.value.length > 21) {
        movieDB.movies.push(newFilm.value.slice(0, 21).toUpperCase()+"...");
        addToLikedFilm();
    }

    newFilm.value = "";
    updateFilmList();
    });

    function updateFilmList() {
    movieList.innerHTML = "";
    movieDB.movies.sort();
    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    }

    function addToLikedFilm() {
    if (likeFilm.checked) {
        console.log("Добавлено в любимые фильмы");
        likeFilm.checked = false;
    }
    }

    let delFilm = document.querySelectorAll(".delete");
    delFilm.forEach(element => {
    element.addEventListener("click", function(event) {
        console.log(element.previousSibling);
    });
    });
});


