import React, { useContext } from 'react'
import {GameContext} from '../GameContext'

const Controls = (props) => {
  const {game, setGame} = useContext(GameContext)
  const toggleFlag = () => {
    setGame({...game, flagging: !game.flagging})
  }

  const handleClick = () => {
    setGame({...game, totalMines: 10, win: false, display: ['unset']})
  }

  const setDim = (control, value) => {
    control === 'h' ?
        setGame({...game, yDim: value, display: ['unset']})
      : setGame({...game, xDim: value, display: ['unset']})
  }

  const changeMines = (mines) => {
    setGame({...game, totalMines: mines, display: ['unset']})
  }

  return (
    <div className="sidebar">
      <h2>Game Controls</h2>
      <hr />
      <section>
        Flagging
        <label className="switch">
          <input type="checkbox"
            onChange={toggleFlag}
          />
          <span className="slider round" />
        </label>
      </section>
      <section>
        Width ({game.xDim})
        <div>
          <button onClick={(e) => setDim('w',10)}>10</button>
          <button onClick={(e) => setDim('w',15)}>15</button>
          <button onClick={(e) => setDim('w',20)}>20</button>
        </div>
      </section>
      <section>
        Height ({game.yDim})
        <div>
          <button onClick={(e) => setDim('h',10)}>10</button>
          <button onClick={(e) => setDim('h',15)}>15</button>
          <button onClick={(e) => setDim('h',20)}>20</button>
        </div>
      </section>
      <section>
        Mines ({game.totalMines})
        <div>
          <button onClick={(e) => changeMines(10)}>10</button>
          <button onClick={(e) => changeMines(25)}>25</button>
          <button onClick={(e) => changeMines(50)}>50</button>
          <button onClick={(e) => changeMines(75)}>75</button>
        </div>
      </section>
      <button
        onClick={handleClick}
      >
        Reset Board
      </button>
    </div>
  )
}

export default Controls