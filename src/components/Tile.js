export class Tile {
  constructor(){
    this.x = null
    this.y = null
    this.active = false
    this.isBomb = false
    this.adjacent = -1
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
}