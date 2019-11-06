# ReactD11.md
- 리액트에서 부모 컴포넌트의 프로퍼티를 전달받기 위해서는 props를 이용하면 되는데, 이 prop를 사용하는 방법은 props 혹은 props.children을 이용하는 방법이다.
```
1. props 이용하기

- 부모 컴포넌트

<MyComponent name="React"/>

- 자식 컴포넌트

const MyComponent = props => {
  return (
    <div>{props.name}</div>
  )
}
```
```
2. props.children 이용하기

- 부모 컴포넌트

<MyComponent>React!!</MyComponent>

- 자식 컴포넌트

const MyComponent = props => {
  return (
    <div>{props.children}</div>
  )
}
```