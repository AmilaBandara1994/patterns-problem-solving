/*
    Stack

    A LIFO data structure (last in first out )

    The last element added to the stack will be the first element removed form the stack 
    ( collection of books,  stack of plates)

    Use cases 
     Undo/Redo
     Managing function invocations
     Routing (The history object ) is treated like a stack


     Array Implementation  
     Linked List Implementation 


     Big O of stack

     insertion O(1)
     Removal O(1)
     Searching O(N)
     Access O(N)
*/

class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }


    // Pushing Pseudocode
    // The function should accept value;\
    // Create a new Node with that value ;
    // If there are no nodes in the stack, set the first and last property to be the newly created node;
    // if There is at least one node create a variable that stores teh current first property on the stack
    // Reset the first property to be the newly created node
    // set the next property on the node  to be the previously created variable 
    // Increment the size of the stack by 1


    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            // temp.next = newNode;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;

    }

    // pop pseudocode
    //  If there are no nodes in the stack, return null
    // Create a temporary variable to store the first property on the stack 
    // If there is only 1 node, set the first and last property to be null
    // If there is more than one node, set the first property to be the next property on the current first
    // Decrement the size by 1 
    // Return the value of the node removed
    pop(){
        if(!this.first) return null;
        var temp  =  this.first;
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.val;
    }



}

let stack  =  new Stack();

console.log( stack.push("First"));
console.log( stack.push("Second"));
console.log( stack.push("Third"));
console.log( stack.push("Forth"));
console.log( stack.push("Fifth"));

console.log(stack);
 