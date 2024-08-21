/*

    Queues

    A FIFO data structure

    use cases

    Background tasks;
    uploading resources
    printing / task processing


    Big O of Queues

    Insertion - O(1)
    Removal - O(1)
    Searching - O(N)
    Access - O(N)


    Queue are FIFO data structure, all the elements are first in first out 
    Queues are useful for processing tasks and are foundational for more complex data structures.
    Insertion and removal can be done in O(1)

 */

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size;
    }

    // enqueue pseudocode 
    // This function accepts some value
    // create a new Node  using that value passed to the function 
    // If there are no nodes in the queue, set this node to be tha first and last property of the queue
    // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
    enqueue(val){
        let newNode = new Node(val);
        if(!this.last){
            this.first = newNode;
            this.last = newNode
        }else{
             this.last.next = newNode;
             this.last = newNode
        }
        return ++this.size;

    }

    // dequeue Pseudocode
    // If there is no first property, just return null
    // Store the first property in a variable 
    // See if the first is the same as the last (Check if there is only 1 node). If so, set the first and last to be the null
    //If there is more than 1 node, set the first property to be the next property of first 
    // Decrement the size by 1
    // Return the value of the node dequeued

    dequeue(){
        if(!this.first) return null;
        var temp  = this.first;
        if(this.first === this.last){
            this.last =null
        }
        this.first = this.first.next;
        this.size--;
        return temp;
    }
}