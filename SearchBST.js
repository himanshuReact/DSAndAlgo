
// https://leetcode.com/problems/search-in-a-binary-search-tree/

var searchBST = function(root, val) {
    if (!root) {
        return null ;
    } else if (val === root.val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
