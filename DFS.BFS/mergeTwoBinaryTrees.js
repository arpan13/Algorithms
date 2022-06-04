//*
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) {
        return null;
    }

    let val = 0;
    val += root1 ? root1.val : 0;
    val += root2 ? root2.val : 0;

    let root = new TreeNode(val);
    root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
    root.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);

    return root;
};



//*Solution 2 (in-place)
var mergeTrees = function (root1, root2) {
    if (!root1 && !root2) {
        return null;
    }
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }

    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);

    return root1;
};