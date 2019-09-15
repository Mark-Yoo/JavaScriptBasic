# React Day 5
## React props
- import는 react에서 별로 필요 없음
- exports 되는게 객체나 배열이면 구조 분해할 수 있다.
```
import React from 'react';

module.export = NumberBaseball;
```

```
import React, { Component } from 'react';

export const hello = 'hello'; // import { hello }

export default NumberBaseball;  // 한 번만 사용가능
```

- webpack은 노드가 실행하므로 const를 사용해야 한다.
  - client는 babel이 바꿔주므로 import를 사용해도 된다.
  - 전부 require문을 사용해도 상관없다.

- React에서 반복문 쓰는 법 : map (반복은 좋지 않은 습관이므로 map을 사용)
- callback의 두번째 인자는 index가 들어간다.
```
{['사과', '바나나', '포도'].map(callback(v) => {
  return (
    <li>{v}</li>
  );
})}
```
- React에서 반복문 쓰는 법 : key
```
- key 값은 중복되면 안되는 고유한 값이어야 한다.
<li key={v.a}>{v.a}</li>
```
- React의 단점은 반복문의 사용이 까다롭다는 점이다.

## Try의 사용
- try를 활용하면 반복되는 코드를 줄여서 사용 할 수 있다.
- 재사용성과 성능 최적화에도 도움을 준다.