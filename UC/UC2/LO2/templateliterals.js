const firstName = 'Aby';
const lastName = 'Cruz';
const age = 29;
const city = 'san Miguel';
let html;

//without tempplate string (es5)
html = '<ul><li>Name: ' +
        firstName +
        '</li><li>Age: ' +
        age +
        '</li><li>lastName: ' +
        lastName +
        '</li><li>city: ' +
        city +

        '</li><ul/>';

        document.body.innerHTML = html;

//with template string (es6)
//with function
//ternary operation * age part

function hello() {
    return 'Good day!';
}

html = `
        <ul>
            <li>First Name: ${firstName}</li>
            <li>Lastname: ${lastName}</li>
            <li>City: ${city}</li>
            <li>Age: ${age}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'Over 30' : 'Under 30'}</li> 
        <ul/>
        `;

        document.body.innerHTML = html;