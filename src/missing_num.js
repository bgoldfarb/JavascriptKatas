`

Find the first missing positive integer in linear time. Find the lowest
positive integer that does not exist in the array. Array must have at least 2 elements 

[3,4,-1,1] -> 2

[1,2,0] -> 3

`


export default (arr) => {


    let s = new Set(arr) //get rid of duplicates
    let i = 1 //lowest number to return 
    let arraySet = Array.from(s) //convert set back to array
    
    while(arraySet.includes(i)){
        i += 1
    }
    return i
    // let avg = (arr.reduce((a,b) => a+b))/arr.length
    // return avg

}