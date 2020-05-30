// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/*
Input:
11110
11010
11000
00000

Output: 1
*/

// Apply with BFS
// function numIslands(grid) {
//   let count = 0;
//   // Loop all Item in grid
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] === "1") {
//           count++;
//           color(grid, i, j);
//         }
//     }
//   }
//   return count;
// }

// // BFS
// function color(grid, i, j) {
//   // Create queue
//   let q = [[i, j]];
//   while (q.length) {
//       // Remove item looped
//     let [x, y] = q.pop();
//     // console.log("color -> q.pop()", q.pop())
//     grid[x][y] = 0;
//         const position = [
//             [x + 1, y],
//             [x, y + 1],
//             [x - 1, y],
//             [x, y -1 ]
//         ]
//         // Check other node
//         for (let [newX, newY] of position) {
//             if (
//                 newX >= 0 &&
//                 newX < grid.length &&
//                 newY >= 0 &&
//                 newY < grid[0].length &&
//                 grid[newX][newY] === "1"
//             ) {
//                 q.push([newX, newY])
//             }
//         }
//   }
// }

const WATER = "0";
const LAND = "1";

function numIslands(grid) {
  let num = 0;
  if (!grid) return num;

  for (let iRow = 0; iRow < grid.length; iRow++) {
    for (let iCol = 0; iCol < grid[0].length; iCol++) {
      if (grid[iRow][iCol] === WATER) continue;
      num++
      visitIsland(grid, iRow, iCol);
    }
  }
  return num;
}

function visitIsland(grid, iRowInit, iColInit) {
  const queue = [[iRowInit, iColInit]]
  grid[iRowInit][iColInit] = WATER
  while (queue.length) {
    const queueLength = queue.length;
    for (let i = 0;i < queueLength; i++) {
      const [iRow, iCol] = queue.shift();
      if (iRow - 1 >= 0 && grid[iRow - 1][iCol] === LAND) {
        grid[iRow - 1][iCol] = WATER;
        queue.push(iRow - 1, iCol)
      }
      if (iCol + 1 < grid[0].length && grid[iRow][iCol + 1] === LAND) {
        grid[iRow][iCol + 1] = WATER;
        queue.push([iRow, iCol + 1]);
      }
      
      if (iRow + 1 < grid.length && grid[iRow + 1][iCol] === LAND) {
        grid[iRow + 1][iCol] = WATER;
        queue.push([iRow + 1, iCol]);
      }
      
      if (iCol - 1 >= 0 && grid[iRow][iCol - 1] === LAND) {
        grid[iRow][iCol - 1] = WATER;
        queue.push([iRow, iCol - 1]);
      }
    }
  }
}

const testCase1 = numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "1", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "1", "1"],
]);

const testCase2 = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]);
console.log("testCase1", testCase1);
console.log("testCase1", testCase2);
