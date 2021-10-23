import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "./test";
const Game = () => {
    const [squares, setSquares] = useState([Array(9).fill('')]);
    console.log(squares)
    const [stepNumber, setStepNumber] = useState(0)
    const [player, setPlayer] = useState(true);
    const winner = calculateWinner(squares[stepNumber]);
    //const [history , setHistory] = useState([])




    const handleClick = (index) => {
        const timeInHistory = squares.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber];
        const squaresCopy = [...current]
        if (squaresCopy[index] || winner) return;
        squaresCopy[index] = player ? '❎' : '🟢'
        setSquares([...timeInHistory, squaresCopy])
        setStepNumber(timeInHistory.length)
        setPlayer(!player)
    }
    const move = (i) => {
        setPlayer(!player)
        setStepNumber(i)
    }

    return (
        <div className='game'>
            <h1>Tic Tac Toe</h1>
            <Board SQ={squares[stepNumber]} onClick={handleClick} />
            <div className='secondContainer'>
                <div className='restart'><button onClick={() => { setSquares([Array(9).fill('')]); setPlayer(true); setStepNumber(0) }}>Restart Game</button></div>
                <div className='HowIsPlaying'>{winner ? 'The WinnerIs' + winner : 'Playing:' + (player ? '❎' : '🟢')}</div>
                <div className='steps' >
                    {
                    squares.map((e, i) => {
                        return (
                            <li key={e}>
                                <button onClick={() => { move(i) }}>Step #{i+1}</button>
                            </li>
                        )
                    })}
                    </div>
            </div>
        </div>
    )
}
export default Game