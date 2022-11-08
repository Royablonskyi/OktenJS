let x = +prompt('x = ?');
x = x !== 0;
console.log(x);

let time = +prompt('What is the time?');
if (time >= 0 && time <= 14) {
    time = 'part 1';
} else if (time >= 15 && time <= 29) {
    time = 'part 2';
} else if (time >= 30 && time <= 44) {
    time = 'part 3';
} else if (time >= 45 && time <= 59) {
    time = 'part 4';
} else {
    time = 'incorrect time';
}
console.log(time);

let day = +prompt('What day is it?');
if (day >= 1 && day <= 10) {
    day = 'decade 1';
} else if (day >= 11 && day <= 20) {
    day = 'decade 2';
} else if (day >= 21 && day <= 31) {
    day = 'decade 3';
} else {
    day = 'incorrect day';
}
console.log(day)

let weekDay = +prompt("What is the day of the week?")
switch (weekDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Wrong Weekday');
}

// let userNumber1 = +prompt('Enter first number');
// let userNumber2 = +prompt('Enter second number');
// if (userNumber1 > userNumber2) {
//     console.log(userNumber1);
// } else if (userNumber1 < userNumber2) {
//     console.log(userNumber2);
// } else if (userNumber1 === userNumber2) {
//     console.log('Equal');
// }

let userNumber1 = +prompt('Enter first number');
let userNumber2 = +prompt('Enter second number');
let highestNumber = (userNumber1 > userNumber2 ? userNumber1 : userNumber2) || (userNumber1 < userNumber2 ? userNumber1 : userNumber2);
if (userNumber1 === userNumber2) {
    console.log('Equal');
}else console.log(highestNumber);

let y = prompt() || 'default';
console.log(y);
