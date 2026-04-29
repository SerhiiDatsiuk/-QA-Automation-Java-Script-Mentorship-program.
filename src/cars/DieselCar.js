
import Car from './Car.js';  

export default class DieselCar extends Car {
 constructor(name) {
    super(name, "diesel");

  }

  refuel() {
    console.log(`${this.name} is refueling with ${this.type}`);
  }

  buy() {
    console.log(`${this.name} is a diesel car`);
  }
}

