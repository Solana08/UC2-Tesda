const numbers = [34, 44, 15, 76, 11, 69 , 21]; //literal method
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7); //instanciate 
const fruits = ['Suha, mansanas, langka'] //string array
const mixed = ['suha', 20, 'Pesos', 'Discount', 5, true, undefined, null, {a: 1, b: 2}]; //mixed of all types

let value;

value = mixed.length // length of the array *method blue
console.log(value);

value = Array.isArray(fruits) //check if array *constructor object green
console.log(value);

value = numbers2[0]; //single value
console.log(value);

numbers2[7] = 7.5; //insert 
console.log(numbers2);

value = numbers.indexOf(15); //indexOf finding index value
console.log(value);

//Mutating Arrays

numbers.push(99999); //add to end .push
console.log(numbers);

numbers.unshift(0); //add to start .unshift
console.log(numbers);

numbers.pop(); //remove last element from an array *bye 99999
console.log(numbers);

numbers.shift(); //remove from start *bye 0
console.log(numbers);

numbers.splice(0, 4); //splice 
console.log(numbers);

numbers.reverse(); //reverse the order
console.log(numbers);


value = numbers.concat(numbers2); //concat to two arrays
console.log(value);

value = fruits.concat(mixed);
console.log(value);

value = fruits.sort(); //sort
console.log(value);

value = numbers.sort()
console.log(value);

value = numbers2.sort(function(x, y) {
    return x + y;
})
console.log(value);  // sort using compare function

function under50(num) {
    return num < 50;
}
value = numbers.find(under50);
console.log(value);  //find