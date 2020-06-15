var removeElement = function(nums, val) {
    let i = 0
    for(let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[j] = nums[j+1]
            i++
        }
    }
    return i
};