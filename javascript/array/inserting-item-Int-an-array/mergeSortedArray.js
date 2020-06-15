var merge = function (nums1, m, nums2, n) {
    let index = m + n - 1
    console.log("merge -> index", index)
    m--
    console.log("merge -> m", m)
    n--
    console.log("merge -> n", n)
    while(m >= 0 && n >= 0) {
        console.log("merge -> nums2[n]", nums2[n])
        console.log("merge -> nums1[m]", nums1[m])
        if (nums1[m] > nums2[n]) {
            nums1[index--] = nums1[m--]
        } else {
            nums1[index--] = nums2[n--]
        }
        console.log("merge -> nums1[index--]", nums1)
    }
    while(n >= 0) {
        // console.log("merge -> nums1[index--]", nums1[index--])
        nums1[index--] = nums2[n--]
    }
    console.log("merge -> nums1", nums1)
};

const testcase1 = merge([2,0], 1, [1], 1);
