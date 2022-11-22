let string1 = 'hello world'
let string2 = 'lorem ipsum'
let string3 = 'javascript is cool'

console.log(string1.length);
console.log(string2.length);
console.log(string3.length);

console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

console.log(string1.toLowerCase());
console.log(string2.toLowerCase());
console.log(string3.toLowerCase());

let str = ' dirty string   '
console.log(str.trim());

let voly = 'Ревуть воли як ясла повні';

function stringToArray(str) {
    return str.slice(' ');
}

let arr = stringToArray(voly);
console.log(arr);

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newNumbers = numbers.map(value => numberToString(value))
console.log(newNumbers)
function numberToString(value) {
    return value.toString();
}


let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))
function sortNums(nums, direction) {
    if (direction === 'ascending'){
        return nums.sort((a, b) => a - b);
    }else if (direction === 'descending'){
        return nums.sort((a, b) => b - a);
    }}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let durationSort = coursesAndDurationArray.sort((comp1, comp2) => {
    return comp2.monthDuration - comp1.monthDuration;
});
console.log(durationSort);
let durationFilter = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
})
console.log(durationFilter);

let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'},
    {value: 'Joker', color: 'Black'},
    {value: 'Joker', color: 'Red'}
];

console.log(deck.filter(function (value) {
    return value.cardSuit === 'Spade' && value.value === 'Ace'
}));
console.log(deck.filter(value => value.value === 6));
console.log(deck.filter(value => value.color === 'Red'));
console.log(deck.filter(value => value.cardSuit === 'Diamonds'));
console.log(deck.filter(function (value) {
    return value.cardSuit === 'Clubs' && (value.value > 9 || typeof value.value === 'string');
}));

console.log(deck.reduce((accumulator, currentValue) => {
    if (currentValue.cardSuit === 'Spade') {
        accumulator.Spades.push(currentValue);
    } else if (currentValue.cardSuit === 'Diamonds') {
        accumulator.Diamonds.push(currentValue);
    } else if (currentValue.cardSuit === 'Hearts') {
        accumulator.Hearts.push(currentValue);
    } else if (currentValue.cardSuit === 'Clubs') {
        accumulator.Clubs.push(currentValue);
    }
    return accumulator;
}, {Spades: [], Diamonds: [], Hearts: [], Clubs: []}));