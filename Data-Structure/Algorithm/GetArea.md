# 넓이가 1x1인 2차원 배열의 정사각형의 크기를 구하는 법

```
function solution(board)
{
    var Ylength = board.length;
    var Xlength = board[0].length;
    var area = 0;

// 주어진 배열의 길이가 2 이하일 경우, 즉 1x1 크기만을 가지는 정사각형만 존재하는 경우
    if ( Ylength < 2 || Xlength < 2 ) {
        for (let i = 0; i < Ylength; i++) {
            for (let j = 0; j < Xlength; j++) {
                if ( board[i][j] === 1) {
                    area = 1;
                }
            }
        }
// 크기가 2이상인 정사각형을 찾는 경우
    } else {
        for (let i = 1; i < Ylength; i++) {
            for (let j = 1; j <Xlength; j++) {
                if (board[i][j] === 1) {
                    board[i][j] = Math.min(board[i - 1][j], board[i][j -1], board[i - 1][j - 1] ) + 1;
                    if (board[i][j] > area) {
                        area = board[i][j];
                    }
                }
            }
        }
    }
    
    area = Math.pow(area, 2);
    
    return area;
}
```

- 2차원 배열로 만드는 정사각형