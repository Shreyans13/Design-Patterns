
export abstract class CompositeMenuComponent {
  add(_menuComponent: CompositeMenuComponent) { throw new Error("UNDUPPORTED_OPERATION") }
  remove() { throw new Error("UNDUPPORTED_OPERATION") }
  getChild(_i: number) { throw new Error("UNDUPPORTED_OPERATION") }
  getName() { throw new Error("UNDUPPORTED_OPERATION") }
  getDescription() { throw new Error("UNDUPPORTED_OPERATION") }
  getPrice() { throw new Error("UNDUPPORTED_OPERATION") }
  isVegetarian() { throw new Error("UNDUPPORTED_OPERATION") }
  print() { throw new Error("UNDUPPORTED_OPERATION") }
}


export class CompositeMenuItem extends CompositeMenuComponent {
  name: string;
  desc: string;
  vegetarian: boolean;
  price: number;

  constructor(n: string, d: string, iv: boolean, p: number) {
    super();
    this.name = n;
    this.desc = d;
    this.vegetarian = iv;
    this.price = p;
  }


  public getName = (): string => this.name
  public getDescription = (): string => this.desc
  public getPrice = (): number => this.price
  public isVegetarian = (): boolean => this.vegetarian
  public print() {
    console.log(this.name)
    console.log(this.desc)
    console.log(this.vegetarian)
    console.log(this.price)
  }

}

export class CompositeMenu extends CompositeMenuComponent {
  CompositeMenuComponents: CompositeMenuComponent[] = [];
  name: string
  description: string

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  add(menuComponent: CompositeMenuComponent) {
    this.CompositeMenuComponents.push(menuComponent)
  }

  remove() {
    this.CompositeMenuComponents.pop()
  }

  getChild = (i: number) => this.CompositeMenuComponents[i];

  print(): void {
    console.log(this.name);
    console.log(this.description);
    let i = 0
    while (i < this.CompositeMenuComponents.length) {
      this.CompositeMenuComponents[i].print()
    }
  }
}

export class CompositeWaitress {
  allMenu: CompositeMenuComponent;

  constructor(menu: CompositeMenuComponent) {
    this.allMenu = menu;
  }

  print() {
    this.allMenu.print();
  }
}
