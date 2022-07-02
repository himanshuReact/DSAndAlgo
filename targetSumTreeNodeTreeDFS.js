
// https://leetcode.com/problems/path-sum/submissions/

//  Path Sum

// Share
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.



var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
    if (!curr) {
        return false;
    }

    currentSum += curr.val;
    
    if (curr.left === null && curr.right === null) {
        return currentSum === targetSum;
    }
    
    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
}
