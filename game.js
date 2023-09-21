const dimensions = 5; // The initial board size is dimensions x dimensions
const winLength = 5; // How many stones needed to win
const board = []; // The game board
let turn = 'X'; // Starting player. The other player is 'O'.
const emptyString = "";
function initializeGame() {
    // TODO: Task 1
    // Initialize the game board to be an array of five arrays.
    // Each of the inner arrays should contain five empty strings.
    // Use the variable dimensions instead of hard coding the number five.
    
    /* var slider = [];
    
    for (var i = 1; i <= 13; i++) {
        slider.push(new Slider("#survey" + i, options));
    } */
    
    for (let counter = 0; counter < dimensions ; counter++) {
    
    
    let name = 'row' + counter;
    window[name] = [];
    for (let counter2 = 0; counter2 < dimensions ; counter2++) {
    
            window[name].push(emptyString);
          }
          board.push(window[name]);
        }
}
console.log(board);




function nextTurn() {
    if (turn === 'X') {
        turn = 'O';
    }
    else {
        turn = 'X';
    }
    let turnLabel = document.getElementById('turn');
    turnLabel.textContent = turn;
}

function checkWin(x, y) {
    // TODO: Task 3
    // Hint: be careful to keep yourself inside of the game board!
    // Check the neighbouring squares of the square x,y.
    // If any of them contain same character as the current turn,
    // keep on checking to that direction -- and to the opposite!
    // Number of the stones needed is in variable winLength.
}

function expandBoard(direction) {
    // TODO: Task 2 B
    // This function adds a column or a row to the board
    // depending on the direction it gets as an argument.

    drawBoard();
}

function handleClick(event) {
    let square = event.target;
    let x = square.dataset.x;
    let y = square.dataset.y;
//up above you can find the x and y variables you need to decide wich way to expand the board
//underneath you remove eventlistener from the square that was clicked
    board[y][x] = turn;
    square.textContent = turn;
    square.removeEventListener('click', handleClick);

    checkWin(x, y);
//if x or y = the first or the last item of an array expand board
// TODO: Task 2 A
// Implement the conditions when the board should be expanded.
// Ie when the player clicks the extreme rows or columns.
/* 
//if x =
if (x = 0 ) {
    expandBoard('LEFT');
}
else if ( ) {
    //if board[x] is the last item in an array
    expandBoard('RIGHT');
}
if (y = 0 ) {
        expandBoard('UP');
    }
    else if ( ) {
    //if board[y] is the last item in an array
        expandBoard('DOWN');
    }
    */

    nextTurn();
}

function createSquare(boardDiv, x, y) {
    let element = document.createElement('div');
    element.setAttribute('class', 'square');
    element.setAttribute('data-x', x);
    element.setAttribute('data-y', y);
    element.textContent = board[y][x];

    if (board[y][x] === '') {
        element.addEventListener('click', handleClick);
    }

    boardDiv.appendChild(element);
}

function drawBoard() {
    const boardDiv = document.getElementById('board');
    boardDiv.innerHTML = ''; // Clear the board first!

    for (let y = 0; y < dimensions; y++) {
        for (let x = 0; x < dimensions; x++) {
            createSquare(boardDiv, x, y);
        }
    }
}

initializeGame();
drawBoard();