/*
        Turing Coding challenge 

        Given a string S, return the "reversed" string where all characters that are not a letter 
        stay in the same place, and all letter reversed their position

*/


function reverseOnlyLetters(str){
    
    let chatacters = '';
    let letters = '';
    let result ='';


    for (let i = 0; i < str.length; i++) {
        if(str[i].match('\^[A-Za-z]$')){
            chatacters += 'a'
        } else{
            chatacters += str[i];
        }   
        if(str[str.length - (i+1)].match('\^[A-Za-z]$')){
            letters += str[str.length - (i+1)];
        }
    }
    let j = 0;    
    for (let i = 0; i < chatacters.length; i++) {
        if(chatacters[i].match('\^[A-Za-z]$')){
            result += letters[j] ;
            j++
        }else{
            result += chatacters[i]
        }
    }
    return result;
    
}





function isPalindrome(x) {
    for(let i=0; i < x.length; i++){
        console.log(i);
        console.log(x.length - (i+1));
        
        if(x[i] !== x[x.length- (i+1)]){
            return false;
        }
    }
    return true;
};

console.log( isPalindrome(10));





// console.log(reverseOnlyLetters("ab-cd"));
// console.log("expected output - dc-ba");

// console.log(reverseOnlyLetters("a-bC-dEf=ghlj!!"));
// console.log("expected output - j-lh-gfE=dCba!!");

// console.log("output value ",reverseOnlyLetters("a-bC-dEf=ghlj!!"));
// console.log("expected output  j-lh-gfE=dCba!!");

// console.log("output value ",reverseOnlyLetters("ab-cd"));
// console.log("expected output   dc-ba");