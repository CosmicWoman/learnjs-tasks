//Задание 'Проверка значения из диапазона'
// let age = prompt ('Сколько Вам полных лет?');
// if (age >= 14 && age <= 90) {
//     alert ("Добро пожаловать!")
// } else {
//     alert ('Подозрительно...')
// };

//Задание 'Проверка значения вне диапазона'
// 1. if (!(age >= 14 && age <= 90))
// 2. if (age < 14 || age > 90)

// Задание 'Проверка логина'
let userName = prompt ('Введите Ваш логин:');

if (userName === 'Админ'){
    let password = prompt ('Введите пароль:');

    if (password === 'Я главный'){
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }

} else if (userName === '' || userName === null){
    alert('Отменено')
} else {
    alert('Я Вас не знаю')
};


