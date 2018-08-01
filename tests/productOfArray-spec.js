import { expect } from 'chai'
import prodArray from '../src/product-of-array.js'


describe('Product Of Array', () => {
    
        it('should return empty array for empty array', () => {
            expect(prodArray([])).to.deep.equal([])
        })

        it('should return same array for array with one input', () => {
            expect(prodArray([5])).to.deep.equal([5])
        })

        it('should return same array for array with two inputs', () => {
            expect(prodArray([5,5])).to.deep.equal([5,5])
        })
        it('should return multiplied array with same output for array with three inputs of same value', () => {
            expect(prodArray([5,5,5])).to.deep.equal([25,25,25])
        })
        it('should return multiplied array for array with 4 inputs ', () => {
            expect(prodArray([1, 2, 3, 4, 5])).to.deep.equal([120, 60, 40, 30, 24])
        })

    })