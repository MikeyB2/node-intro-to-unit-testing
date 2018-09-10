// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function () {

    // test all fizz, buzz, fizz-buzz normal cases
    it('should return "fizz-buzz" if divisible by both', function () {
        [15, 30, 45, 60].forEach(function (value) {
            expect(fizzBuzzer(value)).to.equal('fizz-buzz');
        });
    });
    it('should return "buzz" if divisible by 5', function () {
        [5, 10, 20, 25].forEach(function (value) {
            expect(fizzBuzzer(value)).to.equal('buzz');
        });
    });
    it('should return "fizz" if divisible by 3', function () {
        [3, 6, 9, 12].forEach(function (value) {
            expect(fizzBuzzer(value)).to.equal('fizz');
        });
    });

    // if not divisible by 3 or 5 return the value passed in
    it('should return the number if not divisible by 3 or 5', function () {
        [1, 2, 4].forEach(function (value) {
            expect(fizzBuzzer(value)).to.equal(value);
        });
    });
    // create a const for all bad values that are not numbers

    it('should return an error if it is not a number', function () {
        const badValues = ['test', function () {}, true, false, [1, 2, 3, 4]];
        // loop through the values and expect to throw and error
        badValues.forEach(function (value) {
            expect(function () {
                fizzBuzzer(value);
            }).to.throw(Error);
        });
    });
});