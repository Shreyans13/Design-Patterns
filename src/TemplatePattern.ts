abstract class CaffeineBrevrageWithHooks {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
      this.addCondiements()
    }
  }

  boilWater(): void {
    console.log("Boil Water")
  }

  pourInCup(): void {
    console.log("Put in cup")
  }

  abstract brew(): void;
  abstract addCondiements(): void;

  customerWantsCondiments(): boolean {
    return true;
  }
}



class Coffee extends CaffeineBrevrageWithHooks {
  brew(): void {
      console.log("Dripping coffee through filter");
  }

  addCondiements(): void {
      console.log("Adding Sugar and Milk")
  }

  customerWantsCondiments(): boolean {
      return false;
  }
}

class Tea extends CaffeineBrevrageWithHooks {
  brew(): void {
      console.log("Stepping the tea")
  }
  addCondiements(): void {
      console.log("Adding Milk")
  }
}




const run = (): void => {
  console.log("Template Pattern")
  
  console.log("COFFEE")
  const coffee = new Coffee();
  coffee.prepareRecipe();

  console.log("TEA")
  const tea = new Tea();
  tea.prepareRecipe();

};

export default run;

