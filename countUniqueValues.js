/*
    Count Unique Values

    Implement a function call countUniqueValues, which accepts a sorted array, adn counts the unique values in the array. There can be negative numbers 
    in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,1,2]) //2
    countUniqueValues([1,2, 3, 4,4,4,4,7,7,12,12,13]) //7
    countUniqueValues([]) //0
    countUniqueValues([-2, -1, 0,1]) //4
    
    
 */


function countUniqueValues(arr){
    //create a variable to store the count
    let count = 0;
    // check whether the array empty or not 
    if(arr.length === 0 ){
        return count;
    }
    // first sort the array this case array is sorted
    let uniqueValue;
    for (let i = 0; i < arr.length; i++) {
        if(uniqueValue !== arr[i]){
            uniqueValue = arr[i];
            count++
        }
    }
    return count;
}

function countUniqueValues2(arr){
    if(arr.length === 0 )return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}


console.log( countUniqueValues([1,1,1,1,1,1,2])); //2
console.log(countUniqueValues([1,2, 3, 4,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, 0,1])); //4

console.log('*************************');


console.log( countUniqueValues2([1,1,1,1,1,1,2])); //2
console.log(countUniqueValues2([1,2, 3, 4,4,4,4,7,7,12,12,13])); //7
console.log(countUniqueValues2([])); //0
console.log(countUniqueValues2([-2, -1, 0,1])); //4