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