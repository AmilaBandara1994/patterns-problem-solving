/*
    DoublyLinkedList 
    comparison with singly Linked List 

    consume more memory 
    and more flexibility 


    //shifting 
    removing a node from the beginning of the Doubly Linked List

    Big O of Doubly liked lists 

    insertion O(1)
    Removal O(1)
    Searching O(n) Technicaly searching is O(n/2) but that is still O(n)
    Access O(n)



*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail =null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length == 0) return undefined;
        let tail = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return tail;
    }

    // removing from the beginning 
    shift(){
        if(this.length == 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // Adding new node at the beginning;
    unshift(val){
        let newNode = new Node(val);
        let oldHead = this.head;
        if(this.head === null){
            this.head = newNode;
            this.tail =  newNode;
        }else{
            newNode.next = this.head;
            this.head.prev =newNode
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length /2){
            count= 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        }else{
            count =this.length -1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--
            }
        }
        return current;
    }

    // Replacing the value of a node in a Doubly Linked list;
    set(index, val){
        let previousval = get(index-1);
        if(previousval != null){
            previousval.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) this.unshift(val);
        if(index === this.length) this.push(val);

        let beforeNode = get(index-1);
        let newNode =new Node(val)
        let afterNode=  beforeNode.next;

        beforeNode.next=newNode;
        newNode.prev = beforeNode; 
        newNode.next =afterNode;
        afterNode.prev = newNode
        this.length++;
    
        return true;
    }

    // Remove Pseudocode
    // If the index is less than Zero or greater than or equal to the length return undefined;
    // if the index is 0, shift();
    // if the index is the same as the length-1, pop();
    // use the get method  to retrieve the item to be removed
    // update the next and prev properties to remove the found node from the list
    // set next and prev to null on the found node 
    // decrement the length
    // return the removed node.

    remove(index){
        if(index < 0 || index >= this.length ) return undefined;
        if(index === 0 )return this.shift();
        if(index === this.length-1 )return this.pop();
        let removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next = null;
        removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}


let list = new DoublyLinkedList();
console.log(list.push("First"));
console.log(list.push("Second"));
console.log(list.push("Third"));
console.log(list.unshift("forth"));



console.log(list.get(4));
// console.log(list.pop());
