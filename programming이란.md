# 프로그래밍이란?
- 해야할 일들의 순서
- 목적은 문제의 해결
- 프로그래밍 언어마다 순서가 달라짐
- html은 tag와 attribute가 만들어져있어서 선언형 프로그래밍 언어로 구분하는 경우가 있다. (이미 정해진 tag와 attribute 이외의 것은 받아들이지 않는다.)
- JS는 프로그래밍 언어 : 프로그래밍 언어는 개발자가 컴퓨터에게 하는 명령을 문서로 작성한 것. 컴퓨터와 커뮤니케이션을 하기 위한 언어. 자연어는 아닌 인공어.
- 컴퓨터가 내 말을 어떻게 인식할 것인지에 대해서 항상 생각할 것.

- 최근에는 사람이 잘 읽을 수 있는 코드를 만드는 사람이 코드를 잘 만드는 사람이 코딩을 잘하는 것.
- 변수와 반복문은 악 = for문을 최대한 지양해야한다.
- javasciprt: 인터프리터 언어(인간의 말을 컴퓨턱 알아들을 수 있게 변환을 도와줌) - 태생적으로 javascript는 느렸다. 하지만 google의 v8 엔진 이후로 비약적으로 빨라졌다.

- 대부분의 프로그래밍 언어는 변수와 값, 키워드, 연산자, 표현식, 조건문과 반복문에 의한 흐름제어, 문, 문의 집합인 함수 그리고 객체, 배열 등의 자료구조와 같은 문법을 제공 (기본 개념이 같으므로 한 언어를 잘 배워놓으면 다른 언어의 학습에도 쓸 수 있다.)

## 자바스크립트의 탄생
- 브랜던 아이크가 개발한 언어
- Mocha -> Livescript -> Javascript
- 마이크로소프트가 등장하면서 익스플로러를 보급하고 그러면서 넷스케이프에서 사용하는 JavaScript가 아닌 Jscript라는 비슷하지만 다른 언어를 만들어냄.
- 결국 크로스 브라우징 이슈를 야기시킴.

## 자바스크립트의 파편화와 표준화
- 향후에 생길 수 있는 크로스 브라우징 이슈를 해결하기 위해서 넷스케이프 쪽에서 마이크로소프트에 제안. ECMAScript(표준안)의 탄생. Javascript와 완전히 동일하지는 않음.
- ES5는 flash의 사장과 함께 떠올랐다. 영상 삽입 등의 기능이 불가능했떤 HTML4가 이를 계기로 HTML5에 영상 삽입 등의 기능을 지원허기 시작함.
- Javascirpt의 위상이 높아지면서 범용소프트웨어를 제작할 수 있는 범용언어가 되어가고 있다.
- Ajax(Asynchronous JavaScript and XML) : 마이크로소프트에서 탄생. 구글에서 이를 이용해서 google maps를 만듦. 웹 어플리케이션의 가능성을 찾음. 

## JavaScript 성장의 역사
- jQuery 크로스 브라우징을 기본적으로 지원한다. Javascript의 어려운 문법을 간단하게 바꿔준다.
- 하지만 큰 문제점이 존재 : 향후 추가 예정
- 브라우저에서만 동작하던 V8 엔진을 빼서 그대로 만든 것이 node.js -> javascript로 브라우저 환경 뿐만이 아닌 오프라인 환경에서도 사용가능한 앱을 제작할 수 있는 세상이 열림.
- 다양한 일들을 할 수 있지만 인터프리터 언어라는 특성상 다른 언어들에 비해서 약간 느림.

## Javascript와 ECMAScript의 차이
- 모든 언어들은 API를 지원함 -> 이를 사용해서 코딩을 하게 되어있음.
- ECMAScript와 클라이언트 사이드 Web API(브라우저 제조사에서 만듦)를 전부 포함해서 Javascript라고 부른다.
- Javascript를 실행할 수 있는 환경은 두 가지 -> 브라우저(개발자 모드의 콘솔 창, html에 script를 추가하고 라이브 서버), Node.js
    - 브라우저 : ES + Web API (가장 기본적인 역할은 html과 css를 해석해서 렌더링 하는 것. Web API는 클라이언트 환경에서만 구동한다. 보안을 이유로 컴퓨터 안에 접근하는 것을 불허함)
    - Node.js : V8 엔진을 기반으로 ES + Node.js API (클라이언트에게서 온 레퀘스트에 리스폰스 하는 것이 주요한 기능이므로 Web API는 필요하지 않음. 브라우저 환경에 기반해서 만든 코드가 작동하지 않는 이유. 내 서버에서 작동하므로 파일에 접근하는 권한들이 부여됨.)
    - 양쪽에서 중요하게 작동하는 ECMAScript를 Core라고 부름. 제일 먼저 익히고 배워야 함. 그 이후에 Web API를 배워야 함. V8엔진은 ES만을 가지고 있고 Web API는 각 브라우저에서 가지고 있음.

## 자바스크립트의 특징
- 인터프리터 언어. 컴파일은 하지만 실행파일을 만들지 않으므로 컴파일 언어라는 말은 맞지 않는다.
- 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based), 객체지향 프로그래밍을 지원하는 멀티 패러다임형 프로그래밍 언어이다.
    - 객체지향 프로그래밍이란 클래스로 쪼개어놓고 객체라는 것들이 서로 상호작용을 하면서 실행을 함 (매우 복잡한 방식) -> 함수형으로 회귀하자는 움직임이 있음
    - 대부분의 언어는 이 중 하나만을 제공하지만 javascript는 모두를 제공한다. 결국 효율성과 장단점을 구분하고 사용해야 하는건 프로그래머의 몫이 된다.
- 패러다임에 대한 심도깊은 이해가 필요함 : 결국 모두 알아야 함

## ES6 브라우저 지원 현황
- ES6가 현재 모든 브라우저에서 지원하는 것은 아님
- 하지만 Angular나 React는 ES6 기준으로 만들어져 있음
- ES6를 하위 버전으로 바꿔주는 babel이라는 프레임워크가 존재함.
