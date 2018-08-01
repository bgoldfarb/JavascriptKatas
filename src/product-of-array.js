`
Given an array of integers, return a new array such that each element at index i of 
the new array is the product of all the numbers in the original array except the 
one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
[120, 60, 40, 30, 24]. 
If our input was [3, 2, 1], the expected output would be [2, 3, 6].`


export default (arr) => {
    if(arr.length <= 2){
        return arr
    }
    else
    {
        let product = arr.reduce((a,b) => a*b )
        let prodArray = arr.map((i) => {
            return product/i
        })
        return prodArray
    }   
}

//Try not to use division here: 