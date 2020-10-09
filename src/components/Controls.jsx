import React, { useContext } from 'react'
import {GameContext} from '../GameContext'

const Controls = () => {
  const {game, setGame} = useContext(GameContext)
  const toggleFlag = () => {
    setGame({...game, flagging: !game.flagging})
  }

  return (
    <div className="controls">
      <h1>Controls go here</h1>
      <section>
        <div className="flag-con">
          Flagging
          <label className="switch">
            <input type="checkbox"
              onChange={toggleFlag}
            />
            <span className="slider round" />
          </label>
        </div>
      </section>
      <section>
        <h3>Set Width #Tiles</h3>
      </section>
      <section>
        <h3>Set Height #Tiles</h3>
      </section>
    </div>
  )
}

export default Controls