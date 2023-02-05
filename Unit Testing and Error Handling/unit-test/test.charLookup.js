const {expect} = require('chai')
const lookupChar = require('./charLookup.js')

describe('char look up', function(){

    it('should return "Incorrect index" if the index is floating number', ()=>{
        expect(lookupChar('aaa', 1.2)).to.undefined
    })
    it('should return undefined if first param is not a string', ()=>{
        expect(lookupChar(1, 1)).to.undefined
    })  
    it('should return undefined if second param is not a number', ()=>{
        expect(lookupChar('aaa', 'aaa')).to.undefined
    })
    it('should return undefined if second param is not defined', ()=>{
        expect(lookupChar('aaa')).to.undefined
    })
    it('should "Incorrect index" if the index is out of boundry', ()=>{
        expect(lookupChar('aaa', -1)).to.equal('Incorrect index')
    })
    it('should "Incorrect index" if the index is out of boundry', ()=>{
        expect(lookupChar('aaa', 100)).to.equal('Incorrect index')
    })
    it('should return "e" if the index is 1', ()=>{
        expect(lookupChar('test', 1)).to.equal('e')
    })
    it('should return "t" if the index is the last', ()=>{
        expect(lookupChar('test', 3)).to.equal('t')
    })

})
