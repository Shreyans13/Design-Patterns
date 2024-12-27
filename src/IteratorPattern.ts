class MenuItem {
}


interface Iterator<T> {
  hasNext() : boolean;
  next(): T;
}


class DinnnerMenuIterator implements Iterator<MenuItem> {

  items: MenuItem[] = [];
  position: number = 0;
  constructor(
    i: MenuItem[]
  ){
    this.items = i;
  }

  hasNext(): boolean {
      return this.position < this.items.length;
  }

  next(){
    const menuItem: MenuItem = this.items[this.position];
    this.position = this.position + 1;
    return menuItem ? menuItem : new MenuItem() ;
  }
}


export class DinnerMenu  {
  MAX_ITEMS: number  = 0;
  numberOfItems: number  = 0;
  menuItems: MenuItem[] = [];

  createIterator() {
    return new DinnnerMenuIterator(this.menuItems)
  }
}


// this could have had separate implementation al together. 
class LunchMenuIterator implements Iterator<MenuItem> {

  items: MenuItem[] = [];
  position: number = 0;
  constructor(
    i: MenuItem[]
  ){
    this.items = i;
  }

  hasNext(): boolean {
      return this.position < this.items.length;
  }

  next(){
    const menuItem: MenuItem = this.items[this.position];
    this.position = this.position + 1;
    return menuItem ? menuItem : new MenuItem() ;
  }

}


export class LunchMenu  {
  numberOfItems: number  = 0;
  menuItems: MenuItem[] = [];

  createIterator() {
    return new LunchMenuIterator(this.menuItems)
  }
}


/// code 


export class Waitress {
  lunchMenu: LunchMenu;
  dinnerMenu: DinnerMenu;

  constructor(lm: LunchMenu, dm: DinnerMenu) {
    this.lunchMenu = lm;
    this.dinnerMenu = dm;
  }

  printMenu() {
    const lm: LunchMenuIterator = this.lunchMenu.createIterator();
    const dm: DinnnerMenuIterator = this.dinnerMenu.createIterator();

    this.printMenuIte(lm)
    this.printMenuIte(dm)
  }

  printMenuIte(iterator: LunchMenuIterator | DinnnerMenuIterator) {
    while (iterator.hasNext() ) {
      const menuItem = iterator.next();
      console.log(menuItem)
    }
  }
}
