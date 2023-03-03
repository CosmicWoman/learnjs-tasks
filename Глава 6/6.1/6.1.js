// Задача 'Вычислить сумму чисел до данного'
function sumTo(n){
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

function sumTo(n) {
    let result = n * (n + 1) / 2;
    return result;
}

    // Задача 'Вычислить факториал'
function factorial(n){
    let result = (n != 1) ? n * factorial(n-1) : 1;
    return result;
}

// Задача 'Числа Фибоначчи'
function fib(n){
    let num1 = 1;
    let num2 = 1;
    for (let i = 3; i <= n; i++){
        let num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num2;
}

// Задача 'Вывод односвязного списка'
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// цикл
function printList(list){
    let newList = list;
    while (newList){
        alert(newList.value);
        newList = newList.next;
    }
}

// рекурсия
function printList(list){
    alert(list.value);
    if (list.next){
        printList(list.next);
    }
}

// Задача 'Вывод односвязного списка в обратном порядке'
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// цикл
function printList(list){
    let arr = [];
    let newList = list;
    while (newList){
        arr.push(newList.value);
        newList = newList.next;
    }
    for (let i = arr.length - 1; i >= 0; i--){
        alert(arr[i])
    }
}

// рекурсия
function printList(list){
    if (list.next){
        printList(list.next);
    }
    alert(list.value);
}