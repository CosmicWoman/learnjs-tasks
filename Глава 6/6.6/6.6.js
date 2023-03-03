// Задача 'Установка и уменьшение значения счётчика'
function makeCounter(){
    let count = 0;
    function counter(){
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}

// Задача 'Сумма с произвольным количеством скобок'
function sum(){
    let currentSum = a;
    function varB(b){
        currentSum += b;
        return varB;
    }
    varB.toString = function (){
        return currentSum;
    }
    return varB;
}