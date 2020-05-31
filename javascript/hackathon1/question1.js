/*
Question 1
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

function matrixSpiralOrder(matrix) {
  let maxtrixSpiral = [...matrix.shift()];
  let i = 1
  let isRight = true
  console.log("matrixSpiralOrder -> matrix[i]", matrix[i].length)

  while(matrix[i].length > 0) {
    if (isRight) {
        maxtrixSpiral.push(matrix[i].pop())
    } else {
        maxtrixSpiral.push(matrix[i].shift())
    }
    if (i <= matrix.length - 2 && i === matrix.length - 2) {
        if (i === 1) {
            maxtrixSpiral = [...maxtrixSpiral, ...matrix.pop().reverse()]
        } else {
            i--
        }
        isRight = true
    } else if (i >= 1 && i < matrix.length - 2) {
        i++
        isRight = false
    }
  }
  return maxtrixSpiral;
}

const testcase1 = matrixSpiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log("testcase1", testcase1);

const testcase2 = matrixSpiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
console.log("testcase1", testcase2);


