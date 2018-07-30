import {map} from 'lodash'
`
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". You have function with one side of the DNA 
(string, except for Haskell); you need to get the other complementary side.
DNA strand is never empty or there is no DNA at all`

const compDnaPairs = {
    "A" : "T",
    "T" : "A",
    "G" : "C",
    "C" : "G"
}
export default (dna) => {
   const dnaArray = map(dna.split(''), (i) => {
        return compDnaPairs[i]
    })
    let dnaString = dnaArray.join('')
    return dnaString
}