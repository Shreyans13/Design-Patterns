abstract class Pizza {
  abstract pizzaName(): string;
  prepare(): void {
    console.log(`Preparing ${this.pizzaName()}`);
  }

  bake(): void {
    console.log(`Baking ${this.pizzaName()}`);
  }

  cut(): void {
    console.log(`Cut ${this.pizzaName()}`);
  }

  box(): void {
    console.log(`Box ${this.pizzaName()}`);
  }

}

class CheesePizza extends Pizza {
  pizzaName = (): string => "CheesePizza";
}

class PepperoniPizza extends Pizza {
  pizzaName = (): string => "PepperoniPizza";
}



class SimplePizzaFactory {
  createPizza(type: string): Pizza {
    return (type.toLowerCase() === "cheese") ?
      new CheesePizza() : new PepperoniPizza()
  }
}

class PizzaStore {
  factory: SimplePizzaFactory;

  constructor(pizzaFactory: SimplePizzaFactory) {
    this.factory = pizzaFactory;
  }

  orderPizza(type: string) {
    const pizza: Pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

}

const run = (): void => {
  console.log("Simple Factory")
  const pizzaStore = new PizzaStore(new SimplePizzaFactory());
  pizzaStore.orderPizza("cheese");
};

export default run;

