import React, { useState } from "react";
import Board from "./Board";
import calculateWinner from "./test";
const Game = () => {
    const [squares, setSquares] = useState(Array(9).fill(''))
    console.log(squares)
    const [player ,setPlayer] = useState(true)
    const winner = calculateWinner(squares);
   
   
const squaresCopy = [...squares]
const handleClick = (index)=>{
    if(squaresCopy[index] || winner) return;
    squaresCopy[index] = player ? '❎' :'🟢'
    setSquares(squaresCopy)
    setPlayer(!player)
    const history = [] ;
    history.push(squares)
    console.log(squares)
}
const backOnTime =(index)=>{
    const history = [] ;
    history.push({squaresCopy})
    console.log(history) 
}
    return (
        <div className='game'>
            <h1>Tic Tac Toe</h1>
            <Board SQ={squares} onClick={handleClick}/>
            <div className='secondContainer'>
            
            <div className='restart'><button onClick={()=>{setSquares(Array(9).fill('')) ; setPlayer(true)}}>Restart Game</button></div>
            <div className='HowIsPlaying'>{winner ? 'The WinnerIs'+ winner: 'Playing:' + (player ? '❎' :'🟢')}</div>
            <div className='steps'><button onClick={backOnTime}>Back On Time</button></div>
            </div>
        </div>
    )
}
export default Game