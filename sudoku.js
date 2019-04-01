// output of what a board should look like
// used to test quickly all possiblities
var test_board = [[1,2,0,[],[],6,7,8,9],
            [4,5,6,7,8,9,1,2,3],
            [7,8,9,1,2,3,4,5,6],
            [2,3,4,5,6,7,8,9,1],
            [5,6,7,8,0,1,2,3,4],
            [8,9,1,0,3,4,5,6,7],
            [3,4,5,6,7,8,9,1,2],
            [6,7,8,9,1,2,3,4,5],
            [9,1,2,3,4,5,6,7,8]];

// test easy puzzle
var easy_puzzle = [[0,0,2,1,7,0,0,0,6],
                    [0,9,0,0,0,8,0,5,3],
                    [0,4,0,3,0,0,0,1,8],
                    [0,0,0,8,0,0,6,4,0],
                    [9,8,0,0,2,7,0,0,1],
                    [0,0,3,0,9,0,0,2,7],
                    [5,0,1,9,0,0,0,7,0],
                    [0,7,0,4,5,1,9,6,0],
                    [4,2,9,0,3,0,0,0,0]];

// test hard puzzle
var hard_puzzle = [[0,8,0,0,2,0,5,6,0],
                    [0,0,0,1,0,0,0,0,7],
                    [0,0,0,0,0,0,0,0,0],
                    [0,5,0,0,9,0,4,0,8],
                    [0,0,7,8,0,0,0,0,3],
                    [0,9,0,0,1,0,0,5,0],
                    [2,0,4,0,0,0,8,0,0],
                    [0,6,0,0,8,5,0,0,0],
                    [0,0,0,2,0,0,1,0,0]];             

// will solve a board once its created or inputed
function bruteSolver(board){
    console.table(board);

    // console.log("111111111111111111111111");
    let result;
    let solutions = 0;
    board = fillPosibilities(board);
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(typeof board[i][j] == 'number'){
                // console.log("3333333333333333");
                removeDupes(board, i, j, Math.sqrt(board.length));
            }
        }
    }
    let singles = lookForSingles(board);
    while(singles){
        // console.table(board);
        board = singles;
        singles = lookForSingles(board);
    }
    if(noPossibilities(board)){
        // console.log("2222222222222");
        return false;
    }
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(Array.isArray(board[i][j])){
                for(let k = 0; k < board[i][j].length; k++){
                    // console.log(i, j, k);
                    // testBoard = board;
                    let testBoard = JSON.parse(JSON.stringify(board));
                    console.log(testBoard[i][j]);
                    testBoard[i][j] = board[i][j][k];
                    console.log(testBoard[i][j]);
                    testBoard = removeDupes(testBoard, i, j, Math.sqrt(board.length));
                    // console.log(board[i][j]);
                    // console.table(board[0]);
                    // console.table(board);
                    testBoard = bruteSolver(testBoard);
                    if(testBoard && isSolved(testBoard)){
                        console.log("3333333333333");
                        console.table(testBoard);
                        board = testBoard;
                        solutions++;
                    }
                }
                
            }
        }
    }
    if(noPossibilities(board) || verifyBoard(board)){
        // console.log("22222222222222222222");
        return false;
    }
    // console.table(board);
    // console.log(verifyBoard(board));
    // console.log(isSolved(board));
    // console.log(solutions);
    // if(isSolved(board)){
    //     if(verifyBoard(board)){
    //         return 1;
    //     } else {
    //         return -1;
    //     }
    // }
    return board;
}

function fillPosibilities(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 0){
                // console.log("44444444444444");
                board[i][j] = Array(board.length).fill().map((x,i)=>i+1);
            }
        }
    }
    // console.table(board);
    return board;
    // removeDupes(board);
}

function noPossibilities(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(Array.isArray(board[i][j]) && !board[i][j].length){
                // console.table(board);
                // console.log("impossible board!");
                return true;
            }
        }
    }
    return false;
}

function isSolved(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(typeof board[i][j] !== 'number'){
                return false;
            }
        }
    }
    return true;
}

function buildPuzzle(board){
    // needs to be solver(board)
    // want to make sure there is just one solution.
    while(verifyBoard(board)){
        let x = Math.floor(Math.random()*9);
        let y = Math.floor(Math.random()*9);
        board[x][y] = 0;
        board[(board.length - 1) - x][(board.length - 1) - y] = 0;
    }
    console.table(board);
}

