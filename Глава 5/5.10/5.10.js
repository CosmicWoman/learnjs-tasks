// Задание 'Деструктурирующее присваивание'
let user = {
    name: "John",
    years: 30
};

let {name, years: age,isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin );

// Задание 'Максимальная зарплата'
function topSalary(salaries){
    let maxSalary = 0;
    let nameMax = null;
    for(let [name, salary] of Object.entries(salaries)){
        if(maxSalary < salary){
            maxSalary = salary;
            nameMax = name;
        }
    }
    return nameMax;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};