import React, { useState, useEffect } from 'react';
import './App.scss';

import GameStats from './components/GameStats'
import Controls from './components/Controls'
import GameBoard from './components/GameBoard'
import Instructions from './components/Instructions'
import {Tile} from './components/Tile'

import {GameContext} from './GameContext'

function App() {
  // Initial state of game if no other options chosen
  const initialState = {
    xDim: 20,
    yDim: 20,
    totalMines: 40,
    display: ["unset"],
    dead: false,
    win: false,
    flagging: false
  }

  const [game, setGame] = useState(initialState)
  const [stats, setStats] = useState('');

  const getMoves = () => {
    let activeCount = 0;
    let flagCount = 0;
    if(game.display[0] !== 'unset'){
      for(let row = 0; row < game.yDim; row++){
        for(let col = 0; col < game.xDim; col++){
          if(game.display[row][col].active){
            activeCount++
          }
          if(game.display[row][col].flagged){
            flagCount++
          }
        }
      }
    }
    let remaining = (game.yDim * game.xDim) - activeCount
    return [remaining, flagCount]
  }

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

  useEffect(() => {
    if(game.display[0] === 'unset'){
      setGame({...game, dead: false, display: initGame()})
    } else {
      const result = getMoves()
      let remaining = result[0]
      let flaggedCount = result[1]
      if(remaining == game.totalMines){
        setGame({...game, win: true})
      }
      setStats({remaining: remaining, flaggedCount: flaggedCount})
    }
    
  }, [game])

  return (
    <GameContext.Provider value={{game, setGame, stats}} >
      <div className="App">
        <div className="main">
          <div className='sidebarWrap'>
            <Controls reset={initGame} />
          </div>
          <GameBoard />
          <div className='sidebarWrap'>
            <GameStats />
            <Instructions />
          </div>
        </div>
        {/* Footer */}
      </div>
    </GameContext.Provider>
  );
}

export default App;
