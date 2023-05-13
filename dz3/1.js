// 1. Необходимо создать html-страницу с названием 1.html, в которой подключить файл 1.js (его тоже необходимо создать рядом с html-файлом). 
// В js-файле необходимо создать следующий скрипт:
// Необходимо пользователя попросить ввести температуру в градусах Цельсия, преобразовать введенное пользователем значение 
// в соответствующую температуру в градусах по Фаренгейту и вывести в alert сообщение с текстом (пример): Цельсий: 21, Фаренгейт: 69.8
// Где вместо 21 и 69.8 должны быть подставлены соответствующие значения, которые
// были получены ранее.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Примечания: Пользователь всегда вводит корректное число.
// Советую округлить значение после расчетов, так как в некоторых случаях может получиться "длинная дробь".



const c = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));

alert(`Цельсий: ${c}, Фаренгейт: ${toFar(c)}`);

function toFar(x) {
    return Math.round(((9 / 5) * x + 32) * 100) / 100
}


// еще варианты округления через строку(работает дольше)

// function toFar(x) {
//     return +((9/5)*x + 32).toFixed(1)
// }