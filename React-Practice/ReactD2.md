# React Day 02

### 참고자료: 실전 리액트 프로그래밍

- 리액트의 장점은 가상 돔을 통해서 UI를 빠르게 업데이트한다는 점
  - 돔을 수동을 관리하는 방법은 코드의 몸집이 커질수록 복잡도가 커지므로 자체적으로 라이브러리를 만들어 관리하지 않으면 복잡해질수밖에 없다.
  - 가상 돔은 이전 UI 상태를 메모리에 유지해서, 변경될 Ui의 최소 집합을 계산하는 기술 -> 불필요한 UI 업데이트는 줄고, 성능은 좋아짐.
- 리액트는 함수형 프로그래밍을 적극적으로 활용한다.

- 리액트의 제약사항
  - 렌더 함수는 순수 함수로 작성해야 함
  - 컴포넌트 상태값은 불변 객체로 관리해야 함

- 컴포넌트의 상태값을 변경할 때에는 기존 값을 변경하는게 아니라 새로운 객체를 생성해야 함.

* 이 제약사항은 반대로 렌더링 성능을 향상시킬 수 있는 장점이 되기도한다.

## 리액트 네이티브
- 리액트 네이티브를 이용하면 리액트로 안드로이드와 iOS의 네이티브 앱을 만들 수 있음.

-