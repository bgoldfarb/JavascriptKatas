`
Given a list of numbers and a number k, return whether any two numbers from the list 
add up to k.For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
`

export default (arr, sum) => {

    if(arr.length === 0 && sum === 0){
        return true
    }
    else if(arr.length === 1 && arr[0] === sum){
        return true
    }
    let seen = []
    for(let num in arr){
        if((seen.includes(sum - arr[num]))){
            return true
        }
        else{
            seen.push(arr[num])
        }
    }
    return false   
}