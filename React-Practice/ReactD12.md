# ReactD12
- class형 컴포넌트에서 state(상태) 초기화하기
```
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      numberTwo: 0,
      ...
    }
  }
}
```
- class형 컴포넌트의 state 초기화를 constructor 밖에서 사용하는 방법
```
class Counter extends Component {
  state = {
    number: 0,
    numberTwo: 0,
    ...
  }
}
```

- 배열 비구조화 할당
  - 배열 역시 비구조화 할당이 가능하다.
```
const arrays = [1, 2];
const [one, two] = arrays;
```

- Hooks의 사용
  - useState 사용하기
```
import {useState} from 'react';

const Say = () => {
  const [message, setMessage] = setState('');

  const onClickEnter = () => setMessage('안녕');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>
    </div>
  )
}

```