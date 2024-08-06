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




class TurkeyAdapter implements Duck {
  turkey: Turkey;
  constructor(t: Turkey) {
    this.turkey = t;
  }
  fly = () => {
    let i =0;
    while (i <= 5) {
      this.turkey.fly();
      i++;
    }
  }
  quack = () =>
      this.turkey.gobble();
}



const run = (): void => {
  console.log("Adapter Pattern");
  const duck:Duck = new MallardDuck();
  duck.quack();
  duck.fly();

  const ta: TurkeyAdapter = new TurkeyAdapter(new WildTurkey());
  ta.quack();
  ta.fly();
};

export default run;

