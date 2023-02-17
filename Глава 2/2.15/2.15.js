// // Задание "Функция min(a, b)"
function min(a,b) {
    if (a < b){
        return a;
    } else {
        return b;
    }
}
console.log (min(2,5));
console.log (min(3,-1));
console.log (min(1,1));

// Задание "Функция pow(x,n)"
let x = prompt('Введите x:');
let n = prompt('Введите n:');

if (n < 1) {
    alert('Введено некорректное число. Введите число больше 0')
} else {
    alert(pow(x,n))
};

function pow(x,n) {
    return Math.pow(x,n);
};