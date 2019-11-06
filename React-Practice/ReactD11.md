# ReactD11.md
- 리액트에서 부모 컴포넌트의 프로퍼티를 전달받기 위해서는 props를 이용하면 되는데, 이 prop를 사용하는 방법은 props 혹은 props.children을 이용하는 방법이다.

- 기본적으로 props 값을 설정하기 위해서는 해당하는 컴포넌트 명과 함께 defaultProps 사용하여 key와 value를 입력하면 된다.
```
MyComponent.defaultProps = {
  name: '기본값',
};
```

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

- props 값은 비구조화 할당 문법을 사용할 수도 있다.
(비구조화 할당/구조 분해 문법은 객체에서 값을 추출하는 방법을 일컫는다.)

```
const MyComponent = props => {
  const {name, children} = props;
  return (
    <Fragment>
      <div>{name}</div>
      <div>{children}</div>
    </Fragment>
  );
}

혹은

const MyComponent = ({name, children}) => {
  return (...)
}
```

- 타입스크립트처럼 좀 더 받는 데이터의 타입을 엄격하게 정하기 위해서는 PropType을 지정해주면 된다. (사용하기에 앞서 먼저 import를 해와야한다.)
- 뒤에 isRequired를 붙이는 것으로 필수적으로 여기에 값이 들어가지 않으면 에러를 발생시키는 코드를 작성하는 것도 가능하다.

```
import PropTypes from 'prop-types';

MyComponent.propTypes = {
  name: PropTypes.string,
  requiredString: PropTypes.string.isRequired,
};

```