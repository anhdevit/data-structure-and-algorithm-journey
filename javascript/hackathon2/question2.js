/*
Question 2
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Solve it with O(n) time complexity
*/

function question2(arr) {
    const newArr = []
    let maxProduct = arr[0]
    for(let i = 1; i < arr.length; i++) {
        maxProduct *= arr[i]
    }
    for(let i = 0; i < arr.length; i++) {
        newArr[i] = maxProduct/arr[i]
    }
    return newArr
}

const testcase1 = question2([1,2,3,4])
console.log("testcase1", testcase1)

// const testcase2 = question2()
// console.log("testcase1", testcase2)
