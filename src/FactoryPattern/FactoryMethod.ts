abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: [string];


  constructor(name: string, dough: string, sauce: string, toppings: [string]) {
    this.name = name;
    this.dough = dough;
    this.sauce = sauce;
    this.toppings = toppings;

  }
  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log('Tossing Dough...');
    console.log('Adding Sauce...');
    console.log('Adding Toppings...');
    this.toppings.forEach(i => console.log(i + '\t'));
  }

  bake(): void {
    console.log('Bake for 25 mins at 350');
  }

  cut(): void {
    console.log('Cutting the pizza into diagnol classes');
  }

  box(): void {
    console.log('Place pizza in official Pizza Store Box ');
  }

  getname = (): string => this.name;

}

class NYStyleCheesePizza extends Pizza {
  constructor() {
    super('NY Style Sauce and Cheese Pizza ', 'Thin Crust Dough', 'Marinara Sauce', ['Grated Reggiano Cheese']);
  }
}

class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super('NY Style Sauce and Pepperoni Pizza ', 'Thin Crust Dough', 'Marinara Sauce', ['Grated Reggiano Cheese']);
  }
}

class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super('Chicago Style Deep Dish Cheese Pizza ', 'Extra Thick Crust Dough', 'Plum Tomato Sauce', ['Shredded Mozarella Cheese']);
  }
  cut(): void {
    console.log('Cutting the pizza into square classes ');
  }
}

class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super('Chicago Style Deep Dish Pepperoni Pizza ', 'Extra Thick Crust Dough', 'Plum Tomato Sauce', ['Extra Peeper Cheese']);
  }
}


abstract class PizzaStore {
  orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
  abstract createPizza(type: string): Pizza;
}

class NYStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    return (type.toLowerCase() === "cheese") ?
      new NYStyleCheesePizza() : new NYStylePepperoniPizza()
  }

}

class ChicagoStylePizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    return (type.toLowerCase() === "cheese") ?
      new ChicagoStyleCheesePizza() : new ChicagoStylePepperoniPizza()
  }
}





const run = (): void => {
  const nystore = new NYStylePizzaStore();
  const chicagoStore = new ChicagoStylePizzaStore();

  const ethanPizza = nystore.orderPizza('cheese');
  console.log(`Ethan ordered ${ethanPizza.getname()}`)
  const joelPizza = chicagoStore.orderPizza('cheese');
  console.log(`Ethan ordered ${joelPizza.getname()}`)
}


export default run;
