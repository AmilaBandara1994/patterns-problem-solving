/*
    searching short string in a long string 

    psudocode 
    * Loop over the longer string
    * Loop over the shorter string 
    * If the character don't match, break out of the inner loop
    * If the character do match, keep checking other characters
    * If you complete the inner loop and find a match increment the count of match 
    * Return the count 
    * 

*/

function stringSearch(str, query){
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== query[0]) continue;
        for (let j = 0; j < query.length; j++) {   
            if(str[i+j] !== query[j]){
                break;
            }       
        }
        
    }

}




console.log('harold said haha in hamburg');
