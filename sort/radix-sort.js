/*
    Radix Sort

    Radix sort is a special sorting algorithm that works on list of numbers.



    Radix sort 

    Define a function that accepts list of numbers 
    Figure out how many digits the largest number has
    loop from k=0 up to  this largest number of digits
    for each iteration of the loop:
    Create buckets for each digit (0 to 9)
    place each number in the corresponding bucket based on its kth digit


*/

// function getDigit(num, digit){
//     let value =num.toString().length-digit
//     return value;
// }

function getDigit(num, digit){
    return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

function digitCount(num){
    if(num === 0 )return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let maxDigit = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigit  = Math.max(maxDigit, digitCount(nums[i]));   
    }
    return maxDigit;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBucket = Array.from({length:10}, ()=>[])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);
            digitBucket[digit].push(nums[i]);            
        }
        nums = [].concat(...digitBucket);
    }
    return nums;
    
}


// console.log(getDigit(12345,0));//5
// console.log(getDigit(12345,1));//4
// console.log(getDigit(12345,2));//3
// console.log(getDigit(12345,3));//2
// console.log(getDigit(12345,4));//1
// console.log(getDigit(12345,5));//0

console.log(radixSort([233,5325,2343,634,3234,64445,23,1]));

