class Robot {
	//your solution here
  constructor(coordinates=[0,0]){
    this.coordinates = coordinates
    this.bearing = 'north'
  }
  setCoordinates(x,y){
    this.coordinates = [x,y]
    // debugger
    // console.log('x:',x)
    // console.log('y:',y)
    console.log(this.coordinates)

  }
  setBearing(bearing){
    switch (bearing){
      case 'north':
        this.bearing = bearing.toLowerCase()
        break;
      case 'south':
        this.bearing = bearing.toLowerCase()
        break;
      case 'east':
        this.bearing = bearing.toLowerCase()
        break;
      case 'west':
        this.bearing = bearing.toLowerCase()
        break;
      default:
        throw new Error('Invalid Robot Bearing')
    }
  }

  place(position){
    // console.log(position.x)
    // console.log( position.y)
    // debugger
    this.setCoordinates(position.x, position.y)

    this.setBearing( position.direction)
  }

  turnRight()
  {
    switch (this.bearing){
      case 'north':
        this.setBearing ('east')
        break;
      case 'south':
        this.setBearing ( 'west')
        break;
      case 'east':
        this.setBearing ('south');
        break;
      case 'west':
        this.setBearing ('north')
        break;
      default:
        throw new Error('Invalid Robot Bearing')
    }
  }
  turnLeft()
  {
    switch (this.bearing){
      case 'north':
        this.setBearing ('west')
        break;
      case 'south':
        this.setBearing ( 'east')
        break;
      case 'east':
        this.setBearing ('north');
        break;
      case 'west':
        this.setBearing ('south')
        break;
      default:
        throw new Error('Invalid Robot Bearing')
    }
  }
  advance(){
    let xCord = this.coordinates[0]
    let yCord = this.coordinates[1]
    switch (this.bearing){
      case 'north':
        this.setCoordinates(xCord,++yCord)
        break;
      case 'south':
        this.setCoordinates(xCord,--yCord)
        break;
      case 'east':
        this.setCoordinates(++xCord,yCord)
        break;
      case 'west':
        this.setCoordinates(--xCord,yCord)

        break;
      default:
        throw new Error('Invalid Robot Bearing')
    }
  }
  translateInstruction(instruction){
    switch (instruction){
      case 'L':
        this.turnLeft()
        break;
      case 'R':
        this.turnRight()
        break;
      case 'A':
        this.advance()
        break;
      default:
        throw new Error('Invalid Robot Instruction')
    }

  }
  translateInstructions(instructions){
    for(let i = 0;i<instructions.length;i++){
      this.translateInstruction(instructions[i])
    }
  }
} // end of robot class
