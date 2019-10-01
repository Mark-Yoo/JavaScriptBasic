# React Day 9
## setTimeout 여러번 사용하기
- let을 사용하면 비동기 함수의 클로저 문제를 해결할 수 있다.
- componentWillMount, componentWillReceieveProps, componentWillUpdate 셋은 없어질 예정이므로 사용하지 말도록 하자. (보통 렌더링 이전에 동작하는 코드들)
- componentWillUnmount는 부모 컴포넌트가 자식을 없앴다고 생각하면 된다.