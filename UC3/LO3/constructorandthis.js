//Object literal
// const person = {
//     name: 'Aby'
// };

// console.log(person);


//Person constructor
// function Person(){
//     this.name = 'Aya'
// };

// const Aya = new Person();

// console.log(Aya);

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// };

// const Ani = new Person('Ani', 29);
// const Batungbakal = new Person('Batungbakal', 24);

// console.log(Ani);
// console.log(Batungbakal);


//Constructor and This Keyword
//Person constructor
function Person(name, dob){
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
};

const nicko = new Person('Nicko', '03/20/90');
const kicks = new Person('Kicks', '01/20/92');

console.log(nicko);
console.log(kicks);
console.log(nicko.calculateAge());
console.log(kicks.calculateAge());