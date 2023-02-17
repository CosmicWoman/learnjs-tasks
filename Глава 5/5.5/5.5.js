// Задание 'Переведите текст вида border-left-width в borderLeftWidth'
function camelize(str){
    str.split('-');
    str.map(function(word,index){
        if(index == 0){
           word;
        } else {
            word[0].toUpperCase() + word.slice(1);
        }
    })
    str.join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Задание 'Фильтрация по диапазону'
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && b => item))
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered );
alert( arr );

// Задание 'Фильтрация по диапазону "на месте"'
function filterRangeInPlace(arr, a, b) {
    for(i = 0; i < arr.length; i++){
        let value = arr[i];
        if (a > value || value > b){
            arr.splice(i,1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert( arr );

// Задание 'Сортировать в порядке по убыванию'
let arr = [5, 2, 1, -10, 8];

arr.sort().reverse();

console.log( arr );

// Задание 'Скопировать и отсортировать массив'
function copySorted(arr){
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

// Задание 'Создать расширяемый калькулятор'
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result );

// Задание 'Трансформировать в массив имён'

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names );

// Задание 'Трансформировать в объекты'
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));

alert( usersMapped[0].id )
alert( usersMapped[0].fullName)

// Задание 'Отсортировать пользователей по возрасту'
function sortByAge(users){
    arr.sort((a,b)=> a.age > b.age) ? 1 : -1)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);

// Задание 'Перемешайте массив'
function shuffle(array){
    array.sort(() => Math.random() - 0.5)
}

let arr = [1, 2, 3];

shuffle(arr);
shuffle(arr);
shuffle(arr);

// Задание 'Получить средний возраст'
function getAverageAge(users){
    return users.reduce((arg,user) => arg + user.age, 0) / users.length)
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );

// Задание 'Оставить уникальные элементы массива'
function unique(arr) {
   let uniqueVal = new Set(arr);
   return Array.from(uniqueVal);
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );

// Задание 'Создайте объект с ключами из массива'
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);