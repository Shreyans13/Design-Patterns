interface Duck {
  fly(): void ;
  quack(): void;
}

class MallardDuck implements Duck {
  fly = () => console.log("MallardDuck Fly")
  quack = () => console.log("MallardDuck Quack")
}


interface Turkey {
  gobble(): void;
  fly(): void ;
}

class WildTurkey implements Turkey {
  gobble = () => console.log("Wild Turkey Gobble ");
  fly = () => console.log("Wild Turley Fly");
}


class MiniZoo {
  duck: Duck;
  turkey: Turkey;

  constructor(d: Duck, t: Turkey) {
    this.turkey = t;
    this.duck = d;
  }

  startZoo = () => {
    this.duck.quack();
    this.duck.fly();

    this.turkey.fly();
    this.turkey.gobble();
  }
}

const run = (): void => {
  console.log("Facade Pattern");
  const ta: MiniZoo = new MiniZoo(new MallardDuck(), new WildTurkey());
  ta.startZoo();
  
};

export default run;

