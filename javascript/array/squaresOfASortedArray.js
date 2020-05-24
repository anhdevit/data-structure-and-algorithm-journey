// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
/*
Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

var swap = function(arr, firstI, secondI) {
    var temp = arr[firstI];
    arr[firstI] = arr[secondI]
    arr[secondI] = temp
}

var sortedSquares = function(A) {
    for(let i = 0; i < A.length; i++) {
        A[i]*= A[i]
    } 
    //Bubble sort
    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < A.length - i; j++) {
            if (A[j] > A[j+1]) {
                swap(A, j, j+1)
            }
        }
    }

    return A
};

sortedSquares([[-4,-1,0,3,10]])