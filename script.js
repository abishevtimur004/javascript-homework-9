

// 1-ое задание
let timeOfDay = prompt("Введите время суток: утро, день или вечер").trim().toLowerCase();

if (typeof timeOfDay !== "string" || timeOfDay === "") {
    alert("Ошибка: введите корректное время суток (утро, день, вечер).");
} else {
    switch (timeOfDay) {
        case "утро":
            alert("Доброе утро! Рекомендуем выпить кофе ☕.");
            break;
        case "день":
            alert("Добрый день! Как насчет чашки чая? 🍵");
            break;
        case "вечер":
            alert("Добрый вечер! Время для горячего шоколада. 🍫");
            break;
        default:
            alert("Ошибка: введите одно из значений — утро, день или вечер.");
    }
}

let student = {};

// 2-ое задание
student.name = prompt("Тимур:"); // Имя
student.age = parseInt(prompt("20:"), 10); // Возраст (число)
student.subject = prompt("Книга:"); // Предмет
student.grade = prompt("5:"); // Оценка
console.log("Объект студента после ввода данных:", student);
student.age += 5;

// 3-и задание
console.log("Объект студента после увеличения возраста:", student);


const movies = [
    { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
    { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
    { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
    { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
    { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
];

console.log("Режиссёр второго фильма:", movies[1].director);
console.log("Жанр четвёртого фильма:", movies[3].genre);



// 4-ое задание
let shoppingList = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];

shoppingList.unshift("сок");
console.log("После добавления товара в начало:", shoppingList);

shoppingList.pop();
console.log("После удаления последнего товара:", shoppingList);

shoppingList.splice(2, 1, "чай", "кофе");
console.log("После замены третьего элемента на два новых:", shoppingList);
