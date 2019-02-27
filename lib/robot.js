class Robot {
  constructor() {
    this.coordinates = [0,0];
    this.bearing = "north";
  };

  setCoordinates(h, v) {
    this.coordinates = [h, v];
  };

  setBearing(bearing) {
    let bearings = ["north", "east", "south", "west"];
    if(bearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw "Invalid robot bearing";
    };
  };

  place(obj) {
    // this.bearing = obj.direction
    // this.coordinates = [obj.x, obj.y]
    this.setBearing(obj.direction);
    this.setCoordinates(obj.x, obj.y);
  }

  turnRight() {
    let bearings = ["north", "east", "south", "west"];

    let current = bearings.indexOf(this.bearing)
    this.bearing = bearings[(current + 1) % 4];

  }

  turnLeft() {
    let bearings = ["north", "east", "south", "west"].reverse();

    let current = bearings.indexOf(this.bearing)
    this.bearing = bearings[(current + 1) % 4];
  }

  advance() {
    let advanceCoordinates = {
      north: [0,1],
      east: [1,0],
      south: [0,-1],
      west: [-1,0]
    }

    let addCoordinate = advanceCoordinates[this.bearing]

    let newCoordinates = [this.coordinates[0] + addCoordinate[0], this.coordinates[1] + addCoordinate[1]]

    this.coordinates = newCoordinates

  }

  translateInstructions(instructions) {
    let splitInstructions = instructions.split("")

    splitInstructions.forEach(i => {
      if (i === "L") {
        this.turnLeft()
      } else if (i === "R") {
        this.turnRight()
      } else if (i === "A") {
        this.advance()
      }
    })
  }

}
