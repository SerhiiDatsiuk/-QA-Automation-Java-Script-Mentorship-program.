
import Car from './Car.js'; 

export default class PetrolCar extends Car {
constructor(name) {
super(name, 'petrol');
  }

  refuel() {
    console.log(`${this.name} is refueling with petrol`);
  }

 getInfo() {
    console.log(`${this.name} is a petrol car`);
  }
}
