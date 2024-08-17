/**
 *   Sliding Window  -  Algorithmic Mental Models
 * 
 *      This pattern involves creating a window which can either be an array or number from one position to another
 * 
 *      Depending on a certain Condition, the window either increases or closes (and a new window is created )
 * 
 *      Very useful for keeping track of a subset of data in an array/string etc.
 * 
 *      things we iterate over 
 *          - contiguous sequence of elements 
 *          - Strings, Arrays, LinkedLists
 *
 * 
 * 
 * 
 *       To find out Min, Max, Longest, Shortest, contained
 *          - maybe we need to calculated something.
 * 
 * 
 *      Fix length size variants  
 *          - Max sum subarray of size K
 * 
 *      Dynamic length size variant
 *          -  Smallest sum >= to some value S
 * 
 *      Dynamic  variant - with auxiliary data structure
 *          -  Longest substring with no more than K  distinct characters 
 *          -  String permutation
 * 
 */

// find the max sum subarray of a fixed size k

function findMaxSubarray(arr, k){
    let maxValue = 0;
    let currentRunningSum =0;

    for (let i = 0; i < arr.length; i++) {
        currentRunningSum += arr[i-(k-1)];
        if(i>=k-1){
            if(maxValue < currentRunningSum){
              maxValue = currentRunningSum;
            }
            currentRunningSum -= arr[i -(k-1)];
        }
    }
    return maxValue;
}


function smallestSubarray(arr, targetsum){
    let size;
    let currentWindowSum = 0;
    let windowstart = 0;

    for (let winddowend = 0; winddowend < arr.length; winddowend++) {
              
    }
}