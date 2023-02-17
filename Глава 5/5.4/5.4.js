// Задание 'Операции с массивами'
let styles = ['Джаз','Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor((str.length-1)/2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп ', 'Регги ');
console.log(styles);

// Задание 'Сумма введённых чисел'
function sumInput(){
    let mass = [];
    while(true){
        let nums = prompt('Введите число:');
        if(nums === '' || nums === null || !isFinite(nums)) break;
        mass.push(+nums);
    }
    let sum = 0;
    for(let number of mass){
        sum += number;
    }
    return sum;
}
alert(sumInput());

// Задание 'Подмассив наибольшей суммы'
function getMaxSubSum(arr){

}