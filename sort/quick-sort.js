/*

    Like merge sort, exploits the fact that 




    Pivot Helper 

    In order to implement merge sort, it's useful to first implement a function responsible 
    arranging elements in an array on either side of pivot 

    Give an array, this helper function should designate an element as the pivot 

    It should then rearrange  element in the pivot, and all values greater than the pivot are moved to the right of the pivot 

    The order of the element on either side of the pivot doesn't matter!

    The helper should do this in place, that is it should not create a  new array

    When complete, the helper should return the index of the pivot 

*/



// function pivot1(arr){
//     let pivot=0;
//     let grater = 0;
//     let less=0;
//     let temp;

//     for (let i = 1; i < arr.length; i++) {
//         if(arr[pivot] < arr[i]){
//             grater++
//         }else{
//             if(less < i ){
//                 temp = arr[less+1];
//                 arr[less+1] = arr[i];
//                 arr[i] = temp;
//             }
//             less++
//         }
//     }
//     temp = arr[less]
//     arr[less] = arr[pivot];
//     arr[pivot] = temp

//   return arr;
    
// }

function pivot(arr, start=0, end=arr.length){
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let pivot= arr[start];
    let swapIdx = start;

    for (let i = start +1; i <= end; i++) {
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    // console.log(arr);
    
    return swapIdx;
}


function quicksort(arr, left=0, right = arr.length -1){

    if(left < right){
        let pivotIdx = pivot(arr, left, right);
        quicksort(arr, left, pivotIdx -1);
        quicksort(arr,pivotIdx+1, right);
    }
    return arr;
}

console.log([12,23,4, 5 ,3 ,2 ,1,22,35,53,21,14,16]);
console.log(quicksort([12,23,4, 5 ,3 ,2 ,1,22,35,53,21,14,16]));
