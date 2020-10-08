import React from 'react'
import Column from './Column'

const Row = ({row, y}) => {
  return (
    <section key={y} className="row">
      {
        row != 'unset' && row.map((col,x) => (
          <Column key={x} y={y} x={x} col={col} />
        ))
      }
    </section>
  )
}

export default Row