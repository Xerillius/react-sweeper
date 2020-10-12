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

  const setButtonClass = (dim,val) => {
    console.log(dim,val)
    let status = ['inactive', 'active']
    return dim == 'm' ?
        game.totalMines == val ?
            status[1]
          : status[0]
      : dim == 'w' ?
          game.xDim == val ?
              status[1]
            : status[0]
          : game.yDim == val ?
              status[1]
            : status[0]
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
      <hr />
      <section>
        Width
        <div>
          <button className={setButtonClass('w',10)} onClick={(e) => setDim('w',10)}>10</button>
          <button className={setButtonClass('w',15)} onClick={(e) => setDim('w',15)}>15</button>
          <button className={setButtonClass('w',20)} onClick={(e) => setDim('w',20)}>20</button>
        </div>
      </section>
      <section>
        Height
        <div>
          <button className={setButtonClass('h',10)} onClick={(e) => setDim('h',10)}>10</button>
          <button className={setButtonClass('h',15)} onClick={(e) => setDim('h',15)}>15</button>
          <button className={setButtonClass('h',20)} onClick={(e) => setDim('h',20)}>20</button>
        </div>
      </section>
      <hr />
      <section>
        Mines
        <div>
          <button className={setButtonClass('m',10)} onClick={(e) => changeMines(10)}>10</button>
          <button className={setButtonClass('m',25)} onClick={(e) => changeMines(25)}>25</button>
          <button className={setButtonClass('m',50)} onClick={(e) => changeMines(50)}>50</button>
          <button className={setButtonClass('m',75)} onClick={(e) => changeMines(75)}>75</button>
        </div>
      </section>
      <hr />
      <button
        className="reset"
        onClick={handleClick}
      >
        Reset Board
      </button>
    </div>
  )
}

export default Controls