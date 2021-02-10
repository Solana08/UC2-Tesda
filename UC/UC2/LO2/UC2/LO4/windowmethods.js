//Window Methods / Objects / Properties

//Alert

// alert('Sikat na Hello World');

//Prompt

// const input = prompt();
// alert(`Password ${input}`);

//Confirm

// if(confirm('Sigurado ka na ba?')){
//     console.log('Oo');
// } else {
//     console.log('Hindi?');
// };


//Object property
let value;

//Outer height and width
value = window.outerHeight
console.log(value);

value = window.outerWidth
console.log(value);

//Inner heightr and width
value = window.innerHeight
console.log(value);

value = window.innerWidth
console.log(value);

//Scroll points
value = window.scrollY;
console.log(value);

value = window.scrollX;
console.log(value);

//Location Object
value = window.location;
console.log(value);

value = window.location.hostname;
console.log(value);

value = window.location.port;
console.log(value);

//href
value = window.location.href;
console.log(value);

value = window.location.search;
console.log(value);

//Redirect
//window.location.href = 'https://www.facebook.com/'

//Reload
//window.location.reload();

//Navigation Object
value = window.navigator;
console.log(value);

value = window.navigator.appName;
console.log(value);

value = window.navigator.appVersion;
console.log(value);

value = window.navigator.userAgent;
console.log(value);

value = window.navigator.platform;
console.log(value);

value = window.navigator.vendor;
console.log(value);

value = window.navigator.language;
console.log(value);