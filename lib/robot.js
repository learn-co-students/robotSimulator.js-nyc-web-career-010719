class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
  let bearings = ["north", "south", "east", "west"]
    if (bearings.includes(bearing)) {
      this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

    // wallE.place({ x: -2, y: 1, direction: "east" });

  place(location) {
    this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
  }


  turnRight() {
    switch (this.bearing) {
      case "north":
        this.bearing = "east"
        break
      case "south":
        this.bearing = "west"
        break
      case "east":
        this.bearing = "south"
        break
      case "west":
        this.bearing = "north"
        break
    }
  }


  turnLeft() {
    switch (this.bearing) {
      case "north":
        this.bearing = "west"
        break
      case "south":
        this.bearing = "east"
        break
      case "east":
        this.bearing = "north"
        break
      case "west":
        this.bearing = "south"
        break
    }
  }

  advance() {
    switch (this.bearing) {
      case "north":
        ++this.coordinates[1]
        break
      case "south":
        --this.coordinates[1]
        break
      case "east":
        ++this.coordinates[0]
        break
      case "west":
        --this.coordinates[0]
        break
    }
  }


  translateInstructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i] === "L") {
        this.turnLeft()
      }
      else if (instructions[i] === "R") {
        this.turnRight()
      }
      else if (instructions[i] === "A") {
        this.advance()
      }
    }
  }

}
