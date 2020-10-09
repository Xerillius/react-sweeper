import Hidden from '../assets/images/hidden.png'
import Zero from '../assets/images/zero.png'
import One from '../assets/images/one.png'
import Two from '../assets/images/two.png'
import Three from '../assets/images/three.png'
import Four from '../assets/images/four.png'
import Five from '../assets/images/five.png'
import Six from '../assets/images/six.png'
import Seven from '../assets/images/seven.png'
import Eight from '../assets/images/eight.png'
import Bomb from '../assets/images/bomb.png'
import Flag from '../assets/images/flag.png'

export class Tile {
  constructor(){
    this.active = false
    this.isBomb = false
    this.adjacent = -1
    this.flagged = false
    this.className = 'hidden'
    this.colors = ['bomb', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
    this.images = {
      '-1': Hidden,
      '0': Zero,
      '1': One,
      '2': Two,
      '3': Three,
      '4': Four,
      '5': Five,
      '6': Six,
      '7': Seven,
      '8': Eight,
      'bomb': Bomb,
      'flag': Flag
    }
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
}