// Задание 'Ввод числового значения'
function readNumber(){
    let num;
    do{
        num = prompt('Введите число:');
    } while (!isFinite(num));
    if (num === null || num === ''){
        return null;
    }
    return +num
}

alert (readNumber());

// Задание 'Случайное число от min до max'
function random(min, max){
    let result = min + Math.random() * (max - min);
    return result;
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );

// Задание 'Случайное целое число от min до max'
function randomInteger(min, max){
    let result = min + Math.random() * (max - min + 1);
    return Math.floor(result);
}

console.log( random(1, 5) );
console.log( random(1, 5) );
console.log( random(1, 5) );