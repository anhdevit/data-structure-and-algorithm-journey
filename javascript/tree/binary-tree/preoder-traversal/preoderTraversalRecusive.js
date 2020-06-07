/**
 * 
 * @param {TreeNode} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right
 */

function TreeNode(val, left, right) {
    this.val = val===undefined ? 0 : val
    this.left = left===undefined ? null : left
    this.right = right===undefined ? null : right
}

/**
 * 
 * @param {TreeNode} root 
 * @param {number[]} arr 
 */
function prorderTraversal(root, arr = []) {
    if (root) {
        arr.push(root.val)
        prorderTraversal(root.left, arr)
        prorderTraversal(root.right, arr)
    }
    return arr
}

// [1, null, 2, 3] => TreeNode
const treeExample = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null)))
const testcase1 = prorderTraversal(treeExample)
console.log("testcase2", testcase1)

// [5, 1, 4, null, null, 3, 6] => TreeNode
const treeExample2 = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3, null, null), new TreeNode(6, null, null)))
// Expect is [1,2,3]
const testcase2 = prorderTraversal(treeExample2)
console.log("testcase2", testcase2)
// console.log => [1,2,3]