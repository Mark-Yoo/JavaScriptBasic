# React day 10
- react의 render() 함수 안에 있는 여러 개의 요소가 하나의 부모 요소로 감싸져 있지 않을 경우, 오류가 생긴다. 이는 Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어져야 한다는 규칙이 있기 때문임.
```
<div>대신 <Fragment>를 사용할 수도 있다. <Fragment>는 <>로도 사용할 수 있다. (리액트 v16 이상)
```

- 리액트의 스트링 인터폴레이션
```
const name = 'react';

{name}
```

- 3항 연산자 형태로 만드는 것도 가능
```
const name = 'react';

<>
  {name === 'react' ? (<h1>리액트입니다</h1>) : (<h1>리액트가 아닙니다.</h1>)}
<>
```

- 리액트의 컴포넌트에서는 함수에서 undefined를 반환하는 상황을 만들면 에러를 발생시킨다. 만약 불가피하게 undefined를 할당해야 할 상황이라면 OR(||)를 사용해서 undefined일 경우 보여줄 값을 미리 정해주면 된다.
```
const name = undefined;

return name || '값이 undefind 입니다.'
```

- 예외로 jsx 내부에서 undefined를 렌더링하는 것은 괜찮다.

```
const name = undefined;

return <div>{name}</div>
```

- 리액트에서 DOM요소나 jsx내부에서 style을 사용할 경우 일반적인 css문법인 케밥케이스 대신 카멜케이스를  사용한다.

- class 대신 className을 사용한다. class를 사용하면 jsx 요소들의 class와 일반 class에서 구별이 어려우므로 이러한 방법을 사용한다.