const {expect} = require('chai')
const isOddOrEven = require('./evenOrOdd.js')

describe('even or odd', function(){
    it('should return undefined if param is number', ()=>{
        expect(isOddOrEven(3)).to.undefined
    })
    it('should return odd if param length is odd', ()=>{
        expect(isOddOrEven('a')).to.equal('odd')
    })
    it('should return even if param length is even', ()=>{
        expect(isOddOrEven('aa')).to.equal('even')
    })

})