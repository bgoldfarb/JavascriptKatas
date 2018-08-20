import { expect } from 'chai'
import wordFreq from '../src/word_freq.js'




describe('Word Frequency Spec', () => {
    
    xit('reads in a file succesfully', () => {
        var fs = require('fs');
        fs.readFile('/Users/briangoldfarb/Desktop/javascriptKatas/javascript-katas/tests/story', 'utf8', (err, data) => {
          if (err) throw err;
          expect(wordFreq(data)).to.equal(true)          
        });
    })

    xit('splits file into array of words seperated by spaces ', () => {
        var fs = require('fs');
        fs.readFile('/Users/briangoldfarb/Desktop/javascriptKatas/javascript-katas/tests/story', 'utf8', (err, data) => {
          if (err) throw err;
          expect(wordFreq(data)).to.equal(true)          
        });
    })

    xit('Counts Frequency of Each Word', () => {
       let coolString = 'Cool Beans Are Cool And  Are     Cool'
       let expectedObject = {
           'Cool':3,
           'Beans':1, 
           'Are':2,
           'And':1
       }
       expect(wordFreq(coolString)).to.eql(expectedObject)
    })


    it('Sorts by frequency', () => {
        let coolString = 'Cool Beans Are Cool And  Are     Cool'
        let expectedObject =  [ { name: 'Cool', total: 3 },
        { name: 'Are', total: 2 },
        { name: 'Beans', total: 1 },
        { name: 'And', total: 1 } ]
        expect(wordFreq(coolString)).to.eql(expectedObject)
     })

     it('reads in a file succesfully', () => {
        var fs = require('fs');
        fs.readFile('/Users/briangoldfarb/Desktop/javascriptKatas/javascript-katas/tests/story', 'utf8', (err, data) => {
          if (err) throw err;
          console.log(wordFreq(data))         
        });
    })

})

