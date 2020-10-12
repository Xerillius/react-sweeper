import React from 'react'

const ControlsHowTo = () => {
  return (
    <div className="sidebar">
      <h2>How to use the controls</h2>
      <hr />
      <h3>Flagging</h3>
      <section className="howto">
        Click on the slider in order to enable flagging.
        Flagging will allow you to mark a tile as a possible bomb location
      </section>
      <hr />
      <h3>Width / Height</h3>
      <section className="howto">
        Click on one of the selector buttons to determine the dimensions of the board
      </section>
      <hr />
      <h3>Mines</h3>
      <section className="howto">
        Click on one of the selector buttons to choose how many mines are on the board
      </section>
    </div>
  )
}

export default ControlsHowTo