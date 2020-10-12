import React from 'react'
import tiles from '../assets/images/tiles.png'

const Instructions = () => {
  return (
    <div className='sidebar'>
      <h2>How To Play</h2>
      <hr />
      <span>Click on any hidden tile (Dark Gray) to reveal if it is...</span>
      <section>
        <img src={tiles} />
        <div className='tile_instruction'>
          <span>Empty : Blank Tile</span>
          <span>Number : Adjacent bomb tiles</span>
          <span>Bomb : You lose!</span>
        </div>
      </section>
      <section>
        <span>Flagging</span>
        <span>Flip the switch to flag potential mines</span>
      </section>
    </div>
  )
}

export default Instructions