interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temp = 0.0;
    this.humidity = 0.0;
    this.pressure = 0.0;
  }

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    this.observers = this.observers.filter(i => i !== o);
  }

  notifyObservers(): void {
    this.observers.forEach(i => i.update(this.temp, this.humidity, this.pressure));
  }

  setMeasurements(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  measurementsChanged(): void {
    this.notifyObservers();
  }
}

class CurrentConditionDisplay implements Observer, DisplayElement {
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.temp = 0.0;
    this.humidity = 0.0;
    this.pressure = 0.0;
  }


  update(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  display(): void {
    console.log(`Temprature = ${this.temp}\t Humidity = ${this.humidity}\t Pressure = ${this.pressure}`);
  }

}


class StaticDisplay implements Observer, DisplayElement {
  private temp: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.temp = 0.0;
    this.humidity = 0.0;
    this.pressure = 0.0;
  }


  update(temp: number, humidity: number, pressure: number): void {
    this.temp = temp;
    this.humidity = humidity;
    this.pressure = pressure;
  }

  display(): void {
    console.log(`Temprature = ${this.temp}\t Humidity = ${this.humidity}\t Pressure = ${this.pressure}`);
  }

}

const run = (): void => {
  console.log("Observer Pattern")
  const weatherData = new WeatherData();
  const currentConditionDisplay = new CurrentConditionDisplay();
  const staticDisplay = new StaticDisplay();

  weatherData.registerObserver(currentConditionDisplay);
  weatherData.registerObserver(staticDisplay);
  weatherData.setMeasurements(13.0, 13.0, 13.0)
  currentConditionDisplay.display();
  staticDisplay.display();
  weatherData.removeObserver(currentConditionDisplay);
  weatherData.setMeasurements(7.0, 7.0, 7.0);
  currentConditionDisplay.display();
  staticDisplay.display();



};

export default run;

