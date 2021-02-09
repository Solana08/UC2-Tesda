//Object
const person = {
    firstName: 'Aby',
    lastName: 'Cruz',
    age: 29,
    email: 'aby86996@gmail.com',
    hobbies : ['Swimming, hiking, coding'],
    address: {
        city: 'San Miguel',
        street: 'Willow',
    },
    getBirthYear: function () {
        return 2021 - this.age;      
    }

};

let value;

value = person;
console.log(value)

value = person.firstName;
console.log(value)

value = person.lastName;
console.log(value)

value = person.age;
console.log(value)

value = person.hobbies[0];
console.log(value)

value = person.address.city;
console.log(value)

value = person.getBirthYear(); //property method when calling needs ()
console.log(value)


const people = [{name: 'Ying', age: 12}, {name: 'Dayday', age: 21}, 
    {name: 'Aya', age: 13}];

//for loop
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
} 