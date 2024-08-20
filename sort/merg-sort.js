/*
    It is a combination of two things -  merging and sorting!

    Exploit the fact that two arrays of 0 or 1 element are always sorted.

    Worked by decomposing an array into smaller arrays of 0 or 1 element, then building up a newly sorted array.

    Divide and conquer type 



*/

// my method
function merge(arr1, arr2){
    let leftpointer =0;
    let rightpointer =0;
    let mergedarr=[];

    for (leftpointer = 0; leftpointer < arr1.length;) {
        for (rightpointer; rightpointer < arr2.length;) {
            if(arr1[leftpointer]< arr2[rightpointer]){

                mergedarr.push(arr1[leftpointer])
                leftpointer++
                break;
            }else{
                
                mergedarr.push(arr2[rightpointer]);
                rightpointer++
                continue;
            }
        }        

    }

    while(leftpointer < arr1.length){
        mergedarr.push(arr1[leftpointer])
        leftpointer++
        }

        while(rightpointer < arr2.length){
            mergedarr.push(arr2[rightpointer])
            rightpointer++
        }
   
    return mergedarr

}


function merge1(arr1, arr2){
    let result=[]
    let i=0;
    let j=0;

    while(i< arr1.length && j  < arr2.length){
        if(arr2[j] > arr1[i]){
            result.push(arr1[i]);
            i++;
        }else{
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        result.push(arr2[j])
        j++
    }

    return result; 
}


function mergesort(arr){
    //return if the arr is empty
    if(arr.length <= 1) return arr;
    let mid= Math.floor(arr.length/2);
    let left =  mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    return merge1(left,right)
}


console.log(mergesort([111 ,10,22,32,43,20,12,31]));
console.log(mergesort([13 ,47 ,98,98,10,22,32,43,20,12,31]));




// console.log(merge1([1,10,50],[2,14,99,100]));
// console.log(merge1([100],[2,14,99]));
// console.log(merge1([],[2,14,99,100]));
