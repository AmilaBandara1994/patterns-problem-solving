/*

        Anagrams
        Given two Strings, write a function to determine if the second string is an anagram of the  first. 
        An anagram is a word, phase or name formed by rearranging the letters of another, such as cinema, formed form iceman.


        validAnagram('', '') //true
        validAnagram('aaz', 'zza') //false
        validAnagram('anagram', 'nagaram') //true
        validAnagram('rat', 'car') //false
        validAnagram('awesome', 'awesom') //false
        validAnagram('qwerty', 'qeywrt') //true
        validAnagram('texttwisttime', 'timetwisttext') //true

*/

function validAnagram(str1, str2){

    //check the two strings are same in length
    if(str1.length !== str2.length){
        return false;
    }
    // loop over 1st string  and check whether the value is in the second string 

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        console.log('elemnt', element);
        
        let index =  str2.indexOf(element);
        console.log('index', index);
        if(index === -1 ){
            return false;
        }
        str2.replace(str2.charAt(index), ' ');
        console.log('str', str2);
        
        // removing does not working thats why it not giving expected value
        console.log('charat', str2.charAt(index));
    }
    return true;
}

function validAnagram2(str1, str2){
    // return if the length mismatch
    if(str1.length !== str2.length){
        return false;
    }
    // create a variable to hold the key pair values
    const lookup ={};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exist, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;       
    }
    for (let i = 0; i < str2.length; i++) {
        const letter = str2[i];
        // Can't find letter or letter is zero then it's not and anagram
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }        
    }
    return true;
}


// console.log(validAnagram('', ''));//true
console.log(validAnagram('aaz', 'zza')); //false
// console.log( validAnagram('anagram', 'nagaram')); //true
// console.log( validAnagram('rat', 'car')); //false
// console.log( validAnagram('awesome', 'awesom'));//false
// console.log(validAnagram('qwerty', 'qeywrt')); //true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); //true


console.log("************************");

// console.log(validAnagram2('', ''));//true
// console.log(validAnagram2('aaz', 'zza')); //false
// console.log( validAnagram2('anagram', 'nagaram')); //true
// console.log( validAnagram2('rat', 'car')); //false
// console.log( validAnagram2('awesome', 'awesom'));//false
// console.log(validAnagram2('qwerty', 'qeywrt')); //true
// console.log(validAnagram2('texttwisttime', 'timetwisttext')); //true
