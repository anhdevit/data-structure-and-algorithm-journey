var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
          
          //sort in desc order
          stones.sort((a,b) => b-a);
          console.log("lastStoneWeight -> stones", stones)
          
          let stoneY = stones[0];
          let stoneX = stones[1];
          
          stones.splice(0, 2);
          
          if(stoneX != stoneY) {
            stones.push(stoneY - stoneX);  
          } 
      }
      
      return stones;
  };

  const testcase1 = lastStoneWeight([2,7,4,1,8,1])
  console.log("testcase1", testcase1)
  