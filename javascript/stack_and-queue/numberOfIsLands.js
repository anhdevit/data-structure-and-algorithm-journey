function numIslands(grid) {
  let count = 0;
  // Loop all Item in grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "1") {
          count++;
          color(grid, i, j);
        }
    }
  }
  return count;
}

// BFS
function color(grid, i, j) {
  // Create queue
  let q = [[i, j]];
  while (q.length) {
      // Remove item looped
    let [x, y] = q.pop();
    // console.log("color -> q.pop()", q.pop())
    grid[x][y] = 0;
        const position = [
            [x + 1, y],
            [x, y + 1],
            [x - 1, y],
            [x, y -1 ]
        ]
        // Check other node
        for (let [newX, newY] of position) {
            if (
                newX >= 0 &&
                newX < grid.length &&
                newY >= 0 &&
                newY < grid[0].length &&
                grid[newX][newY] === "1"
            ) {
                q.push([newX, newY])
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
