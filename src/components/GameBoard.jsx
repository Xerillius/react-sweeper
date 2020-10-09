import React, { useContext } from 'react'
import Row from './Row'
import {GameContext} from '../GameContext'
import Controls from './Controls'

const GameBoard = () => {
  const {game, setGame} = useContext(GameContext)

  return(
    <div className="GameBoard">
      {
        game.display.map((row,y) => {
          return(
            <Row key={y} y={y} row={row} game={game} />
          )
        })
      }
    </div>
  )
}

export default GameBoard