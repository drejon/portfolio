export class Arbitrator {
  constructor(player, computer) {
    this.player = player
    this.computer = computer
    this.playerBoard = player.board
    this.computerBoard = computer.board
    this.winner = null
    this.fired = 0
  }

  checkWinState() {
    if(this.winner !== null) return this.winner
    const computerLoses = this.computer.areShipsSank()
    const playerLoses = this.player.areShipsSank()

    if(computerLoses) {
      this.player.winState = true
      this.computer.winState = false
      this.winner = `${this.player.name} wins`
    }

    if(playerLoses) {
      this.computer.winState = true
      this.player.winState = false
      this.winner = `${this.computer.name} wins`
    }

    return this.winner
  }

  reset() {
    this.player.reset()
    this.computer.reset()
    this.playerBoard = this.player.board
    this.computerBoard = this.computer.board
    this.winner = null
    this.fired = 0
  }
  
  isPlayerPlacing() {
    return this.player.isPlacing
  }
  
  fireToPlayer() {
    const winner = this.checkWinState()
    if(winner !== null) return
    if(this.player.isPlacing) {return}
    let randomPosition = this.getRandomPosition()
    let notFiredPosition = true

    while(notFiredPosition) {
      if(this.fired === 49) return
      const cell = this.player.getCell(randomPosition)
      if(!cell.isHit) {
        this.player.fired(randomPosition)
        this.fired++
        notFiredPosition = false
        this.checkWinState()
      } else {
        const newRandomPosition = this.getRandomPosition()
        randomPosition = newRandomPosition
      }
    }
  }

  getRandomPosition() {
    return {
      x: Math.floor(Math.random()*this.player.columns), 
      y: Math.floor(Math.random()*this.player.rows)
    }
  }
}
