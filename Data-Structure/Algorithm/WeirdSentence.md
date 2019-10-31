# 이상한 문자 만들기 (프로그래머스)

- 문자열 s로 주어진 문자열을 공백 기준으로 나누고 각 단어의 인덱스가 짝수인지 홀수인지에 따라서 대문자 소문자로 바꾸는 문제

```
function solution(s) {
    var answer = '';
    var splitIntoWords = s.split(" ");
    var splitIntoAlpha = splitIntoWords.map(n => n.split(""));
    
    for (let i = 0; i < splitIntoWords.length; i++) {    
        for (let j = 0; j < splitIntoAlpha[i].length; j++) {
            if (j % 2 === 0) {
                splitIntoAlpha[i][j] = splitIntoAlpha[i][j].toUpperCase();
            } else {
                splitIntoAlpha[i][j] = splitIntoAlpha[i][j].toLowerCase();
            }
        }
        splitIntoAlpha[i] = splitIntoAlpha[i].join('');
    }
    
    splitIntoAlpha = splitIntoAlpha.join(" ");
    
    console.log(splitIntoAlpha);
    return splitIntoAlpha;
}
```