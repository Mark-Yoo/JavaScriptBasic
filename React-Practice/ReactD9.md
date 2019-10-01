# React Day 9
## setTimeout 여러번 사용하기
- let을 사용하면 비동기 함수의 클로저 문제를 해결할 수 있다.
- componentWillMount, componentWillReceieveProps, componentWillUpdate 셋은 없어질 예정이므로 사용하지 말도록 하자. (보통 렌더링 이전에 동작하는 코드들)
- componentWillUnmount는 부모 컴포넌트가 자식을 없앴다고 생각하면 된다.
- hooks로 바꿀 때에 state를 쓰지 않는 함수는 꼭 분리를 해놓도록 하자.
- hooks의 useEffect와 class의 componentDidMount, componentDidUpdate, componentWillUnmount는 완전히 똑같이 만드는 것이 어렵다.
- useMemo, useEffect, useCallback은 두번째 인자가 있고, 이 두 번째 인자로 들어오는 배열이 비어있다면 한 번만 실행된다.
- useMemo: 복잡한 함수 결과값을 기억
- useRef: 일반 값을 기억
- useCallback 안에서 state를 사용할 때에는 주의를 하지 않으면 계속 처음 값만을 기억하게 된다. 이러한 문제를 방지하기 위해서 useCallback의 두번째 인자로 바뀌는 state를 넣어주어야 한다.