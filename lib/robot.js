class Robot {
  	constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(bearing){
    if (bearing == 'north' || bearing == 'east' || bearing == 'south' || bearing == 'west') {
    this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place({ x: x, y: y, direction: direction }){
    this.setCoordinates(x, y)
    this.setBearing(direction)
  }

  turnRight() {
    if (this.bearing == 'north') {
      this.bearing = 'east'
    } else if (this.bearing == 'east') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'west'
    } else if (this.bearing == 'west') {
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing == 'north') {
      this.bearing = 'west'
    } else if (this.bearing == 'west') {
      this.bearing = 'south'
    } else if (this.bearing == 'south') {
      this.bearing = 'east'
    } else if (this.bearing == 'east') {
      this.bearing = 'north'
    }
  }

  advance(){
    if (this.bearing == 'north') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] + 1)
    } else if (this.bearing == 'east') {
      this.setCoordinates(this.coordinates[0] + 1, this.coordinates[1])
    } else if (this.bearing == 'south') {
      this.setCoordinates(this.coordinates[0], this.coordinates[1] - 1)
    } else if (this.bearing == 'west') {
      this.setCoordinates(this.coordinates[0] -1, this.coordinates[1])
    }
  }

  translateInstructions(str) {
    str.split('').forEach(e => {
      if (e === "L") {
        this.turnLeft()
    } else if (e === "R") {
        this.turnRight()
    } else if (e === "A") {
        this.advance()
      }
    })
  }

}
