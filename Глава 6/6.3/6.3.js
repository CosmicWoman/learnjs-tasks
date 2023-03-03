// Задача 'Сумма с помощью замыканий'
function sum(a){
    return function (b){
        return a + b;
    }
}

// Задача 'Фильтрация с помощью функции'
function inBetween(a, b){
    return function (el){
        return el => a && el <= b;
    }
}

function inArray(arr){
    return function (el){
        return arr.includes(el);
    }
}

// Задача 'Сортировать по полю'
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(field){
    let result = (a,b) => a[field] > b[field] ? 1 : -1;
    return result;
}

// Задача 'Армия функций'
function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            alert( i );
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();