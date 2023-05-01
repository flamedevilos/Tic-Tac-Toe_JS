const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");
const startCells = ["", "", "", "", "", "", "", "", ""];

let go = "circle";
infoDisplay.textContent = "Circle goes first!"

function createBoard() {
    startCells.forEach(cell => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.addEventListener('click', addGo);
        gameBoard.append(cellElement);
    });
}

createBoard();

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go);
    e.target.append(goDisplay)

    go = go === "circle" ? "cross" : "circle";  //go==="circle" signto true ?(ifnot) then "cross" : (otherwise) "circle" and is assigned to variable go
    infoDisplay.textContent = "it is now " + go + "'s go.";
    e.target.removeEventListener("click", addGo);
    checkScore();
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winner = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8],[2,4,6]
    ];

    winner.forEach(element => {
        const circleWin = element.every(cell =>
            element.every[cell].firstChild?.classList.contains('circle'));

        if (circleWin) {
            infoDisplay.textContent = " The winner is Circle!";
            allSquares.forEach(square => {
                square.replaceWith(square.cloneNode(true)) // can't remove the square so we use cloneNode()
                return
            });
        }
    });

    winner.forEach(element => {
        const crossWin = element.every(cell =>
            element.every[cell].firstChild?.classList.contains('cross'));

        if (crossWin) {
            infoDisplay.textContent = " The winner is Cross!";
            allSquares.forEach(square => {
                square.replaceWith(square.cloneNode(true)) // can't remove the square so we use cloneNode()
                return
            });
        }
    });
}


