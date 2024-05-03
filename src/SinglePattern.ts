class Singleton {
  private static uniqueInstance: Singleton;

  private constructor() { }

  static getInstance = (): Singleton => {
    if (Singleton.uniqueInstance == null)
      Singleton.uniqueInstance = new Singleton()
    return Singleton.uniqueInstance;
  }
}

const run = (): void => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 == s2) console.log("Singleton works ");
  else console.log("Singleton Failed")

};

export default run;

