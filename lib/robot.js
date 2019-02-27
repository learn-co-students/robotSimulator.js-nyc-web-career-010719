class Robot {
	constructor(coordinates=[0,0], bearing="north") {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x, y) {
    this.coordinates = [x,y]
    // debugger
  }

  setBearing(direction) {
    if (direction === "north" || direction === "south" || direction === "east" || direction === "west") {
      this.bearing = direction
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place(thing) {
    this.setCoordinates(thing.x, thing.y)
    this.setBearing(thing.direction)
  }

  turnRight() {
    if (this.bearing === "north") {
      this.setBearing("east")
    } else if (this.bearing === "south") {
      this.setBearing("west")
    } else if (this.bearing === "east") {
      this.setBearing("south")
    } else if (this.bearing === "west") {
      this.setBearing("north")
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.setBearing("west")
    } else if (this.bearing === "south") {
      this.setBearing("east")
    } else if (this.bearing === "east") {
      this.setBearing("north")
    } else if (this.bearing === "west") {
      this.setBearing("south")
    }
  }

  advance() {
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    if (this.bearing === "north") {
      this.setCoordinates(x, y+1)
    } else if (this.bearing === "south") {
      this.setCoordinates(x, y-1)
    } else if (this.bearing === "east") {
      this.setCoordinates(x+1, y)
    } else if (this.bearing === "west") {
      this.setCoordinates(x-1, y)
    }
  }

  translateInstructions(instructions) {
    for (var i = 0; i < instructions.length; i++) {
      this.translateInstruction(instructions[i])
    }
  }

  translateInstruction(instruction) {
    if (instruction == "L") {
      this.turnLeft()
    } else if (instruction == "R") {
      this.turnRight()
    } else if (instruction == "A") {
      this.advance()
    }
  }

}
