/*
Question 3
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
Example 1:

Input: [1,3,4,2,2]
Output: 2

Example 2:

Input: [3,1,3,4,2]
Output: 3

Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n^2).
There is only one duplicate number in the array, but it could be repeated more than once.
*/

function question3(arr) {
    // We can use Hash Map
    let objectKey = {}
    let duplicateNum = null
    for(let i = 0; i < arr.length; i++) {
        if (objectKey[arr[i]]) {
            objectKey[arr[i]] = arr[i] + 1
            duplicateNum = arr[i]
        } else {
            objectKey[arr[i]] = 1
        }
    }
    // Timecomplexcity is On
    return duplicateNum
}

const testcase1 = question3([1,3,4,2,2])
console.log("testcase1", testcase1)

const testcase2 = question3([3,1,3,4,2])
console.log("testcase1", testcase2)