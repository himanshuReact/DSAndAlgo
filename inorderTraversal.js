
// https://leetcode.com/problems/binary-tree-inorder-traversal/


let arr = []
function dfs(root){
    if(!root){
        return
    }
    dfs(root.left)
    arr.push(root.val)
    dfs(root.right)
}


var inorderTraversal = function(root) {
    dfs(root)
    return arr
};
