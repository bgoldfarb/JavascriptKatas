`
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. 
Return True if it is, False if not. Ignore numbers and punctuation.`

const alphabet = "abcdefghijklmnopqrstuvwxyz"


const converter = (string) =>  string.toLowerCase().split('').filter((letter) => letter.match(/^[a-z]+$/i)).join("")


 export default (string) => {
    let formattedString = converter(string)
    return alphabet.split('').filter(letter => formattedString.indexOf(letter) === -1).length === 0
   
}

