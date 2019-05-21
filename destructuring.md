# destructuring
- 구조화된 배열 또는 객체를 비구조화하여 개별적인 변수에 할당하는 것. 배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용
# 객체 디스크럭처링(Object destructuring)
- ES5에서 객체의 각 프로퍼티를 객체로부터 디스트럭처링하여 변수에 할당하기 위해서는 프로퍼티 이름(키)를 사용해야 함
```
let obj = { firstName: 'first', lastName: 'last' };

let firstName = obj.firstName;
let lastName = obj.lastName;

console.log(firstName, lastName);
```

ES6의 객체 디스크럭처링은 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당. 이때 할당 기준은 프로퍼티 이름(키)이다.
```
const obj = {firstName: 'first', lastName: 'Lee'};

const { firstName, lastName } = obj;

console.log(firstName, lastName);
```
객체 디스트럭쳐링을 위해서는 할당 연산자 왼쪽에 객체 형태의 변수 리스트가 필요하다.

