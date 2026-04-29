import Car from './Car.js';
import DieselCar from './DieselCar.js';
import PetrolCar from './PetrolCar.js';
import HybridCar from './HybridCar.js';

const regularCar = new Car('Generic Car', 'Combi');
const dieselCar = new DieselCar('BMW X5');
const petrolCar = new PetrolCar('Mazda 3');
const hybridCar = new HybridCar('Toyota Prius', 8.8);

console.log(regularCar.getInfo());
regularCar.buy();

console.log(dieselCar.getInfo());
dieselCar.refuel();
dieselCar.buy();

petrolCar.refuel();
petrolCar.getInfo();

console.log(hybridCar.getInfo());
hybridCar.charge();
hybridCar.buy();