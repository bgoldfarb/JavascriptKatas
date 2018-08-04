import { expect } from 'chai'
import missing_num from '../src/missing_num'

describe('Find Missing Number', () => {
    
        it('should return the middle number', () => {
            expect(missing_num([1,3])).to.deep.equal(2)
        })

        it('should return the middle number', () => {
            expect(missing_num([3,4,-1,1])).to.deep.equal(2)
        })

        it('should return the lowest positive number number', () => {
            expect(missing_num([3,4,5,-1,0,-2,-4,7])).to.deep.equal(1)
        })

        it('should return the lowest positive number number', () => {
            expect(missing_num([1,2])).to.deep.equal(3)
        })
    
})