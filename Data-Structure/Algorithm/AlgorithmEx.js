let arr = [1, 2, 3, 4, 5];
let weight = 9


// 배열로 전달되는 arr와 구하고자하는 weight를 구하기 위한 가장 간단한 방법은 이중for문을 이용하는 것이다. 이는 새로운 메모리의 생성이 필요하지 않으나 높은 시간 복잡도를 갖게 된다는 단점이 있다. 시간복잡도 O(n^2)


function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) 
      {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

console.log(findSum(arr, weight));

// 위의 방식은 데이터의 크기가 커질수록 시간복잡로 인해 기하급수적으로 소요되는 시간이 증가하게 된다. 그러므로 이중for문을 사용하는 방식이 아닌 다른 방식을 찾아보도록 하자.

// 다른 방법 중 하나는 이미 방문한 항목들을 저장하기 위해서 자바스크립트 객체를 해시 테이블로 사용하는 방법이다. 시간복잡도 O(n)

function findSumBetter(arr, weight) {
  let hashtable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let difference = weight - currentElement;
    console.log(hashtable);

    if (hashtable[currentElement] !== undefined) {
      return [arr[i], hashtable[weight - currentElement]];
    } else {
      hashtable[difference] = i;
    }
  }
  return -1;
}

console.log(findSumBetter(arr, weight));