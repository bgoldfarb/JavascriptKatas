import { expect } from 'chai'
import compDNA from '../src/compDNA.js'


describe('DNA Complementer', () => {
    
        it('should return empty for empty string', () => {
            expect(compDNA('')).to.be.equal('')
        })
        it('should return T when given A', () => {
            expect(compDNA('A')).to.be.equal('T')
        })
        it('should return TT when given AA', () => {
            expect(compDNA('AA')).to.be.equal('TT')
        })
        it('should return C when given G', () => {
            expect(compDNA('G')).to.be.equal('C')
        })
        it('should return CC when given GG', () => {
            expect(compDNA('GG')).to.be.equal('CC')
        })
        it('should return CCTAT when given GGATA', () => {
            expect(compDNA('GGATA')).to.be.equal('CCTAT')
        })

})