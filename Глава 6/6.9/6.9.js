// Задача 'Декоратор-шпион'
function  spy(func){
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}

function work(a, b) {
    alert( a + b );
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    alert( 'call:' + args.join() );
}

// Задача 'Задерживающий декоратор'
function delay(f, ms){
    return function () {
        setTimeout(function (){
            f.apply(this, arguments)
        },ms)
    }
}

function f(x) {
    alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

// Задача 'Декоратор debounce'
function debounce(f, ms){

}

// Задача 'Тормозящий (throttling) декоратор'
function throttle(f, ms){

}

function f(a) {
    console.log(a)
}

let f1000 = throttle(f, 1000);

f1000(1);
f1000(2);
f1000(3);