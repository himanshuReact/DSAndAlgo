
// https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/

var preorderTraversal = function(root) {
    let result = []
    
    function dfs(root){
    if(!root){
        return
    }
    
    result.push(root.val)
    dfs(root.left)
    dfs(root.right)
    }
    dfs(root);
    
    return result;
};
