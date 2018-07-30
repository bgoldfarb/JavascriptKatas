import { expect } from 'chai'
import isPangram from '../src/isPangram.js'


describe('Panagram Checker', () => {
    
        it('should return false for empty string', () => {
            expect(isPangram('')).to.be.equal(false)
        })

        it('should return false for string without full alphabet', () => {
            expect(isPangram('abcdefghij')).to.be.equal(false)
        })

        it('should return true for string with full alphabet', () => {
            expect(isPangram('abcdefghijklmnopqrstuvwxyz')).to.be.equal(true)
        })

        it('should return true for string with full alphabet with mixed lowercase and uppercase', () => {
            expect(isPangram('abcdefghijklmnOpqrsTuvwxyZ')).to.be.equal(true)
        })

        it('should return true for string with full alphabet with mixed lowercase and uppercase and numbers', () => {
            expect(isPangram('ab124cdefghijkl231mnOpqrsT1241uvwxyZ')).to.be.equal(true)
        })


        it('should return true for string with full alphabet with mixed words and uppercase and numbers', () => {
            expect(isPangram('The323 quicK browN fox jumps over the lazy dog.')).to.be.equal(true)
        })
})