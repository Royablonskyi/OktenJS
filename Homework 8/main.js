function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'oleg', 'tkach', 'example1@email.com', 380993801011),
    new User(2, 'anya', 'paranchyk', 'example2@email.com', 380993801012),
    new User(3, 'andrii', 'chorni', 'example3@email.com', 380993801013),
    new User(4, 'roman', 'konoplyanka', 'example4@email.com', 380993801014),
    new User(5, 'denis', 'bily', 'example5@email.com', 380993801015),
    new User(6, 'dmytro', 'taras', 'example6@email.com', 380993801016),
    new User(7, 'serhii', 'dyh', 'example7@email.com', 380993801017),
    new User(8, 'alex', 'radetskyi', 'example8@email.com', 380993801018),
    new User(9, 'oleksii', 'tkach', 'example9@email.com', 380993801019),
    new User(10, 'oleg', 'tkachyk', 'example10@email.com', 380993801010)
];
console.log(users)

console.log(users.filter(value => value.id % 2 === 0));
console.log(users.sort((num1, num2) => {
    return num1.id - num2.id
}));

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'oleg', 'tkachyk', 'example10@email.com', 380993801010, 15),
    new Client(2, 'oleksii', 'tkach', 'example9@email.com', 380993801019, 4),
    new Client(3, 'alex', 'radetskyi', 'example8@email.com', 380993801018, 1),
    new Client(4, 'serhii', 'dyh', 'example7@email.com', 380993801017, 0),
    new Client(5, 'dmytro', 'taras', 'example6@email.com', 380993801016, 2),
    new Client(6, 'denis', 'bily', 'example5@email.com', 380993801015, 5),
    new Client(7, 'roman', 'konoplyanka', 'example4@email.com', 380993801014, 7),
    new Client(8, 'andrii', 'chorni', 'example3@email.com', 380993801013, 4),
    new Client(9, 'anya', 'paranchyk', 'example2@email.com', 380993801012, 3),
    new Client(10, 'oleg', 'tkach', 'example1@email.com', 380993801011, 1)
];
console.log(clients);

console.log(clients.sort((num1, num2) => {
    return num1.order - num2.order
}));


function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
}

Car.prototype.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
Car.prototype.info = function () {
    console.log(`model - ${this.model}`, `manufacturer - ${this.manufacturer}`, `year - ${this.year}`, `max speed - ${this.maxSpeed}`, `engine - ${this.engine}`);
}
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    return this.maxSpeed = this.maxSpeed + newSpeed;
}
Car.prototype.changeYear = function (newValue) {
    return this.year = newValue
}

// Car.prototype.addDriver = function (driver){
//     return this.driver = driver
// }
let car1 = new Car(`Passat`, `VW`, 2018, 220, `2.0`)
console.log(car1);

car1.drive();
car1.info();
console.log(car1.increaseMaxSpeed(30));
console.log(car1.changeYear(2016));
// console.log(car1.addDriver(`Driver 1`));

console.log(car1);


class CarClass{
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`model - ${this.model}`, `manufacturer - ${this.manufacturer}`, `year - ${this.year}`, `max speed - ${this.maxSpeed}`, `engine - ${this.engine}`);
    }
    increaseMaxSpeed (newSpeed) {
        return this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue) {
        return this.year = newValue
    }
    // addDriver (driver){
    //     return this.driver = {driver}
    // }
}
let car2 = new CarClass(`Fabia`, `Skoda`, 2015, 200, `1.8`)
console.log(car2);

car2.drive();
car2.info();
console.log(car2.increaseMaxSpeed(20));
console.log(car2.changeYear(2017));
// console.log(car2.addDriver(`NewDriver`));

console.log(car2);

// class Cinderella{
//     constructor(name,age,shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let cinderellas = [
//     new Cinderella(`Cinderella1`, 22, 39),
//     new Cinderella(`Cinderella2`, 26, 40),
//     new Cinderella(`Cinderella3`, 25, 37),
//     new Cinderella(`Cinderella4`, 28, 36),
//     new Cinderella(`Cinderella5`, 30, 37),
//     new Cinderella(`Cinderella6`, 32, 38),
//     new Cinderella(`Cinderella7`, 23, 39),
//     new Cinderella(`Cinderella8`, 22, 41),
//     new Cinderella(`Cinderella9`, 20, 39),
//     new Cinderella(`Cinderella10`, 24, 36)
// ];
// console.log(cinderellas);
//
// class Prince{
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince(`Charles`, 30, 38);
//
// let correctCinderella
// for (let i = 0; i < cinderellas.length; i++) {
//     if(cinderellas.filter(value => value.shoeSize === 38){
//     }
//     return correctCinderella
// }
//
// console.log(correctCinderella)