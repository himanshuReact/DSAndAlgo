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
 * @return {number}
 */
// https://leetcode.com/problems/count-complete-tree-nodes/

var countNodes = function(root) {
    let c =0
    const count= (root)=>{
        if(root !== null){
            count(root.left)
            count(root.right)
            c++ 
        }
        return c
    }
    
   let res =count(root) 
   return res
};
