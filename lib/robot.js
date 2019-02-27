class Robot {
	//your solution here

  constructor(coordinates, bearing){
    this.coordinates = [0,0],
    this.bearing = "north"
  }

  setCoordinates(x,y){
    this.coordinates = [x, y]
  }

  setBearing(bearing){
    const directions = ['north', 'south', 'east', 'west']
    if (directions.includes(bearing)){
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(arg){
    this.coordinates = [arg.x, arg.y]
    this.bearing = arg.direction
    // ({ x: -2, y: 1, direction: "east" })
  }

  turnRight(bearing){
    if (this.bearing === "north"){
      this.bearing = "east"
    } else if (this.bearing === "east"){
      this.bearing = "south"
    } else if (this.bearing === "south"){
      this.bearing = "west"
    } else if (this.bearing === "west"){
      this.bearing = "north"
    }
  }

  turnLeft(bearing){
    if (this.bearing === "north"){
      this.bearing = "west"
    } else if (this.bearing === "east"){
      this.bearing = "north"
    } else if (this.bearing === "south"){
      this.bearing = "east"
    } else if (this.bearing === "west"){
      this.bearing = "south"
    }
  }

  advance(coordinates){
    if (this.bearing === "north"){
      this.coordinates[1] = this.coordinates[1] +1
    }
    if (this.bearing === "east"){
      this.coordinates[0] = this.coordinates[0] +1
    }
    if (this.bearing === "south"){
      this.coordinates[1] = this.coordinates[1] -1
    }
    if (this.bearing === "west"){
      this.coordinates[0] = this.coordinates[0] -1
    }
  }

  translateInstructions(instructions){
    let splitInstructions = instructions.split('')
    splitInstructions.forEach(instruction => {
      if (instruction === "L"){
        this.turnLeft()
      } else if (instruction === "R"){
        this.turnRight()
      } else if (instruction === "A"){
        this.advance()
      }
    })
  }

  // complexInstructions(instructions){
  //   let splitInstructions = instructions.split('')
  //   for (let i = 0; i < instructions.length; i++){
  //     translateInstructions(splitInstructions)
  //   }
  // }



}
