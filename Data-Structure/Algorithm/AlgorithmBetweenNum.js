// 단일 배열의 중앙값 구하기

let exArray1 = [1, 2, 3, 4, 5, 6];
let exArray2 = [7, 8, 9, 10, 11, 12];

function medianOfArray(array) {
  var length = array.length;

  // 배열의 길이가 홀수일 경우
  if(length % 2 === 1) {
    return array[Math.floor(length / 2)];
  // 배열의 길이가 짝수일 경우
  } else {
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

// 위의 방법을 응용하여 두 개의 다른 배열 사이에 존재하는 중앙값 찾기
// 중앙값을 찾기 위해 두 개의 배열을 반복 접근하면서 어떤 쪽이 더 큰지 비교할 수 있다. 두 배열이 동일한 크기일 경우, 전체 크기는 짝수가 된다.(홀수와 홀수를 더했을 때 짝수, 짝수와 짝수를 더해도 짝수)
// 두 배열은 모두 작은 수부터 큰 수까지 정렬되어 있으므로 재귀적으로 호출이 가능하다. 함수를 재귀적으로 호출할 때마다 어떤 중앙값이 더 큰지 계속 확인하게 된다.
// 두 번째 배열의 중앙값이 더 크다면 첫 번째 배열을 반으로 나눈 다음 큰 쪽이 다음 함수 호출 시 첫 번째 매개변수 배열이 된다. 마지막으로 배열의 크기가 짝수인지 홀수인지 확인하기 위해서 배열의 크기(매개변수 pos)가 필요하다.

function medianOfTwoSortedArray(arr1, arr2, pos) {
  if (pos <= 0) {
    return -1;
  }
  if (pos === 1) {
    return (arr1[0] + arr2[0]) / 2;
  }
  if (pos === 2) {
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
  }

  let median1 = medianOfArray(arr1);
  let median2 = medianOfArray(arr2);

  if (median1 === median2) {
    return median1;
  }

  let evenOffset = pos % 2 === 0 ? 1 : 0;
  let offsetMinus = Math.floor(pos / 2) - evenOffset;
  let offsetPlus = Math.floor(pos / 2) + evenOffset;

  if (median1 < median2) {
    return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(offsetMinus), offsetPlus);
  } else {
    return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(offsetMinus), offsetPlus);
  }
}

console.log(medianOfTwoSortedArray(exArray1, exArray2, 6));