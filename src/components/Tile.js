export class Tile {
  constructor(){
    this.active = false
    this.isBomb = false
    this.adjacent = -1
    this.flagged = false
    this.className = 'hidden'
    this.colors = ['bomb', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
  }

  setY = (y) => {
    this.y = y
  }

  setX = (x) => {
    this.x = x
  }

  setActive = () => {
    this.active = true
  }

  setBomb = () => {
    this.isBomb = true
  }

  setAdjacent = (adj) => {
    this.adjacent = adj
  }

  toggleFlagged = () => {
    this.flagged = !this.flagged
  }

  setClassName = (status, adjacent = null) => {
    if(status !== 'flagged'){
      this.className = `${status} ${this.colors[adjacent]}`
    } else {
      this.className = `${status}`
    }
  }
}