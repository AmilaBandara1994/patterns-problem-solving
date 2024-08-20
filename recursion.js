/*
        Recursion   - a process of (a function) that calls itself.

        * Base case 
        * Recursive call 
        
        
        Pros

        * Bridges the gap between elegance and complexity
        * Reduce the need for complex loops and auxiliary data structures
        * Can reduce time complexity easily with Memoization
        * Works really well with recursive structure like trees and graphs


        Cons

        * Slowness due to CPU overhead
        * Can Lead to out of memory errors/ stack overflow exceptions
        * Can be Unnecessarily  complex if poorly constructed
        

        recursiveFunction(something){
                // what is the base case?
                // what is the smallest amount of work I can do in each iteration?
        }


        -------------------Call Stack --------------------


        Where things go wrong 

                * NO base case
                * Forgetting to return or returning the wrong thing
                * stack overflow



*/

function sumRange(num){
        // base case 
        if(num <=0 ){
                return 0;
        }

        //recursive case; 
        return num + sumRange(num- 1);
}

console.log(sumRange(3));


// function getMyPosition(num){
//         if(num === 0){
//                 return 1;
//         }
//         return 1 + getMyPosition(num)
// }


// recursive function for reverse string 
function reverseString(str){
        // what is the base case  a letter or a empty string
        if(str.trim().length === 0 ){
                return "";
        }
        return reverseString(str.substring(1)) + str.charAt(0);
}

// console.log( reverseString('hello'));


// recursive function for palindrome

function palindrome(str){
        // base case

        if(str.length === 0 || str.length === 1){
                return true;
        }
        // recursive case 

        if(str.charAt(0) === str.charAt(str.length -1)){
              return   palindrome(str.substring(1, str.length-1));
        }

        return false;
}

// console.log( palindrome('racecarw'));
console.log( palindrome(121));


// recursive function for converting decimal to binary

function decimalToBinary(num){
        // base case  return the value if the it is 0
        if(num === 0 ){
                return num%2;
        }
        result  = num%2
        return  decimalToBinary(num/2)+ num%2;

}

// console.log( decimalToBinary(233));