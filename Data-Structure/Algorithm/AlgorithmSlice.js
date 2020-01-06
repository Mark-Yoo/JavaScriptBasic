// .slice를 사용하지 않고 일반 코드로 구현해보기
// 배열의 모든 항목에 모두 접근해야 하므로 시간 복잡도는 O(n). 또한 배열을 복사할 때에도 n개의 항목을 보관해야 하므로 공간 복잡도 역시 O(n)이다.

function arraySlice(array, beginIndex, endIndex) {
  if (!beginIndex && !endIndex) {
    return array;
  }

  endIndex = array.length;

  let partyArray = [];

  for (let i = beginIndex; i < endIndex; i++) {
    partyArray.push(array[i]);
  }

  return partyArray;
}

console.log(arraySlice([1, 2, 3, 4], 1, 2));
console.log(arraySlice([1, 2, 3, 4], 2, 4));
