class Robot {

	constructor(coordinates=[0,0], bearing='north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {

    function validBearing(bearing) {
      const cardinals = ['north', 'south', 'east', 'west']

      if (cardinals.indexOf(bearing) > -1){
        return true
      } else {
        return false
      }
    }

    if (validBearing(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(place) {
    this.coordinates = [place.x, place.y]
    this.bearing = place.direction
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'north'
        break
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west'
        break
      case 'west':
        this.bearing = 'south'
        break
      case 'south':
        this.bearing = 'east'
        break
      case 'east':
        this.bearing = 'north'
        break
    }
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1]++
        break
      case 'west':
        this.coordinates[0]--
        break
      case 'south':
        this.coordinates[1]--
        break
      case 'east':
        this.coordinates[0]++
        break
    }
  }

  translateInstructions(instructions) {
    instructions = instructions.split("")

    instructions.forEach( (instruction) => {
      switch(instruction) {
        case 'L':
          return this.turnLeft()
          break
        case 'R':
          return this.turnRight()
          break
        case 'A':
          return this.advance()
          break
      }
    })

  }

}

// const n = 'north'
// const s = 'south'
// const e = 'east'
// const w = 'west'

// const cardinals = {
//   n: 'north',
//   s: 'south',
//   e: 'east',
//   w: 'west'
// }
