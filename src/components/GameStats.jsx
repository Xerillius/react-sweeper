import React, { useContext } from 'react'
import {GameContext} from '../GameContext'

const GameStats = () => {
  const {game,stats} = useContext(GameContext)
  return (
    <div className='sidebar'>
      <h2>Current Game Stats</h2>
      <hr />
      {
        game.win ?
            <h1>Victory!</h1>
          : game.dead ?
                <h1>Defeat...</h1>
              : <>
                  <section>
                    <span>Remaining Tiles</span>
                    <span>{stats.remaining}</span>
                  </section>
                  <section>
                    <span>Flagged Tiles</span>
                    <span>{stats.flaggedCount}</span>
                  </section>
                </>
      }
    </div>
  )
}

export default GameStats