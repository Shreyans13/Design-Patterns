import StrategyPattern from "./src/StrategyPattern"
import ObserverPattern from "./src/ObserverPattern"
import DecoratorPattern from "./src/DecoratorPattern"
import SimpleFactory from "./src/FactoryPattern/SimpleFactory"
import FactoryMethod from "./src/FactoryPattern/FactoryMethod"
import AbstractFactoryPatern from "./src/FactoryPattern/AbstractFactoryPattern"
import SingletonPattern from "./src/SinglePattern"
import SimpleCommmandPattern from "./src/Command/SimpleCommandPattern"
import CommandPattern from "./src/Command/CommandPattern"
import ComplexCommandPattern from "./src/Command/ComplexCommandPattern"
import AdapterPattern from "./src/AdapterPattern"
import FacadePattern from "./src/FacadePattern"
import Tea from "./src/TemplatePattern"
import { DinnerMenu, LunchMenu, Waitress } from "./src/IteratorPattern"
import { CompositeMenu, CompositeMenuComponent, CompositeWaitress } from "./src/CompositePattern"

console.log("Init Learning")
StrategyPattern();
console.log("\n---------------------------------------------------------------\n");
ObserverPattern();
console.log("\n---------------------------------------------------------------\n");
DecoratorPattern();
console.log("\n---------------------------------------------------------------\n");
SimpleFactory();
console.log("\n---------------------------------------------------------------\n");
FactoryMethod();
console.log("\n---------------------------------------------------------------\n");
AbstractFactoryPatern();
console.log("\n---------------------------------------------------------------\n");
SingletonPattern();
console.log("\n---------------------------------------------------------------\n");
SimpleCommmandPattern();
console.log("\n---------------------------------------------------------------\n");
CommandPattern();
console.log("\n---------------------------------------------------------------\n");
ComplexCommandPattern();
console.log("\n---------------------------------------------------------------\n");
AdapterPattern();
console.log("\n---------------------------------------------------------------\n");
FacadePattern()
console.log("\n---------------------------------------------------------------\n");
Tea();
console.log("\n---------------------------------------------------------------\n");
new Waitress(new LunchMenu(), new DinnerMenu())
console.log("\n---------------------------------------------------------------\n");
new CompositeWaitress(new CompositeMenu("", ""));
console.log("\n---------------------------------------------------------------\n");

