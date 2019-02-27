class Robot {
  constructor (coordinates, bearing){
    this.coordinates = [0,0];
    this.bearing = 'north';
  }

  setCoordinates(cord1, cord2){
    this.coordinates = [cord1, cord2]
  }

  setBearing(bearing){
    let directions = ["north", "south", "east", "west"];
    if (directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(robotObj){
    this.setCoordinates(robotObj.x, robotObj.y)
    this.setBearing(robotObj.direction)
  }

  turnRight(){
    switch (this.bearing) {
      case 'north':
        this.setBearing('east');
        break;
      case 'east':
        this.setBearing('south');
        break;
      case 'south':
        this.setBearing('west');
        break;
      case 'west':
        this.setBearing('north');
        break;
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case 'north':
        this.setBearing('west');
        break;
      case 'west':
        this.setBearing('south');
        break;
      case 'south':
        this.setBearing('east');
        break;
      case 'east':
        this.setBearing('north');
        break;
    }
  }

  advance(){
    let x = this.coordinates[0]
    let y = this.coordinates[1]
    switch (this.bearing) {
      case 'north':
        this.coordinates = [x, ++y];
        break;
      case 'east':
        this.coordinates = [++x, y];
        break;
      case 'south':
        this.coordinates = [x, --y];
        break;
      case 'west':
        this.coordinates = [--x, y];
        break;
    }
  }

  translateInstructions(input){
    let translateInstructions = input.slice('')
    for (let move of translateInstructions) {
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
