/*
    A Data structure that contain a head, tail and length property

    Linked list consist of nodes, and each node has a value and a pointer to anther node or null


    lists 
    Do not have Indexes
    Connected via nodes with a next pointer 
    Random access is not allowed

    arrays 
    Indexed in order
    Insertion and deletion can be expensive 
    Can quickly be accessed at a specific index

*/

class Node{
    constructor(val){
        this.val = val
        this.next= null;
    }   
}
 
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode =  new Node(val);
        if(!this.head){
            this.head =  newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail =  current;
            current=current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0 ){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        // deleting head node adn assign the next as head

        if(!this.head) return undefined;
        let currentHead =  this.head;
        this.head  = currentHead.next;
        this.length--;
        if(this.length === 0 ){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        // adding a new node from head;
        let newNode =  new Node(val);
        if(!head){
            this.head =  newNode;
            this.tail =  newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0  || index >= index.length) return null;
        let current  =  this.head;
        let counter;
        while(counter !== index){
         current.next;
         counter++;
        }
        return current;
    }

    set(index,val){
        var foundNode =  this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var prev =get(index-1);
        var newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0  || index >= index.length) return null;
        if(index === this.length-1) return this.pop(val);
        if(index === 0) return this.shift();
        let prev = get(index -1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail =  node;
        var next;
        var  prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next  =prev;
            prev =node;
            node = next;            
        }
        return this;
    } 
}

var list =  new SinglyLinkedList();

list.push("HELLO");
list.push("my");
list.push("name");
list.push("is");
list.push("hi");

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());