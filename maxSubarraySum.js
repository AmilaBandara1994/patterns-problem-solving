/*

        sliding window ---


        Write a function called maxSubarraySum which accepts ana array of integers and  a number called n. The 
        function should calculate the maximum sum of n consecutive elements in the array.

        maxSubarraySum([1,2,5,2,8,1,5], 2)//10
        maxSubarraySum([1,2,5,2,8,1,5], 4)//17
        maxSubarraySum([4,2,1,6],1)//6
        maxSubarraySum([4,2,1,6,2],4)//13
        maxSubarraySum([],4)// null
*/

function maxSubarraySum(arr, n){

    // check the array is empty if so return null
    if(arr.length === 0) return null;
    // Create a variable to store the sum of the nth consecutive numbers
    let sum =0;    
    for (let i = n; i < arr.length; i++) {
        let elements =0;   
        
        for(let j=(i-n); j<i;j++){
            elements += arr[j];
        }
        if(elements > sum){            
            sum = elements
        }
        
    }

    return sum;

}

function findMaxSubarray(arr, k){
    let maxValue = 0;
    let currentRunningSum =0;

    for (let i = 0; i < arr.length; i++) {
        currentRunningSum += arr[i];
        if(i>=k-1){
            if(maxValue < currentRunningSum){
              maxValue = currentRunningSum;
            }
            currentRunningSum -= arr[i -(k-1)];
        }
    } 
    return maxValue;
}

// refactor sub array

function maxSubarraySum2(arr, num){
    let maxSum =0; 
    let tempSum=0; 
    if(arr.length < num ) return null;

    for (let i = 0; i < arr.length; i++) {
        maxSum += arr[i];       
    }
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];      
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}







    //  console.log( maxSubarraySum([1,2,5,2,8,1,5], 2));//10
    //  console.log( maxSubarraySum([1,2,5,2,8,1,5], 4));//17
    //  console.log( maxSubarraySum([4,2,1,6],1)); //6
    //  console.log( maxSubarraySum([4,2,1,6,2],4));//13
    //  console.log(maxSubarraySum([],4));// null

     console.log( findMaxSubarray([1,2,5,2,8,1,5], 2));//10
     console.log( findMaxSubarray([1,2,5,2,8,1,5], 4));//17
     console.log( findMaxSubarray([4,2,1,6],1)); //6
     console.log( findMaxSubarray([4,2,1,6,2],4));//13
     console.log(findMaxSubarray([],4));// null