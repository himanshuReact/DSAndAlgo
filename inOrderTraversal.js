/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let arr;
var inorderTraversal = function(root) {
   
    arr =[]
    arr =inorder(root)

    return arr   
};


const inorder =(root)=>{
    if(root!==null){
        
        inorder(root.left)   
        console.log("hello",root.val )
        arr.push(root.val)
        inorder(root.right)
    }
    return arr 
}
