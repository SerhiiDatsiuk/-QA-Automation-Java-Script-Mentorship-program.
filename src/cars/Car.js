export default class Car {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  buy() {
    console.log(`Buy this ${this.name}`);
  }

  getInfo() {
    return `${this.name}, type: ${this.type}`;
  }
}
