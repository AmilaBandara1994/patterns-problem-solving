//write and function called same, which accept two arrays. The function should return true if every value in the array
// has its corresponding value squared in the second array. The frequency of the value must be the same .


/**
 * same([1,2,3],[4,1,9]); //true
 * same([1,2,3],[1,9]); //false
 * same([1,2,1],[4,4,1]); //false (must be same frequency)
 */

function same(arr1, arr2){
    //the length of both array must be same  or the second array can be greater, if it is not return false
    if(arr2.length !== arr2.length){
        return false;
    }
    //loop every element in arr1
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i]*arr1[i];
        //inside the loop run another loop to check whether there is a matching element
        for (let j = 0; j < arr2.length; j++) {
            if(arr2[j] === element){
                //If there is a matching delete it from the array and go to the previous array
                arr2.splice(j,1)
                break;
            }
           
        }    
    }
    // check whether there leftovers if there are return false else return true
    return true;
}

function same2(arr1, arr2){
    //the length of both array must be same if it is not return false
    if(arr2.length !== arr2.length){
        return false;
    }
    //loop every element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // check the indexof given value 
        const element = arr2.indexOf(arr1[i]*arr1[i]);
        // if it returns -1 then return false;
        if(element === -1){
            return false;
        }
        // else remove the item form the second array
        arr2.splice(element,1);
    }
    // if the method come so far mean the values are matching then return true
    return true;
}








// ****************************************************************************frequency counter pattern *******************************************************************

function same3(arr1, arr2){

    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        // console.log(val);
        
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    // console.log(frequencyCounter1);

    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
    
}


console.log( 'method 1',same3([1,2,3],[4,1,9]));
console.log( 'method 2',same3([1,2,3],[1,9]));
console.log( 'method 3',same3([1,2,1],[4,4,1]));