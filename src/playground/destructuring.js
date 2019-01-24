// Object Destructuring

// const person = {
//    name: 'Shane',
//    age: 22,
//    location: {
//       city: 'Cebu',
//       temp: '30'
//    }
// }

// const { name: firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}`);


// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//    console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//       name: 'Penguin'
//    }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName)

// Array Destructuring

const address = ['4059 Sandayong', 'Guadalupe', 'Cebu City', '6000'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);