// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane"', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane");
    });
    it('should return the string "Hello, Alex"', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex");
    });
    it('should return the string "Hello, Pat"', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat");
    });
    it('no input should return the string "Hello, World!"', function(){
        expect(sayHello()).toBe("Hello, World!");
    })
    it('false should return the string "Hello, World!"', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    })
    it('null input should return the string "Hello, World!"', function(){
        expect(sayHello(null)).toBe("Hello, World!");
    })
    it('should never return "undefined" when called', function(){
        expect(sayHello()).not.toBe(undefined);
    })
});
describe('isFive', function(){
    it('5 should return true', function(){
        expect(isFive(5)).toBe(true)
    });
    it('"5" should return true', function(){
        expect(isFive("5")).toBe(true)
    });
    it('should return a boolean value of true or false', function(){
        expect(typeof isFive()).toBe(('boolean'));
    });
});
describe('isEven', function(){
    it('should be a defined function', function (){
        expect(typeof isEven).toBe('function');
    })
    it('should return a boolean value no matter the input', function (){
        expect(typeof isEven()).toBe('boolean');
    })
    it('should return true when executed with the number 2', function(){
        expect(isEven(2)).toBe(true);
    })
    it('should return true when executed with the number -4', function (){
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when executed with the number 3', function (){
        expect(isEven(3)).toBe(false);
    })
    it('should return false when executed with the word "banana"', function () {
        expect(isEven("banana")).toBe(false);
    })
    it('should return true when executed with the string "8"', function () {
        expect(isEven("8")).toBe(true);
    })
    it('should return false when executed with as isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when executed with a boolean value of true', function () {
        expect(isEven(true)).toBe(false);
    })
    it('should return false when executed with a boolean value of false', function () {
        expect(isEven(false)).toBe(false);
    })
    it('should return false when executed without an argument', function () {
        expect(isEven()).toBe(false);
    })
})
describe('isVowel', function(){
    it('should be a defined function', function (){
        expect(typeof isVowel).toBe('function');
    })
    it('should return true when executed with "a"', function () {
        expect(isVowel('a')).toBe(true);
    })
    it('should return true when executed with "A"', function () {
        expect(isVowel('A')).toBe(true);
    })
    it('should return true when executed with "y"', function () {
        expect(isVowel('y')).toBe(false);
    })
    it('should return false when executed with 4', function () {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when executed with false', function () {
        expect(isVowel(false)).toBe(false);
    })
    it('should return false when executed with true', function () {
        expect(isVowel(true)).toBe(false);
    })
    it('should return false when executed with the string "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    })
    it('should return false when executed with an empty argument', function () {
        expect(isVowel()).toBe(false);
    })
})
describe('add', function (){
    it('should be a defined function', function (){
        expect(typeof add).toBe('function');
    })
    it('it should return 5 when 2 and 3 are passed through the function', function () {
        expect(add(2, 3)).toBe(5);
    })
    it('it should return -12 when -3 and -9 are passed through the function', function () {
        expect(add(-3, -9)).toBe(-12);
    })
    it('it should return 11 when "5" and 6 are passed through the function', function () {
        expect(add("5", 6)).toBe(11);
    })
    it('it should return 6 when "-4" and "10" are passed through the function', function () {
        expect(add("-4", "10")).toBe(6);
    })
    it('it should return NaN when "banana" and "split" are passed through the function', function () {
        expect(add("banana", "split")).toBeNaN();
    })
    it('it should return NaN when 2 and "apples" are passed through the function', function () {
        expect(add(2, "apples")).toBeNaN();
    })
    it('it should return NaN when no argument is passed through the function', function () {
        expect(add()).toBeNaN();
    })
})