//Условия
//1.1  Напиши программу, которая проверяет число и выводит сообщение, является ли оно положительным, отрицательным или нулем;
const a = 8;
if( a > 0 ) {
    console.log('число положительнoe')
} else if ( a < 0 ) {
    console.log('число отрицательнoe')
} else {
    console.log('число равно нулю')
}
//1.2 Напиши программу, которая запрашивает у пользователя его рост и вес, на основании этих данных вычисляет ИМТ, и выводит сообщение о том, в каком диапазоне находится его ИМТ;
const height = 2.6;
const weight = 20;
const s = height * height;
const imt = weight / s;

if(imt < 18.5) {
    console.log('недостаточная масса тела')
} else if(imt >= 18.5 && imt < 25) {
    console.log('нормальная масса тела')
} else if(imt >= 25 && imt < 30) {
    console.log('избыточная масса тела')
} else if(imt >= 30 && imt < 35) {
    console.log('ожирение 1 степени')
} else if(imt >= 35 && imt < 40) {
    console.log('ожирение 2 степени')
} else {
    console.log('ожирение 3 степени')
}
//1.3Используй оператор switch, чтобы вывести название месяца на основе введенного пользователем числа (1-12);
const month = 8;
let monthName
switch(month) {
    case 1:
        monthName = 'январь';
        break;
    case 2:
        monthName = 'февраль';
        break;
    case 3:
        monthName = 'март';
        break;
    case 4:
        monthName = 'апрель';
        break;
    case 5:
        monthName = 'май';
        break;
    case 6:
        monthName = 'июнь';
        break;
    case 7:
        monthName = 'июль';
        break;
    case 8:
        monthName = 'август';
        break;
    case 9:
        monthName = 'сентябрь';
        break;
    case 10:
        monthName = 'октябрь';
        break;
    case 11:
        monthName = 'ноябрь';
        break;
    case 12:
        monthName = 'декабрь';
        break;
    default:
        monthName = 'Неверный месяц'
}
console.log(monthName)
//1.4 Придумай свое условие и опиши его в помощью оператора switch/case.
const st = '';
let discount

switch(st) {
    case 'gold':
        discount = 0.25;
        break;
    case 'silver':
        discount = 0.15;
        break;
    default:
        discount = 0;
}
console.log(discount)