function verifyBoard(board){
    for(let i = 0; i < board.length; i++){
        let size = Math.sqrt(board.length);
        let testArr = [];
        for(let j = Math.floor(i/size%size)*size; j < (Math.floor(i/size%size)*size) + 3; j++){
            for(let k = Math.floor(i/size%size)*size; k < (Math.floor(i/size%size)*size) + 3; k++){
                testArr.push(board[j][k]);
            }
        }
        if(!(board[i].length == new Set(board[i]).size) || !(board.map(x => x[i]).length == new Set(board.map(x => x[i])).size) || !(testArr.length == new Set(testArr).size)){
            // NOT UNIQUE!!!
            return false;
        }
    }
    // IS UNIQUE!
    return true;
}

//function to generate a new board.
// works for different size boards. tested with 9x9 and 25x25
// as long as the board has a solid square root should work no issue.
function fillBoard(size = 9, board = new Array(size)){
    // if the board passed in check if it is populated, if its empty it is filled with arrays of arrays of the given size.
    if(!Array.isArray(board[size-1])){
        for( let i = 0; i < size; i++){
            board[i] = new Array(size);
            for(let j = 0; j< size; j++){
                // makes each "board[i][j]" an array [1,2,3,4,5,6,7,8,9]
                // this would allow it to make boards of different sizes and not hard coded
                board[i][j] = Array(size).fill().map((x,i)=>i+1);
            }
        }
    }
    board = lookForSingles(board);
    // this count will to be try x number of times before backtracking a whole nother row
    // I believe it should be reset everytime we finish a row
    // almost positively wrong be wrong...
    // maybe switch to an array: index 0 the row we are swapping, if(count[0] < i)
    let count = [0,0];
    // loops though the array to find the next array of possibilities
    for( let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(Array.isArray(board[i][j]) && board[i][j].length){
                // selects a random number from the array of arrays
                board[i][j] = board[i][j][Math.floor(Math.random() * board[i][j].length)];
                // sends to remove dupes to remove the selected number from other possible positions
                board = removeDupes(board, i, j, Math.sqrt(size));
                // relook for singles though the board
                board = lookForSingles(board);
            } else if(!Array.isArray(board[i][j])){
                board = removeDupes(board, i, j, Math.sqrt(size));
                board = lookForSingles(board);
            // if it finds an array but has no length, means there are no possible numbers.
            } else if(Array.isArray(board[i][j]) && !board[i][j].length){
                count[1]++;
                count[0] = i;
                // console.log("no possibilities", count, "row: ", i);
                // after 10 tries reset a previously completed row. works!
                for(let k = i - Math.floor(count[1]/10); k < board.length; k++){
                    if(count[1] > 9){
                        count[0] = k;
                        count[1] = 0;
                        i = k;
                    }
                    for(let l = 0; l < board[k].length; l++){
                        board[k][l] = Array(size).fill().map((x,y)=>y+1);
                    }
                }
                j = -1;
                i = 0;
            }
            // need to rething this count reset.
            if(count[0] < i && count[1] > 0){
                // console.log("reset count");
                count[1] = 0;
            }
        }
    }
    // logs "finished" board
    // console.log("DONE!");
    if(verifyBoard(board)){
        console.table(board);
        return board;
    } else {
        fillBoard();
    }
}

// Looks for spots where only on possible number available on the board
function lookForSingles(board){
    let found = false;
    for( let i = 0; i < board.length; i++){
        for(let j = 0; j< board[i].length; j++){
            if(Array.isArray(board[i][j]) && board[i][j].length == 1){
                found = true;
                board[i][j] = board[i][j][0];
                board = removeDupes(board, i, j, Math.sqrt(board.length));
            } else if(!board[i][j]){
                // possibly delete this else if.
            }
        }
    }
    if(found){
        return board;
    }
    return false;
}

// looks through rows and columns and 3x3 squares and removes the number given.
function removeDupes(board, x, y, size){
    for( let i = 0; i < board[x].length; i++){
        if(Array.isArray(board[x][i])){
            if(board[x][i].includes(board[x][y])){
                board[x][i].splice(board[x][i].indexOf(board[x][y]), 1);
            }
        }
    }
    for(let i = 0; i < board.length; i++){
        if(Array.isArray(board[i][y])){
            if(board[i][y].includes(board[x][y])){
                board[i][y].splice(board[i][y].indexOf(board[x][y]), 1);
            }
        }
    }
    for(let i = Math.floor(x / size) * size; i < Math.floor(x / size) * size + size; i++){
        for(let j = Math.floor(y / size) * size; j < Math.floor(y / size) * size + size; j++){
            if(Array.isArray(board[i][j])){
                if(board[i][j].includes(board[x][y])){
                    board[i][j].splice(board[i][j].indexOf(board[x][y]), 1);
                }
            } else if(!board[i][j]){
                // possibly delete this else if

            }
        }
    }
    return board;
}
// console.log("should be false ")
// console.log(verifyBoard(board));
// fillBoard();
// buildPuzzle(fillBoard());
console.log(bruteSolver(hard_puzzle));