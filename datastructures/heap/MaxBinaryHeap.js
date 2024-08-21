/*
    MaxBinaryHeap


    Adding to a MaxBinaryHeap 
        Add to the end 
        Bubble up
*/

class MaxBinaryHeap{
    constructor(){
         this.values = [];
    }


    //Insert pseudocode
    // Push the value into the values property on the heap 
    // Bubble the value up to its correct spot!
        // Create a variable called index which is the length of the values property -1 
        // Create a variable called parentIndex which is the floor of (index-1)/2
        // Keep looping as long as the values element at the parentIndex is less than values element at the child index
            // Swap the value of the values element at the parentIndex with the value of the element property at the child index
            // Set the index to be the parentIndex, and start over!
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this;
    }
    bubbleUp(){
        let index = this.values.length-1;
        const element  = this.values[index];

        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            let parent  = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index ] = parent;
            index = parentIndex 
        }
    }
 
    // Removing from  a heap  remove the root/ replace with the most recently added / adjust sink 
    
    // Swap the first value in the values property with the last one 
    // pop from the values property, so you can return the value at the end.
    // have the new root  sink down to the correct spot
        // your patent index starts at 0 (the root)
        // find the index of the left child: 2*index+2 (make sure it is not out of bounds)
        // find the index of the right child: 2*index+2 (make sure it is not out of bounds)
        // If the left or right child is greater than the element  swap if both left and right children are larger swap with the largest child;
        // the child index you swapped to now becomes the new parent index
        // keep looping and swapping until find neither child is larger than the element 
        // return the old root;

    remove(){
        let parent  = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return parent;
    }
    sinkDown(){
        let index = 0;
        const length = this.values.length
        let element = this.values[index]
        while(true){
            let leftidx = 2* index +1;
            let rightidx = 2* index +2;
            let leftChild, rightChild;
            let swap = null;

            if(leftidx < length) {
                leftChild = this.values[leftidx]
                if(leftChild > element){
                    swap = leftidx;
                }
            }
            if(rightidx < length) {
                rightChild = this.values[rightidx]
                if(
                    (swap === null && rightChild >element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightidx;
                }
            }
            if(swap === null) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element;
            index = swap;
        }
    }

}

let mbheap = new MaxBinaryHeap();

console.log(mbheap.insert(10));
console.log(mbheap.insert(12));
console.log(mbheap.insert(14));
console.log(mbheap.insert(15));
console.log(mbheap.insert(45));
console.log(mbheap.insert(50));

console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
console.log(mbheap.remove());
// console.log(mbheap.values);
