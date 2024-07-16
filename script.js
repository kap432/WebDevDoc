function printMessage() {
    console.log('Hello, world!');
    document.getElementById('output').innerText = 'Message printed in console. Check console for details.';
}

function let_variable(){
let message = 'Hello, world!';
console.log(message);
document.getElementById('let').innerText = 'Message printed in console. Check console for details.';
}

function var_variable(){
var count = 10;
console.log(count);
document.getElementById('var').innerText = 'Message printed in console. Check console for details.';
}

function const_variable(){
const pi = 3.14;
console.log(pi);
document.getElementById('const').innerText = 'Message printed in console. Check console for details.';
}

function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Alice'));



