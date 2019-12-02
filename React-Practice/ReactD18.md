# React Component Styling
```
- 일반CSS: 가장 기본적인 방법
- Sass: CSS 전처리기
- CSS Module: CSS 이름이 충돌하지 않도록 자동으로 이름을 만들어주는 모듈
- styled-component: 자바스크립트 파일에 내장시키는 방법
```

## 일반 CSS
- 프로젝트는 일반 CSS 방식으로 만들어져 있음

## 리액트 이름 짓는 규칙
- 이름-클래스 형태로 지어 살수로 중복되는 경우를 없앤다.

## CSS Selector
- CSS Selector를 사용하면 CSS클래스가 특정 클래스 내부에 이쓴 경우에만 스타일을 적용할 수 있다.

## SASS 사용하기 (V2 버전에서 추가)
- SASS(Syntactically Awesome Style Sheets)는 CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해 줌.
- 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지 보수를 더욱 쉽게 해줌.

## SASS-loader 설정 커스터마이징
- 만약 SASS의 설정을 커스터마이징 할 상황이 생긴다면 create-react-app에서 만든 프로젝트는 세부 설정이 모두 숨겨져 있으므로 eject를 사용해서 꺼내주어야 한다.
(Git에 커밋되지 않은 변화가 있다면 eject는 반응하지 않으므로 커밋부터 해줘야한다.)
  - SASS library 추천: open-color, include-media(반응형 서포트 라이브러리)

## CSS Module
- CSS Moduledms CSS를 불러와서 사용할 때에 클래스 이름을 고유한 값 형태로 자동으로 만들어 컴포넌트 스타일 클래스의 이름이 중복되는 것을 막아주는 기술