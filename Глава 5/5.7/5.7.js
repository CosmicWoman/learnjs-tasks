// Задание 'Фильтрация уникальных элементов массива'
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );

// Задание 'Отфильтруйте анаграммы'
function aclean(arr) {
    let map = new Map();
     for(let word of arr){
         let sortWord = word.toLowerCase().split('').sort().join();
         map.set(sortWord,word)
     }
     return Array.from(map.values())
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );
