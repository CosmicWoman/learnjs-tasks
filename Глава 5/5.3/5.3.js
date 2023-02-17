// Задание 'Сделать первый символ заглавным'
function ucFirst(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr
}
console.log(ucFirst("вася"))

// Задание 'Проверка на спам'
function checkSpam(str){
    let newStr = str.toLowerCase();
    return newStr.includes('viagra') || newStr.includes('xxx');
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// Задание 'Усечение строки'
function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0,maxlength-1) + '…'
    } else {
        return str
    }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// Задание 'Выделить число'
function extractCurrencyValue(str){
    return Number(str.slice(1))
}
console.log(extractCurrencyValue('$120'))