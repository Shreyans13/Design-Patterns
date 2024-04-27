abstract class Brevrage {
  description = "Unknown Brevrage";

  getDescription(): string {
    return this.description;
  }
  abstract cost(): number;
}

class Expresso extends Brevrage {
  constructor() {
    super();
    this.description = "Expresso";
  }
  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Brevrage {
  constructor() {
    super();
    this.description = "House Blend";
  }
  cost(): number {
    return 0.89;
  }
}

abstract class BrevrageDecorator extends Brevrage {
  protected brevrage: Brevrage;

  constructor(b: Brevrage) {
    super();
    this.brevrage = b;
  }
  abstract getDescription(): string;

}

class Whip extends BrevrageDecorator {
  constructor(b: Brevrage) {
    super(b);
    // this.brevrage = b;
  }

  getDescription(): string {
    return this.brevrage.getDescription() + ", Whip";
  }
  cost(): number {
    return this.brevrage.cost() + 2.20;
  }
}


class Mocha extends BrevrageDecorator {
  constructor(b: Brevrage) {
    super(b);
    // this.brevrage = b;
  }

  getDescription(): string {
    return this.brevrage.getDescription() + ", Mocha";
  }
  cost(): number {
    return this.brevrage.cost() + 0.20;
  }
}

const run = (): void => {
  const brevrage = new Expresso();
  console.log(`${brevrage.getDescription()} = ${brevrage.cost()}`);

  const brevrage1 = new Whip(new Whip(new Mocha(new HouseBlend())));
  console.log(`${brevrage1.getDescription()} = ${brevrage1.cost()}`);
};

export default run;

