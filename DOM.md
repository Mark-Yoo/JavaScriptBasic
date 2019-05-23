# HTML 콘텐츠 조작(Manipulation)
- HTML 콘텐츠를 조작(Manipulation) 하기 위해 아래의 프로퍼티 또는 메소드를 사용할 수 있다. 마크업이 포함된 콘텐츠를 추가하는 행위는 크로스 스크립팅 공격(XSS: Cross-Site Scripting Attacks)에 취약하므로 주의가 필요하다.
```
1. textContent
2. innerText
3. innerHTML
```

# DOM 조작 방식
- innerHTML 프로퍼티를 사용하지 않고 새로운 콘텐츠를 추가할 수 있는 방법은 DOM을 직접 조작하는 것이다. 한 개의 요소를 추가하는 경우 사용한다.
  1. 요소 노드 생성 createElement() 메소드를 사용하여 새로운 요소 노드를 생성. createElement() 메소드의 인자로 태그 이름을 전달
  2. 텍스트 노드 생성 createTextNode() 메소드를 사용하여 새로운 텍스트 노드를 생성한다. 경우에 따라 생략될 수 있지만 생략하는 경우, 콘텐츠가 비어 있는 요소가 된다.
  3. 생성된 요소를 DOM에 추가 appendChild() 메소드를 사용하여 생성된 노드를 DOM tree에 추가한다. 또는 removeChild() 메서드를 사용하여 DOM tree에서 노드를 삭제할 수도 있다.