# React Day 08
## 반응속도체크 hooks로 전환하기
- 리액트 라이프사이클
  - useRef는 DOM 이외에서 사용될 때에 값은 바뀌지만 화면에 영향을 주고싶지 않을 때에 사용된다.
## React 라이프사이클
```
- componentDidMount: 컴포넌트가 첫 렌더링된 후를 설정
- componentWillUnmount: 컴포넌트가 제거되기 직전을 설정
- componentDidUpdate: 컴포넌트가 리렌더링된 후를 설정
```
- 위의 세가지를 컴포넌트의 라이프사이클이라고 부른다.

- class의 경우 constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 render) -> componentDidUpdate -> 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸

- componentDidMount : 이 곳에 비동기 요청을 많이 함.
- conponentWillUnmount : 비동기 정리를 많이 함.

- componentDidMount에서 요청한 비동기 요청이 쌓여있으면 문제가 생기므로 componentWillUnmount에서 clearInterval을 통해서 완료되지 않은 비동기 요청을 제거해줘야 한다.
- 제거가 되지 않으면 메모리 누수가 발생할 수 있다.