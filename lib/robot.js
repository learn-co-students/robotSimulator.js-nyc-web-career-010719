let direction = ['north','east','south','west']

class Robot {
	//your solution here
  constructor(coordinates,bearing) {
    this.coordinates = [0,0]
    this.bearing = 'north'
  }
  setCoordinates(coord1,coord2) {
    this.coordinates = [coord1,coord2]
  }
  setBearing(bearing) {
    if (direction.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }
  place(roboObj) {
    // console.log(roboObj)
    this.setCoordinates(roboObj.x,roboObj.y)
    this.setBearing(roboObj.direction)
  }
  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }
  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'north'
        break;
    }
  }
  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch(this.bearing) {
      case 'north':
        this.coordinates = [x,++y]
        break;
      case 'east':
        this.coordinates = [++x,y]
        break;
      case 'south':
        this.coordinates = [x,--y]
        break;
      case 'west':
        this.coordinates = [--x,y]
        break;
    }
  }
  translateInstructions(input) {
    let translatingInput = input.split('')
    for (let move of translatingInput) {
      if (move === 'L') {
        this.turnLeft()
      } else if (move === 'R') {
        this.turnRight()
      } else {
        this.advance()
      }
    }
  }
}
