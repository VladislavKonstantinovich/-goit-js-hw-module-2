let trueNumber = prompt('Введіть число від 1 до 7');
let number = Number(trueNumber); 
while (number < 1 || number > 7 || isNaN(number) || trueNumber === null) {
    if (trueNumber === null) {
        alert('Скасовано юзером');
        break;
    }
    alert('Помилка, спробуйте знова');
    trueNumber = prompt('Введіть число від 1 до 7');
    number = Number(trueNumber); 
}

let week = {
    1: 'Понеділок',
    2: 'Вівторок',
    3: 'Середа',
    4: 'Четвер',
    5: "П'ятниця",
    6: 'Субота',
    7: 'Неділя',
}

if (isNaN(number) || trueNumber === null) {
} else {
    alert(week[number]);
}