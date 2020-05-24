// Given a binary array, find the maximum number of consecutive 1s in this array.

/*
Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
The maximum number of consecutive 1s is 3.

Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/ 



var findMaxConsecutiveOnes = function(nums) {
    console.log("findMaxConsecutiveOnes -> nums", nums)
    let max = 0
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++
            console.log('Test', count);
            if (count > max) {
                max = count
            }
            console.log('max', count);
        
        } else {
            count = 0
        }
    }
    console.log("findMaxConsecutiveOnes -> max", max)
    return max
};

// Time complexity is 0(n)
findMaxConsecutiveOnes([1,1,0,1]);