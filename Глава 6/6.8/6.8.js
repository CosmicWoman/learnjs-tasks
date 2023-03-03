// Задача 'Вывод каждую секунду'
function printNumbers(from, to){
    let num = from;
    let time = setInterval(function (){
        alert(num);
        if (num == to){
            clearInterval(time);
        }
        num++;
    }, 1000)
}

function printNumbers(from, to){
    let num = from;
    setTimeout(function next(){
        alert(num);
        if (num < to){
            setTimeout(next, 1000)
        }
        num++;
    },1000)
}