# this
## this 키워드
- 동작(behavior)인 메소드는 자신이 속한 객체의 상태(state)를 나타내는 데이터인 상태 데이터, 즉 프로퍼티를 참조하고 상태를 변경할 수 있어야 함.
  - 이 때 메소드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 자신이 속한 객체를 가리키는 식별자를 참조할 수 있어야 함.
- 객체 리터럴 방식으로 생성한 객체의 경우, 메소드 자신이 속한 객체를 가리키는 식별자를 재귀적으로 참조 할 수 있다.
  - 하지만 자기 자신이 속한 객체를 재귀적으로 참조하는 방식은 일반적이지 않으며 바람직하지도 않음.
- 생성자 함수 내부에서는 프로퍼티 또는 메소드를 추가하기 위해 자신이 생성할 인스턴스를 참조할 수 있어야 한다. 하지만 생성자 함수에 의한 객체 생성 방식은 먼저 생성자 함수를 정의한 이후, new 연산자와 함께 생성자 함수를 호출하는 단계가 추가로 필요하다.
- this 객체 자신의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수(Self-referencing variable)이다. 함수를 호출하면 arguments 객체와 this가 암묵적으로 함수 내부에 전달됨. 함수 내부에서 arguments 객체를 지역 변수처럼 사용할 수 있는 것처럼 this도 지역 변수처럼 사용할 수 있다. 단 this가 가리키는 값은 함수 호출 방식에 의해 동적으로 결정됨.
- 자바스크립트의 this는 함수가 호출되는 방식에 따라 this에 바인딩될 객체가 동적으로 결정됨. 또한 엄격 모드(strict mode) 역시 this 바인딩에 영향을 줌.
```
바인딩(binding)
바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수는 할당에 의해 값이 바인딩된다.
```

```
1. this는 어디서든지 참조가 가능하다
2. 전역에서 this는 전역 객체 window를 가리킨다.
3. 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
4. 메소드 내부에서 this는 메소드를 호출한 객체를 가리킨다.
5. 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
```
하지만 this는 객체의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수이므로 일반적으로 객체의 메소드 또는 생성자 함수에서 의미가 있다. 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.

## 함수 호출 방식과 this 바인딩
- this에 바인딩될 객체는 함수의 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정됨.
- 렉시컬 스코프(Lexical scope) 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수를 평가하는 시점에 상위 스코프를 결정한다. this 바인딩과 혼동하지 않도록 주의하자.
```
함수를 호출하는 다양한 방식
  1. 일반 함수 호출
  2. 메소드 호출
  3. 생성자 함수 호출
  4. Function.prototype.apply/call/bind 메소드에 의한 간접 호출
```
### 일반 함수 호출
- 기본적으로 this에는 전역 객체(Global object)가 바인딩된다. 전역 함수는 물론이고 중첩 함수의 경우도 this에는 전역 객체가 바인딩된다.
- 이처럼 일반 함수로 호출된 함수 내부의 this에는 전역 객체가 바인딩 됨. 다만 this는 객체의 프로퍼티나 메소드를 참조하기 위한 자기 참조 변수이므로 객체와는 관계없는 일반 함수에서 this는 의미가 없다. 따라서 strict mode가 적용된 일반 함수 내부의 this에는 undefined가 바인딩된다.
- 메소드의 중첩 함수 내부의 this에도 전역 객체가 바인딩 된다.
- 콜백 함수 내부의 this에도 전역 객체가 바인딩된다.
- 일반 함수로 호출된 모든 함수, 중첩 함수, 콜백 함수 내부의 this에는 전역 객체가 바인딩된다.
- 하지만 메소드 내에서 정의한 중첩 함수 또는 메소드로 전달한 콜백 함수(보조 함수)의 this가 전역 객체를 바인딩하는 것은 문제가 있다. 중첩 함수 또는 콜백 함수(보조 함수)는 외부 함수를 돕는 헬퍼 함수로서 외부 함수의 일부 로직을 대신하는 경우가 대부분이다. 하지만 외부 함수인 메소드와 중첩 함수의 this가 일치하지 않는다는 것은 중첩 함수 또는 콜백 함수(보조 함수)를 헬퍼 함수로 동작하기 어렵게 만든다.
- 이를 위해서 메서드 내부에 that이라는 변수를 만들어 this를 할당한다.
- 이런 방법 이외에도 자바스크립트는 this를 명시적으로 바인딩할 수 있는 Function.prototype.apply, Function.prototype.call, Function.prototype.bind 메소드를 제공한다.
### 메소드 호출
- 메소드 내부의 this는 메소드를 호출한 객체, 즉 메소드 이름 앞의 마침표(.) 연산자 앞에 기술한 객체에 바인딩된다.
  - 주의할 것은 메소드 내부의 this는 메소드를 소유한 객체가 아닌 메소드를 호출한 객체에 바인딩된다는 것.
- 메소드는 프로퍼티에 바인딩된 함수이다. 즉, 마침표 연산자 앞에 기술한 객체와 마침표 뒤의 프로퍼티가 가리키는 함수 객체는 별도의 객체이다. 프로퍼티가 생성된 함수 객체를 가리키고 있을 뿐이다.
- 따라서 프로퍼티가 가리키는 함수 객체, 즉 메소드는 다른 객체의 프로퍼티에 할당하는 것으로 다른 객체의 메소드가 될 수도 있고, 일반 변수에 할당하여 일반 함수로 호출될 수도 있다.
- 메소드 내부의 this는 메소드를 소유한 객체완느 관계가 없고 메소드를 호출한 객체에 바인딩된다.
- this에 바인딩 될 객체는 호출 시점에 결정된다.
- 프로토타입 메소드 내부에서 사용된 this도 일반 메소드와 마찬가지로 해당 메소드를 호출한 객체에 바인딩된다.
### 생성자 함수 호출
- 생성자 함수 내부의 this는 생성자 함수가 (미래에) 생성할 인스턴스를 바인딩한다.