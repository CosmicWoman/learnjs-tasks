// Задание 1
let officialName = prompt('Какое «официальное» название JavaScript?');
let message = (officialName == 'ECMAScript')?
    alert('Верно!') : alert('Не знаете? ECMAScript!');

// Задание 2
let num = +prompt('Введите число');
let result = (num == 0)? '0':
    (num > 0) ? '1': '-1';
alert (result);