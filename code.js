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
