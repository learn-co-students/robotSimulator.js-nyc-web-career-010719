class Robot {
  constructor() {
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    let okDirections = ["north","south","east","west"]
    if (okDirections.includes(direction)){
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(object){
    this.setCoordinates(object.x,object.y)
    this.setBearing(object.direction)
  }

  turnRight(){
    switch (this.bearing){
      case "north":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "north"
        break;
    }
  }

    turnLeft(){
      switch (this.bearing){
        case "north":
          this.bearing = "west"
          break;
        case "east":
          this.bearing = "north"
          break;
        case "south":
          this.bearing = "east"
          break;
        case "west":
          this.bearing = "south"
          break;
      }
    }

    advance(){
      switch (this.bearing){
        case "north":
          ++(this.coordinates)[1]
          break;
        case "east":
          ++this.coordinates[0]
          break;
        case "south":
          --this.coordinates[1]
          break;
        case "west":
          --this.coordinates [0]
          break;
      }
    }

    translateInstructions(instruction){
      for(let i = 0; i < instruction.length; i ++){
        if (instruction[i] === "L"){
          this.turnLeft()
        } else if (instruction[i] === "R"){
          this.turnRight()
        } else if (instruction[i] === "A"){
          this.advance()
        }
      }
    }
}
