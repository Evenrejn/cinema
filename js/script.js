/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Одержимость",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort((a, b) => a.localeCompare(b));

document.querySelector(".promo__adv").remove();
document.querySelector(".promo__genre").innerText = "Драма";
document.querySelector(".promo__bg").style.background = "url(img/bg.jpg) center center/cover no-repeat";

for (let i = 1; i <= movieDB.movies.length; i++) {
    document.querySelector(".promo__interactive-title").insertAdjacentHTML("beforeEnd", `<br><li class="promo__interactive-item">${i} ${movieDB.movies[i-1]}<div class="delete"></div></li>`);
}


