import './App.css';
import {Board} from './components/Board'
import { useState } from 'react';
import { ResetButton } from './components/ResetButton';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winnerPlayer,setWinnerPlayer] = useState(false);
  const WIN_CONDITIONS = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
  ];

  const handleBoxClick = (boxId) => {
	const updateBoard = board.map((value, idx) => {
		if (idx === boxId) {
			return xPlaying === true ? "X" : "O";
		} else {
			return value;
		}
	})
	let winnerPlayerVal = checkWinner(updateBoard);
	
	setWinnerPlayer(winnerPlayerVal);
    setBoard(updateBoard);
	setXPlaying(!xPlaying);
  }

  const checkWinner = (board) => {
	for (let i = 0; i < WIN_CONDITIONS.length; i++) {
		const [x,y,z] = WIN_CONDITIONS[i];
		if (board[x] && board[x] === board[y] && board[y] === board[z]) {
			setGameOver(true);
			setWinnerPlayer(false);
			return board[x];
		}
	}
	return false;
  }

  const resetBoard = () => {
	setGameOver(false);
	setWinnerPlayer(false);
	setBoard(Array(9).fill(null));
  }

  return (
    <div className="App">
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
	 {winnerPlayer !== false &&
	  <div className='winner-status'>
		<span>Winner is: {winnerPlayer}</span>
	  </div>
	  }
	  <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
