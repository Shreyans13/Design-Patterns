interface Command {
  execute(): void;
  undo(): void;
}

class Light  {
  on = (): void => console.log("light is on")
  off = (): void => console.log("light is off")
}

class Stero {
  on = (): void => console.log("Stero is on")
  setCd = (): void => console.log("SET CD")
  setVolume = (vol: number): void => console.log(`Volume set to ${vol}`)
  off = (): void => console.log("Stero is off")
}

type SPEED =  "HIGH" | "MEDIUM" | "LOW" | "OFF"

class CeilingFan {

  speed: SPEED = "OFF";

  setLowSpeed() :void {
    this.speed = "LOW";
    console.log(`Ceiling Fan at ${this.speed}`);
  }

  setMediumSpeed() :void {
    this.speed = "MEDIUM";
    console.log(`Ceiling Fan at ${this.speed}`);
  }

  setHightSpeed() :void {
    this.speed = "HIGH";
    console.log(`Ceiling Fan at ${this.speed}`);
  }

  off(): void {
     this.speed = "OFF"; 
    console.log(`Ceiling Fan at ${this.speed}`);
  }

  getSpeed():SPEED {
    return this.speed;
  }
}

class LightOnCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute = (): void => this.light.on();
  undo = (): void => this.light.off();
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute = (): void => this.light.off();
  undo = (): void => this.light.on();
}

class SteroOnWithCDCommand implements Command {
  stero: Stero;
  constructor(s: Stero) {
    this.stero = s;
  }
  execute(): void {
    this.stero.on();
    this.stero.setCd();
    this.stero.setVolume(13);
  }

  undo(): void {
      this.stero.off();
  }
}

class SteroOffWithCDCommand implements Command {
  stero: Stero;
  constructor(s: Stero) {
    this.stero = s;
  }
  execute(): void {
    this.stero.off();
  }
  undo(): void {
      this.stero.on();
      this.stero.setCd();
      this.stero.setVolume(13);
  }
}



class NoCommand implements Command {
  execute(): void { }
  undo(): void { }
}

class CeilingFanHighCommand implements Command {
  cf: CeilingFan;
  prevSpeed?: SPEED;

  constructor(cf: CeilingFan) {
    this.cf = cf;
  }
  execute(): void {
    this.prevSpeed = this.cf.getSpeed();
    this.cf.setHightSpeed();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case "HIGH":
        this.cf.setHightSpeed();
        break;
      case "MEDIUM":
        this.cf.setMediumSpeed();
        break;
      case "LOW":
        this.cf.setLowSpeed();
        break;
      default:
        break;
    }
  }
}


class CeilingFanOFFCommand implements Command {
  cf: CeilingFan;
  prevSpeed?: SPEED;

  constructor(cf: CeilingFan) {
    this.cf = cf;
  }
  execute(): void {
    this.prevSpeed = this.cf.getSpeed();
    this.cf.off();
  }

  undo(): void {
    switch (this.prevSpeed) {
      case "HIGH":
        this.cf.setHightSpeed();
        break;
      case "MEDIUM":
        this.cf.setMediumSpeed();
        break;
      case "LOW":
        this.cf.setLowSpeed();
        break;
      default:
        break;
    }
  }
}

class RemoteControl {
  onCommand: Command[] = new Array<Command>(7);
  offCommand: Command[] = new Array<Command>(7);
  undoCommand: Command =  new NoCommand();
  
  constructor() {
    this.onCommand.fill(new NoCommand());
    this.offCommand.fill(new NoCommand());
  }

  setCommand = (slot: number, onComm: Command, offComm: Command): void => {
    if (slot >= 0 || slot <= 7) {
      this.onCommand[slot] = onComm;
      this.offCommand[slot] = offComm;
    }

  }

  onButtonPressed = (slot: number): void => {
    this.onCommand[slot].execute();
    this.undoCommand = this.onCommand[slot];
  }

  offButtonPressed = (slot: number): void => {
    this.offCommand[slot].execute();
    this.undoCommand = this.offCommand[slot];
  }

  undoButtonPressed = (): void => this.undoCommand.undo();
}



const run = (): void => {
  console.log("ComplexCommandPattern")

  const remote = new RemoteControl();
  const light = new Light();
  const stero = new Stero();
  const ceilingFan = new CeilingFan();




  remote.setCommand(0, new LightOnCommand(light), new LightOffCommand(light));
  remote.setCommand(1, new SteroOnWithCDCommand(stero), new SteroOffWithCDCommand(stero));
  remote.setCommand(2, new CeilingFanHighCommand(ceilingFan), new CeilingFanOFFCommand(ceilingFan));



  remote.onButtonPressed(0);
  remote.offButtonPressed(0);
  remote.onButtonPressed(1);
  
  remote.undoButtonPressed();
  
  remote.onButtonPressed(2);
  remote.offButtonPressed(2);


}


export default run;
