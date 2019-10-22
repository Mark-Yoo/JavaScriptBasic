# Data Structure
- 소수는 암호화와 해싱(hashing)의 기반이 된다.
  - 따라서 소인수분해 알고리즘 역시 중요하다.
  - 2로 나눈 나머지가 0이 될 때까지 while문을 돌리고 만약 조건이 맞지 않는다면 다음 for문으로 넘어간다. 이 for문 안에서는 위에서 짝수를 넘어왔으므로 홀수인 3부터 2씩 건너 뛰어 계산하는 것이 가능하다. 이 조건 역시 만족하지 못할 경우 마지막 조건으로 자기 자신으로만 나누어지는 소수를 걸러내기 위해 숫자가 2보다 클 때 자기 자신을 출력하는 조건을 넣어준다.
  ```
  function primeNum(n) {
    while (n%2 == 0) {
      console.log(2);
      n = n/2;
    }

    for (let i = 3; i*i <= n; i = i+2) {
      while (n%i == 0) {
        console.log(i);
        n = n/i;
      }

      if (n > 2) {
        console.log(n);
      }
    }
  }
  ```