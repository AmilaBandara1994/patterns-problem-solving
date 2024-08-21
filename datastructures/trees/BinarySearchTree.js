/*
    Binary Search Tree

    * Every Parent node has at most two children
    * Every node to the left of a parent node is always less than  the parent
    * Every node to the right of the parent node is always greater than the parent
    * 
    * 
     
    Big O BST

    Insertion O(log n)
    Searching O(log n)

*/


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // Inserting pseudocode
    // create a new node
    // Starting at the root
        // check if there is a root, if not - the root now becomes the new node!
        // if There is a root, check if the value of the new node is greater than or less than the value of the root
        // if it is greater
            // check to see if there is a node to the right
                //if there is, move to that node and repeat these steps
                // if there is not, add that node as the right property
        // if it is lesser
            // check to see if there is a node to the left 
                // if there is, move to that node and repeat these steps
                // if there is not, add that node as the left property

    insert(val){
        var newNode =new Node(val);
        let current = this.root;

        if(this.root === null){
            this.root =  newNode;
            return this;
        }

        while(true){
            if(val === current.value) return undefined;
            if( val < current.value){
                if(current.left === null){
                    current.left=  newNode;
                    return this;
                }
                current = current.left
                
            }else if(val > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right                
            }
        }
    }


    // Finding a Node in a BST
    // Steps - Iteratively or Recursively

    // Starting at the root
        // Check if there is a root, if not - we're done searching!
        // If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done.
        //  If not, check to see if the value is greater than or less than the  value of the root.
        // If it is greater
            // Check to see if there is a node to the right
                // If there is, move to that node and repeat these steps
                // If there is not, We're done searching.
        // If it is less
            // Check to see if there is a node to the left 
                // if there is, move that node and repeat these steps 
                // if there is not, we're done searching.
    find(val){
        if(this.root === null) return false;
        let current  = this.root;
        found= false;
        while(current && !found){
            if(val < current.value){
                current =  current.left
            } else if(val > current.value){
                current =  current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }

    contains(val){
        if(this.root === null) return false;
        let current  = this.root;
        found= false;
        while(current && !found){
            if(val < current.value){
                current =  current.left
            } else if(val > current.value){
                current =  current.right;
            }else{
                return true;
            }
        }
        return false;
    }

    // BFS - Breadth first search

    // Create a queue (this can be an array) and a variable to store the values of nodes visited; 
    // place the root node in the queue
    // Loop as long as there is anything in the queue
    //     Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    //     if There is a left Property on the node dequeued add it to the queue
    //     if there is a right property on the node dequeued - and it to the queue

    breadthFirstSearch(){
        var node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node =  queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    // DFS - Depth first Search PreOrder

    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write  a helper function which accepts a node 
        // push the value of the node to the variable that stores the values
        // If the node has a left property, call the helper function with the left property on the node
        // if the node  has right property, call the helper function with the right property on the node
    // Invoke the helper function with the current variable
    // return the array of values;

    depthFirstSearch(){
        let data = [];
        function traverse(node){
            data.push(node.value)
            //base case;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            // recursive case            
        }
        traverse(this.root);

        return data;
    }

    // DFS Post Order
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
        //if the node has left property, call the helper function with the left property on the node
        // if the node has a right property, call the helper function with right property on the node
        // push the value of the node to the  variable that stores the values 
        // Invoke the helper function with the current variable
    // return the array of values
    depthFirstSearchPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }


    // DFS inOrder
    // create a variable to store the values of nodes visited
    // store the root of the BST in a variable called current 
    // Write a helper function which accepts a node
        // If the node has a left property, call the helper function with the left property on the node
        // push the value of the node to the variable that stores the values
        // If the node has a right property, call the helper function with the right property on the node 
    // Invoke the helper function with the current variable;
    dfsInOrder(){
        let data=[];
        function traverse(node){
            node.left && traverse(node.left);
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;
    }





}

let btree = new BinarySearchTree();

console.log(btree.insert(10));
console.log(btree.insert(15));
console.log(btree.insert(20));
console.log(btree.insert(6));
console.log(btree.insert(8));
console.log(btree.insert(3));

console.log(btree.depthFirstSearch());
console.log(btree.depthFirstSearchPostOrder());
console.log(btree.dfsInOrder());

