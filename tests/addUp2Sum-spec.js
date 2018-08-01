import { expect } from 'chai'
import addUp2Sum from '../src/addUp2Sum.js'


describe('Add Up 2 Sum', () => {
    
    it('should return true for empty array and sum of 0', () => {
            expect(addUp2Sum([], 0)).to.be.equal(true)
    })
    it('should return false for empty array and sum not 0', () => {
        expect(addUp2Sum([], 10)).to.be.equal(false)
    })
    it('should return true for num array and sum 1', () => {
        expect(addUp2Sum([1], 1)).to.be.equal(true)
    })
    it('should return true for num array and sum 10', () => {
        expect(addUp2Sum([1,9], 10)).to.be.equal(true)
    })
    it('should return true for num array and sum 10', () => {
        expect(addUp2Sum([0,0], 10)).to.be.equal(false)
    })
    it('should return true for num array and sum 0', () => {
        expect(addUp2Sum([0,0], 0)).to.be.equal(true)
    })
    it('should return true for num array and sum 0', () => {
        expect(addUp2Sum([0,0,1], 0)).to.be.equal(true)
    })
    it('should return true for num array and sum 0', () => {
        expect(addUp2Sum([2,9],11)).to.be.equal(true)
    })
    it('should return true for num array and sum 0', () => {
        expect(addUp2Sum([2,9,3,9],18)).to.be.equal(true)
    })


})