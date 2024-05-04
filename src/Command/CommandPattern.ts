interface Command {
  execute(): void;
}

class Light {
  on = (): void => console.log("light is on")
  off = (): void => console.log("light is off")
}

class Stero {
  on = (): void => console.log("Stero is on")
  setCd = (): void => console.log("SET CD")
  setVolume = (vol: number): void => console.log(`Volume set to ${vol}`)
  off = (): void => console.log("Stero is off")
}

class LightOnCommand implements Command {
  light: Light;
  constructor(light: Light) {
    this.light = light;
  }
  execute = (): void => this.light.on();
}

class LightOffCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }
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
}

class SteroOffWithCDCommand implements Command {
  stero: Stero;
  constructor(s: Stero) {
    this.stero = s;
  }
  execute(): void {
    this.stero.off();
  }
}



class NoCommand implements Command {
  execute(): void { }
}

class RemoteControl {
  onCommand: Command[] = new Array<Command>(7);
  offCommand: Command[] = new Array<Command>(7);

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
  }

  offButtonPressed = (slot: number): void => {
    this.offCommand[slot].execute();
  }
}

const run = (): void => {
  console.log("CommandPattern")

  const remote = new RemoteControl();
  const light = new Light();
  const stero = new Stero();




  remote.setCommand(0, new LightOnCommand(light), new LightOffCommand(light));
  remote.onButtonPressed(0);
  remote.offButtonPressed(0);
  remote.setCommand(1, new SteroOnWithCDCommand(stero), new SteroOffWithCDCommand(stero));
  remote.onButtonPressed(1);


}


export default run;
