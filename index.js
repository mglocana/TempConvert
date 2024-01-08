function convertToCelsius(fahren) {
    return (5/9) * (fahren - 32);
}

function createMessage(fahren, celc) {
    let message = '';
    if(fahren === 32) {
        message = 'very cold'
    } else if(fahren === 64) {
        message = 'cold'
    } else if(fahren === 86) {
        message = 'warm'
    } else if(fahren === 100) {
        message = 'hot'
    }
    return `${fahren} fahren is ${ celc} celc. ${message}`;
}


function rand(limit) {
    return Math.round(Math.random()*limit);
}



let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
