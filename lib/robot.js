class Robot {

  constructor() {
    this.coordinates = [0,0];
    this.bearing = 'north';
  };

  setCoordinates(horizontal, vertical) {
    this.coordinates = [horizontal, vertical];
  };

  setBearing(bearing) {
    let bearings = ['north', 'east', 'south', 'west'];

    if (bearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw "Invalid robot bearing";
    };
  };

  place(place) {
    this.setBearing(place.direction);
    this.setCoordinates(place.x, place.y);
  };

  turnRight() {
    let bearings = ['north', 'east', 'south', 'west'];
    let currentBearing = bearings.findIndex(b => b === this.bearing);
    this.setBearing(bearings[(currentBearing + 1) % 4]);
  };

  turnLeft() {
    let bearings = ['north', 'east', 'south', 'west'].reverse();
    let currentBearing = bearings.findIndex(b => b === this.bearing);
    console.log(this);
    // debugger;
    this.setBearing(bearings[(currentBearing + 1) % 4]);
  };

  advance() {
    let advanceObj = {
      'north': [0, 1],
      'east': [1, 0],
      'south': [0, -1],
      'west': [-1, 0]
    };

    Object.keys(advanceObj).forEach( b => {
      if (this.bearing === b) {
        this.setCoordinates(
          (this.coordinates[0] + advanceObj[b][0]),
          (this.coordinates[1] + advanceObj[b][1])
        );
      };
    });
  };

  translateInstructions(instructions) {
    let instructObj =
      {
        'L': this.turnLeft,
        'R': this.turnRight,
        'A': this.advance
      };

    let instructArr = instructions.split('');

    instructArr.forEach(item => {
      if (Object.keys(instructObj).includes(item)) {
        instructObj[item].apply(this);
      };
    });
  };
};
