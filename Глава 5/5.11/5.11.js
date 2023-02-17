// Задание 'Создайте дату'
let date = new Date('2012-02-20T03:12:00');
alert( date );

// Задание 'Покажите день недели'
function getWeekDay(date){
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    return days[date.getDay()-1]
}

let date = new Date(2012, 0, 3);
alert( getWeekDay(date) );

// Задание 'День недели в европейской нумерации'
function getLocalDay(date){
    let day = date.getDay();

    if (day == 0){
        day = 7;
    }
    return day;
}

let date = new Date(2012, 0, 3);
alert( getLocalDay(date) );

// Задание 'Какой день месяца был много дней назад?'
function getDateAgo(date, days){
    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() - days);
    return newDate.getDate();

}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) );
alert( getDateAgo(date, 2) );
alert( getDateAgo(date, 365) );
// Задание 'Последнее число месяца?'
function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

// Задание 'Сколько сегодня прошло секунд?'
function getSecondsToday(){
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    let sec = Math.round((date - today)/1000);
    return sec;
}

alert( getSecondsToday() );

// Задание 'Сколько секунд осталось до завтра?'
function getSecondsToTomorrow(){
    let date = new Date();
    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    let sec = Math.round((tomorrow - date)/1000);
    return sec;
}

alert( getSecondsToTomorrow() );

// Задание 'Форматирование относительной даты'
function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );