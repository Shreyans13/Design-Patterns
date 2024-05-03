interface FlyBehaviour {
  fly(): void;
}

class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log("Fly With Wings");
  }
}

class FlyNoWay implements FlyBehaviour {
  fly(): void {
    console.log("Fly No Way - It Cannot Fly");
  }
}


interface QuackBehaviour {
  quack(): void;
}

class Quack implements QuackBehaviour {
  quack(): void {
    console.log("Quack")
  }
}

class Squeak implements QuackBehaviour {
  quack(): void {
    console.log("Squeak")
  }
}

abstract class Duck {
  flyBehaviour: FlyBehaviour;
  quackBehaviour: QuackBehaviour;


  constructor(flyBehaviour: FlyBehaviour, quackBehaviour: QuackBehaviour) {
    this.flyBehaviour = flyBehaviour;
    this.quackBehaviour = quackBehaviour;
  }

  abstract display(): void;

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }
}


class MalladDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("Mallard Duck");
  }
}

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("Model Duck");
  }
}




const run = (): void => {
  console.log("Strategy Pattern");

  let md = new MalladDuck();
  md.performFly();
  md.performQuack();

  let md1 = new ModelDuck();
  md1.performFly();
  md1.performQuack();
};

export default run;

