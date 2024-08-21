/*
    What is  a Tree?

    A data structure that consist of nodes in a parent/child relationship

    Trees are non Linear 
    Singly linked list  sort of a special case of a tree

    There are some rules in tree 
    There must be only one root (top node)

    TREE TERMINOLOGY

    ROOT - The top node in a tree
    CHILD - A node directly connected to another node
    PARENT - The converse notion of a child
    SIBLINGS - A group of nodes with the same parent 
    LEAF - A node with no children
    EDGE - The connection between one node to another (arrow)


    Use Cases

    * HTML Dom - document object model maintain tree type relationship.
    * Network Routing
    * Abstract Syntax tree -- must check
    * Artificial Intelligence tic-tac-toe
    * folders in Operating system
    * computer file system 
    


    Tree traversal

    1 Breadth First Search - BFS 
    2 Depth first search - DFS 
    3 Breadth First PreOrder


    BFS - Breadth first search

    Create a queue (this can be an array) and a variable to store the values of nodes visited; 
    place the root node in the queue
    Loop as long as there is anything in the queue
        Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
        if There is a left Property on the node dequeued add it to the queue
        if there is a right property on the node dequeued - and it to the queue


*/

