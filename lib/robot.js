class Robot {
	//your solution here
  constructor(coordinates=[0,0], bearing='north'){
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(x,y){
    this.coordinates = [x,y]
  }

  setBearing(direction){
    let orientation = [`north`, `south`, `west`, `east`]
    if (orientation.includes(direction.toLowerCase()) === true) {
       this.bearing = direction.toLowerCase()
    } else {
      throw `Invalid Robot Bearing`
    }
  }

  place(obj){
    this.coordinates = [obj.x, obj.y]
    this.bearing = obj.direction.toLowerCase()
  }

  turnRight(){
    switch(this.bearing){
      case `north`:
        this.bearing = 'east'
        break;
      case `south`:
        this.bearing = `west`
        break;
      case `east`:
        this.bearing = `south`
        break;
      case `west`:
        this.bearing = `north`
        break;
    }
  }

  turnLeft(){
    switch(this.bearing){
      case `north`:
        this.bearing = 'west'
        break;
      case `south`:
        this.bearing = `east`
        break;
      case `east`:
        this.bearing = `north`
        break;
      case `west`:
        this.bearing = `south`
        break;
    }
  }

  advance(){
    switch(this.bearing){
      case `north`:
        this.coordinates[1]++
        break;
      case `south`:
        this.coordinates[1]--
        break;
      case `east`:
        this.coordinates[0]++
        break;
      case `west`:
        this.coordinates[0]--
        break;
    }
  }

  translateInstructions(instructions) {
     instructions = instructions.split("")

     instructions.forEach( (instruction) => {
       switch(instruction) {
         case 'L':
           return this.turnLeft()
           break
         case 'R':
           return this.turnRight()
           break
         case 'A':
           return this.advance()
           break
       }
     })

   }

} // end of class
