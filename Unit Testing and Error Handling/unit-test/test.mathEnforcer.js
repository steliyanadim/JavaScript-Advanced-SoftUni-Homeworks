const { expect } = require('chai')
const mathEnforcer = require('./mathEnforcer.js')



describe('math enforser', function () {

    describe('add five', () => {
        it('should return undefined if param is not a number', () => {
            expect(mathEnforcer.addFive('a')).to.undefined
        })
        it('should return 10 if param is 5', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('should return 0 if param is -5', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0) 
        })
        it('should return 5.6 if  param is 0.2', () => {
            expect(mathEnforcer.addFive(0.2)).to.be.closeTo(5.2, 0.001)
        })
    })

    describe('subctract ten', () => {
        it('should return undefined if param is not a number ', () => {
            expect(mathEnforcer.subtractTen('a')).to.undefined
        })
        it('should return 10 if param is 20', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10)
        })
        it('should return -20 if param is -10', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
        })
        it('should return 0.2 if  param is 10.2', () => {
            expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.001)
        })
    })

    describe('sum', () => {
        it('should return undefined if first param is not a number ', () => {
            expect(mathEnforcer.sum('a', 1)).to.undefined
        })
        it('should return undefined if second param is not a number ', () => {
            expect(mathEnforcer.sum(1,'a')).to.undefined
        })
        it('should return undefined if both params are not numbers ', () => {
            expect(mathEnforcer.sum('a','a')).to.undefined
        })
        it('should return the sum of both params if they are numbers', () => {
            expect(mathEnforcer.sum(1,1)).to.equal(2)
        })
        it('should return 0.6 if first param is 0.3 and second param is 0.3', () => {
            expect(mathEnforcer.sum(0.2,0.4)).to.be.closeTo(0.6, 0.001)
        })
        it('should return -1 if first param is 1 and second param is -2', () => {
            expect(mathEnforcer.sum(1,-2)).to.equal(-1)
        })
        it('should return 1 if first param is -1 and second param is 2', () => {
            expect(mathEnforcer.sum(-1,2)).to.equal(1)
        })
        it('should return -3 if first param is -1 and second param is -2', () => {
            expect(mathEnforcer.sum(-1,-2)).to.equal(-3)
        })
    })

})


// •	addFive(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, add 5 to it, and return the result.
// •	subtractTen(num) - A function that accepts a single parameter:
// o	If the parameter is NOT a number, the function should return undefined.
// o	If the parameter is a number, subtract 10 from it, and return the result.
// •	sum(num1, num2) - A function that accepts two parameters:
// o	If any of the 2 parameters is NOT a number, the function should return undefined.
// o	If both parameters are numbers, the function should return their sum.

// The methods should function correctly for positive, negative, and floating-point numbers. In the case of floating-point numbers,
// the result should be considered correct if it is within 0.01 of the correct value. 
