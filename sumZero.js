/*

    Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where 
    the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist


    sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3]
    sumZero([ -2, 0, 1,3]) // undefined
    sumZero([ 1, 2, 3]) // undefined
 */

function sumZero(arr){
    // assume that the values are sorted 
    
    // create two pointers referencing head and tail
    let head = 0;
    let tail = 0;
    // store in an array the result 
    let firstpair =[];
    
    // loop through the array to find a matching one 
    for (let i = 0; i < arr.length; i++) {
        head = i;
        tail = arr.length - (i+1);
        
        // store the result in the  array  
        if(arr[head]+ arr[tail] === 0){
            firstpair.push(arr[head])
            firstpair.push(arr[tail])

            return firstpair;
        }
        
    }
    
}


function sumZero2(arr){
    let left = 0;
    let right = arr.length-1;
    while(left <right){
        let sum =arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right --;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10,23,32])); // [-3,3]
console.log(sumZero([ -2, 0, 1,3])) // undefined
console.log( sumZero([ 1, 2, 3]) )// undefined

console.log('******************************');


console.log(sumZero2([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero2([ -2, 0, 1,3])) // undefined
console.log( sumZero2([ 1, 2, 3]) )// undefined