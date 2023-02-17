// Задание 'Привет, object'

let user = {};
user.name = 'John';
user.surename = 'Smith';
user.name = 'Pete';
delete user,name;

// Задание 'Проверка на пустоту'

function isEmpty(obj) {
    for(let key in obj){
        return false;
    }
    return true;
}
let schedule = {};

console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) );

// Задание 'Сумма свойств объекта'
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);

// Задание 'Умножаем все числовые свойства на 2'
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);