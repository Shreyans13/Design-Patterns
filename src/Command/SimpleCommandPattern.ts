interface Command {
  execute(): void;
}

class Light {
  on = (): void => {
    console.log("Light is ON")
  }

  off = (): void => {
    console.log("Light is OFF")
  }
}


class LightOnCommand implements Command {
  light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }
}

class SimpleRemoteControl {
  command: Command;

  constructor(c: Command) {
    this.command = c;
  }

  buttonPressed = (): void => {
    this.command.execute();
  }
}

const run = (): void => {
  console.log("SimpleCommandPattern")
  const remote = new SimpleRemoteControl(new LightOnCommand(new Light()));
  remote.buttonPressed();
}


export default run;
