export class Ship {
  constructor(name, size) {
    this.name = name
    this.size = size
    this.positions = []
    this.modules = []
    this.isSunk = false
    this.orientations = ['N', 'E', 'S', 'W']
  }

  isSunken() {
    this.isSunk = this.modules.every(module => module.isHit)
    return this.isSunk
  }

  setOrientation(orientation) {
    this.orientation = this.orientations[orientation]
  }

  setModules(modules) {
    this.modules = modules
    this._setPositions()
  }

  _setPositions() {
    if(this.modules.length === 0) return
    for (const module of this.modules) {
      this.positions.push(module.position)
    }
    
    return this.positions
  }
}
