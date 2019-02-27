class Robot {
 constructor(){
   this.coordinates = [0, 0]
   this.bearing = "north"
 }

 setCoordinates(x, y){
   this.coordinates = [x, y]
 }
 setBearing(bearing){
   const direction = ['east','west','north','south']

   if (direction.includes(bearing)){
     this.bearing = bearing
   }
   else {
     throw new Error('Invalid Robot Bearing');
   }
 }

 place(coordinatesObject){
   this.setCoordinates(coordinatesObject.x, coordinatesObject.y)
   this.setBearing(coordinatesObject.direction)
 }

 turnRight(){
   if (this.bearing === 'north'){
     this.bearing = 'east'
   }
   else if (this.bearing === 'east'){
     this.bearing = 'south'
   }
   else if (this.bearing === 'south'){
     this.bearing = 'west'
   }
   else {
     this.bearing = 'north'
   }
 }

 turnLeft(){
   switch (this.bearing) {
    case 'south':
      this.bearing = 'east'
      break;
    case 'east':
      this.bearing = 'north'
      break;
    case 'west':
      this.bearing = 'south'
      break;
    case 'north':
      this.bearing = 'west'
       break;
    }
  }

  advance(){
    switch (this.bearing) {
     case 'south':
       this.coordinates[1]--
       break;
     case 'east':
       this.coordinates[0]++
       break;
     case 'west':
       this.coordinates[0]--
       break;
     case 'north':
       this.coordinates[1]++
        break;
     }
  }

  translateInstructions(instructions){
    let parsed = instructions.split('')
    parsed.forEach(is => {
       switch (is) {
        case 'L':
          this.turnLeft()
          break;
        case 'R':
          this.turnRight()
          break;
        case 'A':
          this.advance()
          break;
        }
    })
  }
}
