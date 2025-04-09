import {useState} from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));

    const [currentPlayer, setCurrentPlayer] = useState("X");

    function handleClick(index) {
        if (board[index] || checkWinner(board)) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
        alert(winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`);
        return;
    }

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    function resetGame() {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
    }

    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return board.every(cell => cell) ? "Draw" : null;
    }

    return (
        <div style={{ textAlign: "center" }}>
        <h1>Tic-Tac-Toe</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px", margin: "auto", width: "max-content" }}>
            {board.map((cell, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(index)}
                    style={{
                        width: "100px",
                        height: "100px",
                        fontSize: "2em",
                        textAlign: "center",
                        lineHeight: "100px",
                        border: "2px solid black",
                        cursor: "pointer"
                    }}
                >
                    {cell}
                </button>
            ))}
        </div>

        <button onClick={resetGame} style={{ marginTop: "20px", padding: "10px", fontSize: "1em" }}>
            Restart Game
        </button>
    </div>
);
};