/*
    Reverse the given sting
 */


function reverseString(str){
    // create a variable to hold the reverse string value
    reversestr= '';

    // run a for loop to reverse the string 
    for (let i = 0; i < str.length; i++) {
        reversestr += str[str.length- (i+1) ];
    }
    return reversestr;

}

console.log( reverseString('amial a amaoal'));
