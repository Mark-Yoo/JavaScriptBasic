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
