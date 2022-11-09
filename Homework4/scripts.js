let a = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
for (let i = 0; i < a.length; i++) {
    document.write(`<div>Text A</div>`)
}

let b = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
for (let i = 0; i < b.length; i++) {
    document.write(`<div>Text B ${i}</div>`)
}

let c = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
let cIndex = 0;
while (cIndex < c.length) {
    document.write(`<h1>Text C</h1>`)
    cIndex++
}

let d = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]
let dIndex = 0;
while (dIndex < d.length) {
    document.write(`<h1>Text D ${dIndex}</h1>`)
    dIndex++
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<ul>
    <li>${listOfItems[i]}</li>
    </ul>`)
}

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`
<div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
</div>
    `)

}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users) {
    if (user.status){
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>
        `)
    }

}
for (let user of users) {
    if (!user.status){
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>
        `)
    }

}
for (let user of users) {
    if (user.age>30){
        document.write(`<div>${user.name} ${user.age} ${user.status}</div>
        `)
    }

}
