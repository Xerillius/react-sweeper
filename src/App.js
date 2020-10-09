import React, { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header'
import Controls from './components/Controls'
import GameBoard from './components/GameBoard'
import Instructions from './components/Instructions'
import {Tile} from './components/Tile'

import {GameContext} from './GameContext'

function App() {
  // Initial state of game if no other options chosen
  const initialState = {
    play: false,
    xDim: 20,
    yDim: 20,
    totalMines: 40,
    display: ["unset"],
    moves: 0,
    activeCount: 0,
    dead: false,
    flagging: false
  }

  const [game, setGame] = useState(initialState)

  const initGame = () => {
    // Init the game board
    let gameBoard = Array(game.yDim)
    for(let row = 0; row < game.yDim; row++){
      gameBoard[row] = Array(game.xDim).fill(2)
    }

    let minesLeft = game.totalMines


    while(minesLeft > 0){
      let row = Math.floor(Math.random() * game.yDim)
      let col = Math.floor(Math.random() * game.xDim)
      if(gameBoard[row][col] !== 1){
        gameBoard[row][col] = 1
        minesLeft -= 1
      }
    }

    for(let row = 0; row < game.yDim; row++){
      for(let col = 0; col < game.xDim; col++){
        let tile = new Tile()
        if(gameBoard[row][col] === 1){
          tile.setBomb()
        }
        gameBoard[row][col] = tile
      }
    }

    return gameBoard
  }

  // The game is set
  useEffect(() => {
    setGame({...game, display: initGame()})
  }, [])

  return (
    <GameContext.Provider value={{game, setGame}} >
      <div className="App">
        <Header />
        <div className="mid">
          <Controls />
          <GameBoard />
          <Instructions />
        </div>
        {/* Footer */}
      </div>
    </GameContext.Provider>
  );
}

export default App;
