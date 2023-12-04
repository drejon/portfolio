import { Cell } from "./Cell"
import { Ship } from "./Ship"

export class Game {
  constructor() {
    this.name = 'Computer'
    this.columns = 7
    this.rows = 7
    this.winState = null
    this.subscribers = []
    this.orientations = ['Horizontal', 'Vertical']
    this.board = this._generateBoard()
    this.ships = this._generateShips()
    this._placeShips()
  }

  areShipsSank() {
    const allShips = this.ships.map(ship => ship.isSunken())
    const allSank = allShips.every(sankShip => sankShip === true)
    if(allSank) {this.winState = false}

    return allSank
  }

  updatePosition(position) {
    if(this.winState === false || this.winState === true) return
    const cell = this._getCell(position)

    if(cell.isRevealed) return
    
    cell.reveal()
    cell.hit()
    this.areShipsSank()
    this._notifySubscribers()
  }

  serialize() {
    return {
      board: this.board.map(cell => cell.serialize())
    }
  }

  reset() {
    this.board = this._generateBoard()
    this._placeShips()
    this.winState = null
    this._notifySubscribers()
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber)
  }

  removeSubscribers() {
    this.subscribers = []
  }

  _notifySubscribers() {
    for (const subscriber of this.subscribers) {
      const serializedBoard = this.serialize().board
      subscriber(serializedBoard)
    }
  }

  _placeShips() {
    let shipsPlaced = 0
    
    while (shipsPlaced != 5) {
      const shipToPlace = this.ships[shipsPlaced]
      let position = this._randomPosition()

      const positions = this._getPositions(position, shipToPlace)
      const isValidPositions = this._isValidPositions(positions, shipToPlace)
      
      if(isValidPositions) {
        shipsPlaced++
      } else {
        const newPosition = this._randomPosition()
        position = newPosition
      }
    }
  }

  _isValidPositions(positions, ship) {
    const horizontals = positions[0]?.length
    const verticals = positions[1]?.length
    
    const orientation = Math.round(Math.random())
    
    if(horizontals === ship.size && verticals === ship.size) {
      const modules = []
      ship.setOrientation(this.orientations[orientation])
      positions[orientation].forEach( position => {
        const cell = this._getCell(position)
        cell.turnToModule(ship.name)
        modules.push(cell)
      })
      ship.setModules(modules)
      
      return true
    }

    if(horizontals === ship.size) {
      const modules = []
      ship.setOrientation(this.orientations[0])
      
      positions[0].map( position => {
        const cell = this._getCell(position)
        cell.turnToModule(ship.name)
        modules.push(cell)
      })
      ship.setModules(modules)

      return true
    }

    if(verticals === ship.size) {
      const modules = []
      ship.setOrientation(this.orientations[1])
      positions[1].forEach( position => {
        const cell = this._getCell(position)
        cell.turnToModule(ship.name)
        modules.push(cell)
      })
      ship.setModules(modules)
      
      return true
    }

    return false
  }

  _getPositions(position, ship) {
    const positions = []

    let horizontal = []
    for (let offset = 0; offset < ship.size; offset++) {
      const newPosition = {x: position.x + offset, y: position.y}
      const cell = this._getCell(newPosition)
      if(cell !== undefined) {
        cell.isWater ? horizontal.push(newPosition) : horizontal = []
      }
    }
    
    let vertical = []
    for (let offset = 0; offset < ship.size; offset++) {
      const newPosition = {x: position.x, y: position.y + offset}
      const cell = this._getCell(newPosition)
      
      if(cell !== undefined) {
        cell.isWater ? vertical.push(newPosition) : vertical = []
      }
    }

    positions.push(horizontal, vertical)
    
    return positions
  }

  _generateBoard() {
    const board = []

    for (const y of Array(this.rows).keys()) {
      for (const x of Array(this.columns).keys()) {
        board.push(new Cell('W', {x, y}))
      }
    }

    return board
  }

  _generateShips() {
    const ships = [
      new Ship('C', 5),
      new Ship('B', 4),
      new Ship('F', 3),
      new Ship('D', 3),
      new Ship('S', 2),
    ]

    return ships
  }

  _getCell(position) {
    return this.board.find(cell => this._matchPosition(cell.position, position))
  }

  _randomPosition() {
    return {
      x: Math.floor(Math.random()*this.columns), 
      y: Math.floor(Math.random()*this.rows)
    }
  }

  _matchPosition(a, b) {
    return a.x === b.x && a.y === b.y
  }
}

