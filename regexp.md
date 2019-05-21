# 정규표현식
- 정규표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데에 사용한다.
```
const tel = '01234567팔';

// 정규 표현식 리터럴
const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel)); //false
```
- 반복문과 조건문을 사용한 복잡한 코드도 정규표현식을 이용하면 매우 간단하게 표현할 수 있다.
  - 정규표현식은 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있음

```
정규표현식은 리터럴 표기법으로 생성할 수 있다. 정규 표현식 리터럴은 아래와 같이 표현된다.

양쪽의 '/' 표시는 시작, 종료기호
내부의 'regexr' 부분에는 패턴(pattern)
종료 후 나오는 'i'는 플래그(Flag)
/regexr/i
```
- 정규표현식을 사용하는 자바스크립트 메소드는 RegExp.prototype.exec, RegExp.prototype.test, String.prototype.match, String.prototype.replace, String.prototype.search, String.prototype.split 등이 있다.
## 플래그(flag)
```
i : Ignore Case - 대소문자를 구별하지 않고 검색
g : Global - 문자열 내의 모든 패턴을 검색
m : Multi Line - 문자열의 행이 바뀌더라도 검색을 계속함
```
- 플래그는 옵션이므로 선택적을 사용
  - 플래그를 사용하지 않은 경우 문자열 내 검색 매칭 대상이 1개 이상이더라도 첫번째 매칭한 대상만을 검색하고 종료
## 패턴
- 패턴에는 검색하고 싶은 문자열을 지정한다. 이때 문자열의 따옴표는 생략. 따옴표를 포함하면 따옴표까지도 검색. 패턴은 특별한 의미를 가지는 메타문자(Metacharacter) 또는 기호로 표현할 수 있다.
```
const targetStr = 'AA BB Aa Bb';

// 임의의 문자 3개
const regext = /.../;
```
- .(따옴표)는 임의의 문자 한 개를 의미. 문자의 내용은 상관없음.
  - 이 때에는 추출을 반복하지 않고 반복하기 위해서는 플래그 g를 사용해야 한다.
```
모든 문자를 선택하려면 .(따옴표)와 g를 동시에 지정

const targetStr = 'AA BB Aa Bb';

// 임의의 한 문자를 반복 검색
const regexr = /./g;

console.log(targetStr.match(regexr));

```
앞선 패턴을 최소 한 번 반복하려면 앞선 패턴 뒤에 +를 붙인다.
```
예를 들어 A+는 A가 연속적으로 이루어져 있는 문자열을 찾아낸다.

const targetStr = 'AA AAAA BB Aa Bb';

// 'A'가 한 번 이상 반복되는 문자열 ('A', 'AA', 'AAA', ...)을 반복 검색
const regexr = /A+/g;

console.log(targetStr.match(regexr));
```
- [] 내의 문자는 or로 동작한다. 그 뒤에 +를 사용하여 앞선 패턴을 한 번 이상 반복
```
const targetStr = 'AA BB Aa Bb';

// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regexr = /[AB]+/g;

console.log(targetStr.match(regexr));
// ['AA', 'BB', 'A', 'B']
```
범위를 지정하려면 [] 내에 -를 사용한다. 아래의 경우 대문자 알파벳을 추출한다.
```
const targetStr = 'AA BB ZZ Aa Bb';

const regexr = /[A-Z]+/g;

console.log(targetStr.match(regexr));
```
\d는 숫자를 의미한다. \D \d와 반대로 동작
```
const targetStr = 'AA BB Aa Bb 24,000';

// '0' ~ '9' 또는 ','가 한 번 이상 반복되는 문자열을 반복 검색
let regexr = /[\d,]+/g;

console.log(targetStr.match(regexr));

// '0' ~ '9'가 아닌 문자(숫자가 아닌 문자) ','가 한 번 이상 반복되는 문자열을 반복 검색
regexr = /[\D,]+/g;

console.log(targetStr.match(regexr));
```
\w는 알파벳과 숫자를 의미 \W는 \w와 반대로 동작함
```
const targetStr = 'AA BB Aa Bb 24,000';

// 알파벳과 숫자 또는 ','가 한 번 이상 반복되는 문자열을 반복 검색
let regexr = /[\w,]+/g;

console.log(targetStr.match(regexr));

regexr = /[\W,]+/g;

// 알파벳과 숫자가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 반복 검색
console.log(targetStr.match(regexr));
```

## 자주 사용하는 정규 표현식
특정 단어로 시작하는지 검사
```
const url = 'http://example.com';

// ^ : 문자열의 처음을 의미
const regexr = /^http/;

// RegExp.prototype.test()는 대상 문자열에 일치하는 문자열이 포함되어 있는지 확인하고 boolean 값을 호출한다.
console.log(regexr.test(url));
```

```

const fileName = 'index.html';

// $ : 문자열의 끝을 의미한다.
const regexr = /html$/;

console.log(regexr .test(fileName));
```

숫자인지 검사
```
const targetStr = '12345';

// 모두 숫자인지 검사
// [^] : 부정(not)을 의미한다. 예를 들어 [^a-z]는 알파벳 소문나로 시작하지 않는 모든 문자를 의미한다.
// [] 바깥의 ^는 문자열의 처음을 의미한다.
const regexr = /^\d+$/;

console.log(regexr.test(targetStr));
```

하나 이상의 공백으로 시작하는지 검사
```
const targetStr = 'Hi!'

// 1개 이상의 공백으로 시작하는지 검사
// \s : 여러가지 공백 문자 (스페이스, 탭 등) => [\t\r\n\v\f]
const regexr = /^[\s+]/;

console.log(regexr.test(targetStr));
```