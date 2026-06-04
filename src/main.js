import Car from "./cars/Car.js";
import DieselCar from "./cars/DieselCar.js";
import PetrolCar from "./cars/PetrolCar.js";
import HybridCar from "./cars/HybridCar.js";

const regularCar = new Car("Generic Car", "Combi");
const dieselCar = new DieselCar("BMW X5");
const petrolCar = new PetrolCar("Mazda 3");
const hybridCar = new HybridCar("Toyota Prius", 8.8);

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
