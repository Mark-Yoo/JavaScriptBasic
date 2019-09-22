# React day 7
## pure-component와 React.memo
- 퓨어 컴포넌트도 리렌더링이 되지 않는다.
- PureComponent = shouldComponentUpdate 기능을 자동으로 지원하도록 구현된 컴포넌트
- purecomponent의 단점은 참조 관계가 있는 복잡한 구조가 형성되면 상태의 변화를  판단하기 힘들다는 것이다.
- 모든 컴포넌트에서 array에 push를 하는 것은 react가 상태 변화를 감지 하기 힘들기 때문에 새로운 배열을 만들어주는 것이 좋다.
- 자료구조가 복잡한 state는 상태 감지에 악영향을 줄 수 있으므로 가능하면 단순한 구조의 자료구조를 만드는 것이 좋다.
- 컴포넌트를 잘게 쪼갤수록 (props를 잘게 쪼갤수록) PureComponent를 적용하는 것이 쉬워진다.

## Hooks에서는 memo를 사용
- Hooks에서는 component를 memo로 감싸주면 PureComponent처럼 사용할 수 있다.
- 자식들이 모두 PureComponent와 Memo이면 부모에도 PureComponent와 Memo를 적용할 수 있다.

- *** 성능 최적화에 큰 영향을 주므로 꼭 사용하도록 하자. ***

- onInputRef를 사용하여 함수형으로 ref를 작성하면 이전 state를 가져올 수 있으며 함수 형태로 동작을 세부 조정 할 수 있다는 장점이 있다. 하지만 간단한 방법으로는 createRef를 사용하는 방법도 있다.
- render() 안에서 this.setState를 실행하는 실수를 범하지 말라. (결국 무한반복)
- 부모로 받은 props를 state에 바로 적용시킬 수 있다.
- props는 자식이 아닌 부모가 바꿔야 한다.
- props를 직접 바꾸는 것이 아닌 props를 state로 만든 다음 그 state를 바꾼다. 이렇게 하지 않을 경우, 부모가 뜻하지 않게 바뀌는 경우가 생기기 때문에 주의해야 한다.

## context
- try에 자식이 하나 있다고 가정할 경우 컴포넌트에서 try의 자식에게 props를 넘겨주기 위해서는 순서대로 컴포넌트에서 try로 try에서 try의 자식으로 넘기는 번거로운 과정을 거쳐야 한다는 단점이 있다.
이러한 과정을 생략하고 원하는 곳으로 바로 전달해주기 위해 사용하는 것이 context이다.

## React 조건문
- react에서는 for와 if를 사용할 수 없다.