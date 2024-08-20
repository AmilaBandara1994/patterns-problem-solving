
/*
    Helper method recursion 

*/

function collectOddValues(arr){
    let result = [];
    function helper(obj){
        // base case
        if(obj.length === 0){
            return;
        }
        // recursive case
        if(obj[0] %2 !== 0){
            result.push(obj[0]);
        }

        helper(obj.slice(1));
    }
    helper(arr)
    return result;
}

console.log( collectOddValues([1,2,3,4,5,6,7,8,9]));
