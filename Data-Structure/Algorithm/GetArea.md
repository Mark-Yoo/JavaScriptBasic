```
function solution(board)
{
    var Ylength = board.length;
    var Xlength = board[0].length;
    var area = 0;

    if ( Ylength < 2 || Xlength < 2 ) {
        for (let i = 0; i < Ylength; i++) {
            for (let j = 0; j < Xlength; j++) {
                if ( board[i][j] === 1) {
                    area = 1;
                }
            }
        }
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