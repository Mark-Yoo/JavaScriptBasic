# React D16
## 리액트의 라이프사이클 메서드
- 모든 리액트 컴포넌트에는 라이프사이클이 존재함
- 컴포넌트의 수명은 페이지에 렌더링 되기 전인 준비과정에서 시작되서 페이지에서 사라질 때 끝남.
- Will, Did, 후에 일어날 것 3가지로 분류하고 총 9개가 존재함.
```
1. 마운트 - DOM이 생성되고 웹 브라우저 상에 나타나는 것을 마운트라고 함
마운트 시 호출하는 메서드
constructor -> getDerivedStateFromProps -> render -> componentDidMount
2. 업데이트 - props가 바뀔 때, state가 바뀔 때, 부모 컴포넌트가 리렌더링될 때, this.forceUpdate로 강제 렌더링 할 때

- 업데이트를 발생시키는 요인
  1. props 변경 2. state 변경 3. 부모 컴포넌트 리렌더링 -> getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshopBeforeUpdate -> componentDidUpdate
3. 언마운트 -컴포넌트를 DOM에서 제거하는 것
```

