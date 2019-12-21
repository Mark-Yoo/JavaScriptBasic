const initialBingoState = () => {
  const numbersArray = [];
  // 5 * 5의 빙고칸을 만들어야 하므로 빈 배열에 25개 객체를 넣어준다.
  for(let i=1; i<=25; i++) {
    numbersArray.push(i);
  };
  console.log(numbersArray);
  // 위에서 1부터 25까지의 숫자가 순서대로 배열에 들어갔지만 빙고는 각 칸마다 랜덤한 숫자를 가져야 하므로 새로운 랜덤 숫자 배열을 담을 빈 배열을 만든다.
  const randomNumbersArray = [];
  // 25개의 칸을 5칸씩 나눠 5개의 새로운 배열을 만들 것이므로 bingoRow라는 배열을 만들어 for문을 한 번 돌 때마다 초기화 시켜준다.
  for(let i=1; i<=5; i++) {
    const bingoRow = [];
    for(let j=1; j<=5; j++) {
      // 랜덤한 숫자를 배열에 하나씩 전달해야 하므로 Math.random에 25를 곱하여 나온 숫자로부터 한 개의 숫자를 떼어낸다.(이 과정에서 numbersArray 원본 배열은 변형된다.) 이 상태에서 randomNumber에 바로 할당할 경우, 배열에 담긴 숫자가 하나씩 randomNumber 배열에 할당되므로 인덱스[0]을 명시해서 배열이 아닌 숫자 원시값만이 할당되도록 바꿔준다.
      const randomNumber = numbersArray.splice(Math.ceil(Math.random() * 25, 1))[0];
      bingoRow.push(randomNumber);
    }
    // 두 번째 for문이 끝나고나서 만들어진 하나의 bingoRow를 randomNumbersArray 배열에 push 해서 하나의 row를 완성한다. (이를 5번 반복한다.)
    randomNumbersArray.push(bingoRow);
  }
  console.log(randomNumbersArray);
  return randomNumbersArray;
}

initialBingoState();