// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}
function sayHello(input){
    if (input === undefined || input === false || input === null){
        input = "World!";
    }
    return "Hello, " + input;
}
function isFive(input) {
    if (input != 5){
        return false;
    }
    return input === 5 || input === '5';
}

function isEven(input){
    if (input === false){
        return false;
    }
    input = input % 2 === 0;
    return input;
}

function isVowel(input){
    if (typeof input !== 'string'){
        return false;
    }
    input = input.toLowerCase();
    if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u'){
        return true;
    } else {
        return false;
    }
}

function add(input1, input2){
    let inputSum = parseInt(input1) + parseInt(input2);
    return inputSum;
}