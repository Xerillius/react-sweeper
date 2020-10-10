import React, {useContext} from 'react'
import {GameContext} from '../GameContext'

const Column = ({y, x}) => {
  const {game, setGame} = useContext(GameContext)

  // List of neighbors for easy updating
  const neighbors = [
    [-1,-1],[-1, 0],[-1, 1],
    [ 0,-1],        [ 0, 1],
    [ 1,-1],[ 1, 0],[ 1, 1]
  ]

  const checkAdjacentForBombs = (y,x) => {
    let bombCount = 0
    neighbors.forEach(neighbor => {
      let nY = neighbor[0] + y
      let nX = neighbor[1] + x
      if(nY >= 0 && nY < game.yDim && nX >= 0 && nX < game.xDim){
        if(game.display[nY][nX].isBomb){
          bombCount += 1
        }
      }
    })
    return bombCount
  }

  const revealNeighbors = (y,x,tempBoard) => {
    let repeat = []
    neighbors.forEach(neighbor => {
      let nY = neighbor[0] + y
      let nX = neighbor[1] + x
      if(nY >= 0 && nY < game.yDim && nX >= 0 && nX < game.xDim){
        if(!tempBoard[nY][nX].active){
          let adj = checkAdjacentForBombs(nY,nX)
          tempBoard[nY][nX].setAdjacent(adj)
          tempBoard[nY][nX].setActive()
          if(adj === 0){
            repeat.push([nY,nX])
          }
        }
      }
    })
    repeat.forEach(re => {
      tempBoard = revealNeighbors(re[0], re[1], tempBoard)
    })
    return tempBoard
  }

  const handleClick = (e) => {
    if(!game.dead){
      // Get temp board for updating game state
      let tempBoard = game.display
      let activeCount = game.activeCount
      if(game.flagging){
        tempBoard[y][x].toggleFlagged()
        setGame({...game, display: tempBoard})
      } else {
        if(!game.display[y][x].flagged){
          if(!game.display[y][x].isBomb) {
            // Set this cell as active
            tempBoard[y][x].setActive()
            activeCount += 1
            // Get the number of adjacent bombs
            let adj = checkAdjacentForBombs(y,x)
            // Set adj
            tempBoard[y][x].setAdjacent(adj)
            // If adj is 0, reveal all neighbors
            if(adj === 0){
              tempBoard = revealNeighbors(y,x,tempBoard)
            }
            // Update game board
            setGame({...game, display: tempBoard})
          } else {
            // Reveal all bombs because you're dead
            for(let row = 0; row < game.yDim; row++){
              for(let col = 0; col < game.xDim; col++){
                if(tempBoard[row][col].isBomb){
                  tempBoard[row][col].setActive()
                  tempBoard[row][col].setAdjacent('bomb')
                  if(tempBoard[row][col].flagged){
                    tempBoard[row][col].toggleFlagged()
                  }
                }
              }
            }
            console.log("You Lose!")
            setGame({...game, dead: true, display: tempBoard})
          }
        }
      }
    }
  }

  return(
    <>
      {
        game.display[y][x].flagged ?
            <img 
              src={game.display[y][x].images['flag']}
              onClick={handleClick}
            />
          : 
          <img 
          src={game.display[y][x].images[String(game.display[y][x].adjacent)]}
          onClick={handleClick}
        />
      }
    </>
  )
}

export default Column