# 리액트로 일정관리 만들어보기
- onSubmit 이벤트는 enter키로도 이벤트를 발생시키므로 form과 submit을 사용하는 것이 간결하고 효율적인 코드를 작성하는데에 도움이 된다. 하지만 onSubmit은 기본적으로 브라우저를 새로고침 하기 때문에 preventDefault를 사용하여 새로고침을 하지 않도록 만들어주어야 한다.

## 느려지는 원인 & 성능 체크
1. 자신이 전달받은 props가 변경될 때
2. 자신의 state가 바뀔 때
3. 부모 컴포넌트가 리렌더링될 때
4. forceUpdate 함수가 실행될 때

위의 상황에서 리렌더링이 일어남.
ver.1에서 만들어진 todolist에 많은 양의 데이터가 할당될 때에 성능이 저하되는 이유는 한가지 항목이 변경되면서 바뀌지 않아도 되는 항목들까지 리렌더링 되는 과정에서 생기는 문제로 볼 수 있다. 이를 위해서 성능 최적화를 위한 작업을 해주어야 한다.

- Performance 녹화 버튼 누르고 실행이 끝난 다음 정확한 수치로 확인 할 수 있다.

## React.memo를 활용한 성능 최적화
- shouldComponentUpdate 라이프 사이클을 사용 (함수형에서는 사용 불가)
- 이를 위한 React.memo 함수
- 컴포넌트의 props가 바뀌지 않았다면 리렌더링 하지 않도록 설정
```
export default React.memo(component);
```
위는 1차적인 방법으로, 최적화가 단순히 끝나지 않음.
onRemove, onToggle도 최신 todos의 상태를 참조하고 있으므로 todos 배열이 변경될 때마다 리렌더링 됨.
- 이를 위한 useState 함수형 업데이트 혹은 useReducer

## useState 함수형 업데이트
- 새로운 상태를 파라미터로 넣는 대신, 상태 업데이트를 어떻게 할 것인지 정의해 주는 업데이트 함수를 넣을 수도 있음.(함수형 업데이트)
```
const [state, setState] = useState(0);

const onChange = useCallBack(
  () => setState(prevState => prevState + 1);
)
```