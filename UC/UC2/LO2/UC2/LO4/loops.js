//for loop
//i=0 *need to assign a variable cannot use const
//i<10 *as long as the 2nd statement is true i++ is trigger
//i++ increment

for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('5 is High Five.')
        continue;
    }
    if(i === 8){
        console.log('Opppsss');
        break;
    }
    console.log(`Numero ${i}`)
}

//While loop
//WARNING dont save check carefully

let i = 0;

while(i<10) {
    console.log(`Numero ${i}`)
    i++;
}

//Do while

do{
    console.log(`Numero ${i}`)
    i++;
}

while (i < 10);

//Loop through array

const food = ['Sinigang', 'Adobo', 'Nilaga', 'Pancit'];

for(let i=0; i < food.length; i++){
    console.log(food[i]);
}

//For each

food.forEach(function(food, index, array){
    console.log(`${index} : ${food}`);
    console.log(`${array}`);
});

//Map

const users = [{id: 1, name: 'Nicko'}, {id: 2, name: 'Kicks'}, {id: 3, name: 'Kiko'}, {id:
4, name: 'Anthony'}];

const ids = users.map(function(user){
    return user.name
});

console.log(ids);

//For in loop

const peeps = {
    firstName: 'Nicks',
    lastName: 'Ong',
    age: 30
};

for(let x in peeps){
    console.log(`${x}: ${peeps[x]}`);
};