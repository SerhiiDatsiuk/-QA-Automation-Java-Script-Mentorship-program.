
import Car from './Car.js'; 

export default class HybridCar extends Car {
  constructor(name, batteryCapacity) {
    super(name, "hybrid");
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.name} is charging battery (${this.batteryCapacity} kWh)`);
  }

  
  buy() {
    console.log(`${this.name} is a hybrid car (fuel + electric) and it is worth to buy`);
  }
}  
