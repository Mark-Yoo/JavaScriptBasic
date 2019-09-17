var stones = [2, 7, 4, 1, 8, 1]

var lastStoneWeight = function(stones) {
  while(stones.length === 1) {
      stones.sort(function(a, b) {
      return b - a;
      });
      if(stones[0] - stones[1] > 0 && stones.length > 1) {
          stones.push(stones[0] - stones[1]);
          stones.shift();
          stones.shift();
      } else if(stones[0] - stones[1] === 0) {
          stones.push(0);
          stones.shift();
          stones.shift();
      } else {
          console.log(stones);
      }
  }
};