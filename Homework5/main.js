function area(a, b) {
    return (a * b);
}

function circleArea(r) {
    return (3.14 * r ** 2);
}

function cylinderArea(h, r) {
    return (2 * 3.14 * r ** 2 + 2 * 3.14 * r * h);
}

function arrElements(anyArray) {
    for (const anyArrayElement of anyArray) {
        console.log(anyArrayElement);
    }
}

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}

paragraph('Some Text');

function list1() {
    {
        document.write(`<ul><li>${arguments[0]}</li> <li>${arguments[1]}</li> <li>${arguments[2]}</li></ul>`);
    }
}

list1('List 1', 'List 1', 'List 1');

function list2(text, num) {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list2('List 2', 3);

function primitives(...elements) {
    document.write(`<ul>`);
    for (let i = 0; i < elements.length; i++) {
        document.write(`<li>${elements[i]}</li>`);
    }
    document.write(`</ul>`);
}

primitives(`text`, 5, true);

function objects(arr) {
    for (const items of arr) {
        document.write(`<div>${items.id} ${items.name} ${items.age}</div>`);
    }
}

let users = [
    {id: 1, name: 'anya', age: 31,},
    {id: 2, name: 'petya', age: 30,},
    {id: 3, name: 'kolya', age: 29,},
    {id: 4, name: 'olya', age: 28,},
    {id: 5, name: 'max', age: 30,},
    {id: 6, name: 'anya', age: 31,},
    {id: 7, name: 'oleg', age: 28,},
    {id: 8, name: 'andrey', age: 29,},
    {id: 9, name: 'masha', age: 30,},
    {id: 10, name: 'olya', age: 31,},
    {id: 11, name: 'maxim', age: 31,}
];

objects(users);

function lowestNumber1(numbers) {
    const number = Math.min(...numbers);
    console.log(number);
}

lowestNumber1([2, -5, 4, 10, 8]);

function summary(...numbers) {
    let numberSum = 0
    for (let i = 0; i < numbers.length; i++) {
       numberSum += numbers[i];
    }
    return (numberSum);
}

let x = summary( 10, 15, -5);
console.log(x)