interface Dough { }
class ThinCrustDough implements Dough { }
class ThickCrustDough implements Dough { }

interface Sauce { }
class MarinaraSauce implements Sauce { }
class PlumTomaroSauce implements Sauce { }

interface Cheese { }
class ReggianoCheeese implements Cheese { }
class MozarelloCheese implements Cheese { }

interface Pepperoni { }
class SlicedPepperoni implements Pepperoni { }

interface Clams { }
class FreshClams implements Clams { }
class FrozenClams implements Clams { }

interface Veggies { }
class BlackOlives implements Veggies { }

interface PizzaIngridientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): [Veggies];
  createPepperoni(): Pepperoni;
  createClams(): Clams;
}

class NYPizzaIngridentFactory implements PizzaIngridientFactory {
  createDough = (): Dough => new ThinCrustDough();
  createSauce = (): Sauce => new MarinaraSauce();
  createCheese = (): Cheese => new ReggianoCheeese();
  createVeggies = (): [Veggies] => [new BlackOlives()];
  createPepperoni = (): Pepperoni => new SlicedPepperoni();
  createClams = (): Clams => new FreshClams()
}


class ChicagoPizzaIngridentFactory implements PizzaIngridientFactory {
  createDough = (): Dough => new ThickCrustDough();
  createSauce = (): Sauce => new PlumTomaroSauce();
  createCheese = (): Cheese => new MozarelloCheese();
  createVeggies = (): [Veggies] => [new BlackOlives()];
  createPepperoni = (): Pepperoni => new SlicedPepperoni();
  createClams = (): Clams => new FrozenClams()
}

abstract class Pizza {
  name: string;

  dough: Dough;
  sauce: Sauce;
  cheese: Cheese;
  pepperoni: Pepperoni;
  clams: Clams;

  constructor(n: string, d: Dough, s: Sauce, c: Cheese, p: Pepperoni, cl: Clams) {
    this.name = n;

    this.dough = d;
    this.sauce = s;
    this.cheese = c;
    this.pepperoni = p;
    this.clams = cl;
  }

  abstract prepare(): void;

  bake = (): void => console.log("Bake for 25 mins at 350");
  cut = (): void => console.log("Cutting the pizza into Diagnol classes ");
  box = (): void => console.log("Place pizza in official Piza Store Box");
  setName = (n: string): void => { this.name = n; }
  getName = (): string => this.name;
}


class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngridientFactory;

  constructor(ingredientFactory: PizzaIngridientFactory) {
    super("CheesePizza", ingredientFactory.createDough(), ingredientFactory.createSauce(), ingredientFactory.createCheese(),
      ingredientFactory.createPepperoni(), ingredientFactory.createClams());
    this.ingredientFactory = ingredientFactory;
  }

  prepare = (): void => {
    console.log(`Preparing + ${this.name}`);
  }
}

class PepperoniPizza extends Pizza {
  ingredientFactory: PizzaIngridientFactory;

  constructor(ingredientFactory: PizzaIngridientFactory) {
    super("PepperoniPizza", ingredientFactory.createDough(), ingredientFactory.createSauce(), ingredientFactory.createCheese(),
      ingredientFactory.createPepperoni(), ingredientFactory.createClams());
    this.ingredientFactory = ingredientFactory;
  }

  prepare = (): void => {
    console.log(`Preparing + ${this.name}`);
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



class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    const pizzaIngridientFactory = new NYPizzaIngridentFactory()
    return type.toLowerCase() == "cheese" ? new CheesePizza(pizzaIngridientFactory) : new PepperoniPizza(pizzaIngridientFactory);
  }
}


class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    const pizzaIngridientFactory = new ChicagoPizzaIngridentFactory()
    return type.toLowerCase() == "cheese" ? new CheesePizza(pizzaIngridientFactory) : new PepperoniPizza(pizzaIngridientFactory);
  }
}




const run = (): void => {
  console.log("Abstract Factory Pattern")

  const nystore = new NYPizzaStore();
  const chicagoStore = new ChicagoPizzaStore();

  const ethanPizza = nystore.orderPizza('cheese');
  console.log(`Ethan ordered ${ethanPizza.getName()}`)
  const joelPizza = chicagoStore.orderPizza('cheese');
  console.log(`Ethan ordered ${joelPizza.getName()}`)
};

export default run;

